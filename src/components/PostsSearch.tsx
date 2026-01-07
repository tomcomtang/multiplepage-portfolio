'use client';

import { useState, useEffect } from "react";
import PostCard from "@/components/PostCard";
import { postsConfig } from "@/config/posts";

const POSTS_PER_PAGE = 5;

export default function PostsSearch() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
    // Listen for search box changes
    // const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    // if (searchInput) {
    //   const handleInput = (e: Event) => {
    //     const target = e.target as HTMLInputElement;
    //     setSearchQuery(target.value);
    //   };
    //   searchInput.addEventListener('input', handleInput);
    //   return () => searchInput.removeEventListener('input', handleInput);
    // }
  }, []);

  // Filter posts based on search query
  // const filteredPosts = postsConfig.posts.filter(post =>
  //   post.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const totalPages = Math.ceil(postsConfig.posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = postsConfig.posts.slice(startIndex, endIndex);

  // Reset to first page when search query changes
  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [searchQuery]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="hidden">
      <div className="flex flex-col items-stretch w-full gap-5">
        {currentPosts.length > 0 ? (
          currentPosts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              href={`/${post.slug}`}
              pattern="dots"
              imageUrl={post.image}
              readingTime={parseInt(post.readTime)}
            />
          ))
        ) : (
          <div className="text-center py-8 text-neutral-600 dark:text-neutral-400">
            {postsConfig.noPosts}
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {postsConfig.pagination.previous}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                currentPage === index + 1
                  ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {postsConfig.pagination.next}
          </button>
        </div>
      )}
    </div>
  );
} 