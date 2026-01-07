const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  mangle: false
});

// Generate slug from filename
function generateSlug(filename) {
  // Remove .md extension
  const nameWithoutExt = filename.replace(/\.md$/, '');
  // Convert filename to lowercase and replace spaces with hyphens
  return `posts/${nameWithoutExt.toLowerCase().replace(/\s+/g, '-')}`;
}

// Read all md files from posts directory
const postsDirectory = path.join(__dirname, '../src/posts');
const posts = [];

// Read all md files
const files = fs.readdirSync(postsDirectory);
for (const file of files) {
  if (file.endsWith('.md')) {
    const filePath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse frontmatter
    const { data, content } = matter(fileContent);
    
    // Generate HTML
    const html = marked.parse(content);
    
    // Create post object
    const post = {
      title: data.title,
      description: data.description,
      date: data.date || "2024-03-20", // Add default date
      image: data.image,
      slug: generateSlug(file), // Generate slug from filename
      tags: data.tags,
      author: data.author,
      readTime: data.readTime || "5", // Add default read time
      content: content,
      html: html
    };
    
    posts.push(post);

    const postSlug = post.slug.replace('posts/', '');
    const postHtmlPath = path.join(
      __dirname,
      '../generated/posts',
      `${postSlug}.html`
    );

    fs.mkdirSync(path.dirname(postHtmlPath), { recursive: true });
    fs.writeFileSync(postHtmlPath, html);
  }
}

// Generate posts.ts file content
const postsConfig = {
  title: "Blog Posts",
  description: "Technical articles, tutorials, and insights about web development and EdgeOne platform.",
  backButton: "Back to Home",
  noPosts: "No posts found matching your search.",
  searchPlaceholder: "Search posts by title...",
  pagination: {
    previous: "Previous",
    next: "Next"
  },
  posts: posts
};

// Generate TypeScript file content
const tsContent = `// This file is auto-generated. Do not edit manually.
import { Post } from '@/types/post';

export const postsConfig = ${JSON.stringify(postsConfig, null, 2)} as const;
`;

// Write file
const outputPath = path.join(__dirname, '../src/config/posts.ts');
fs.writeFileSync(outputPath, tsContent);

console.log('Posts generated successfully!'); 