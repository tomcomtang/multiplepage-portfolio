export const globalConfig = {
  site: {
    name: "Mochamad Miftah Rachmatullah",
    author: "Miftah Rachmatullah",
    description: "Hey there, I'm a UI/UX Designer based in Indonesian. I'm all about that minimalistic vibe, with a passion for Visual Design",
    url: "https://drive.google.com/file/d/1s0O6hAYp4VQveGV1KbytI5ELG-5mlBzv/view"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Miftah Rachmatullah. All rights reserved.",
    social: {
      linkedin: "https://www.linkedin.com/in/miftahrachmatullah",
      github: "https://github.com/miftahrachmatullah",
      email: "mochamadmiftah34@gmail.com"
    }
  }
} as const; 
