'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { globalConfig } from '@/config/global';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (!mounted) {
    return null;
  }

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header id="header" className="absolute top-0 z-50 w-full h-20">
      <div className="flex items-center justify-between h-full max-w-7xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 border-transparent select-none lg:border-r lg:border-l lg:rounded-b-xl">
        <Link href="/" className="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold whitespace-nowrap">
          <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">✦</span>
          <span className="-translate-y-0.5">{globalConfig.site.author}</span>
        </Link>

        <div
          id="mobileMenuBackground"
          onClick={closeMenu}
          className={`fixed inset-0 z-20 w-screen h-screen duration-300 ease-out bg-white/90 dark:bg-neutral-950/90 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        ></div>

        <nav className="relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row">
          <div
            id="openMenu"
            onClick={toggleMenu}
            className={`flex flex-col items-end justify-center w-6 h-6 ml-4 cursor-pointer sm:hidden ${
              isMenuOpen ? 'hidden' : 'block'
            }`}
          >
            <svg
              className="w-8 h-8 dark:text-neutral-200"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 8h16M4 16h16"></path>
            </svg>
          </div>

          <div
            id="closeMenu"
            onClick={toggleMenu}
            className={`flex flex-col items-end justify-center w-6 h-6 ml-4 -translate-x-1 cursor-pointer sm:hidden ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <svg
              className="w-6 h-6 text-neutral-600 dark:text-neutral-200"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>

          <div
            id="menu"
            className={`fixed top-[75px] ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 dm:mx-0 left-0 z-40 flex-col items-end justify-start ${
              isMenuOpen ? 'flex' : 'hidden'
            } w-full h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:text-sm sm:w-auto sm:pr-0 sm:pt-0`}
          >
            <div className="absolute inset-0 top-0 right-0 block w-full h-full px-3 sm:hidden">
              <div className="relative w-full h-full bg-white border border-dashed border-neutral-300 dark:border-neutral-700 backdrop-blur-sm rounded-xl dark:bg-neutral-950"></div>
            </div>

            {globalConfig.navigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white ${
                  isActive(item.href) ? 'text-neutral-900 dark:text-white' : ''
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
} 