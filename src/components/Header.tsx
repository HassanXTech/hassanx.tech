'use client';

import { useState, useEffect } from 'react';
import { getActiveSocialMediaLinks } from '@/constants/socialMedia';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSocialLinks = getActiveSocialMediaLinks();

  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>

      {/* Desktop Header */}
      <header className="hidden sm:flex items-center justify-center fixed top-10 z-50 px-4 py-3 w-full">
        <div className="flex items-center pl-4 p-2 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-lg text-zinc-700 w-fit">
          <a 
            className="hover:opacity-80 transition-opacity mx-auto flex items-center justify-center pl-2" 
            aria-label="Home" 
            href="#"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="23" 
              height="23" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-house" 
              aria-hidden="true"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
          </a>
          <div className="w-px h-5 bg-zinc-200 mx-6"></div>
          <div className="space-x-8 flex items-center">
            {activeSocialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity" 
                  aria-label={link.name}
                >
                  <IconComponent className="flex-shrink-0 w-[23px] h-[23px]" />
                </a>
              );
            })}
          </div>
          <div className="w-px h-5 bg-zinc-200 mx-6"></div>
          <button 
            className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-500 px-6 py-3.5 text-sm rounded-xl lg:text-base w-full md:w-[155px]"
            type="button"
            onClick={() => window.open('https://instagram.com/hassantech', '_blank')}
          >
            Reach Me
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sm:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-zinc-200 w-full">
        <div className="flex items-center justify-between px-6 py-4 max-w-full">
                      <div className="flex items-center justify-between w-full text-zinc-700">
            <a 
              className="hover:opacity-80 transition-opacity" 
              aria-label="Home" 
              href="#"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-house size-6" 
                aria-hidden="true"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
            </a>
            <button
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="Toggle menu"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <div style={{transform: 'none'}}>
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x size-6"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu size-6"
                    aria-hidden="true"
                  >
                    <path d="M4 12h16"></path>
                    <path d="M4 18h16"></path>
                    <path d="M4 6h16"></path>
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay with backdrop */}
        {isMenuOpen && (
          <>
            {/* Black backdrop */}
            <div className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"></div>
            
            {/* Menu content */}
            <div className="fixed top-0 left-0 right-0 bg-white z-50 flex flex-col transform transition-transform duration-300 ease-out animate-slide-down shadow-lg">
              {/* Header with home icon and close button */}
                              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
                <a 
                  className="hover:opacity-80 transition-opacity" 
                  aria-label="Home" 
                  href="#"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-house size-6 text-zinc-700" 
                    aria-hidden="true"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </a>
                <button
                  className="p-2 hover:opacity-80 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-6 text-zinc-700"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-8">
                  {activeSocialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 text-zinc-900 hover:opacity-80 transition-opacity py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <IconComponent className="w-6 h-6" />
                        <span className="text-lg font-medium">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Section with buttons */}
              <div className="px-6 pb-8 space-y-4">
                <button 
                  className="w-full bg-zinc-900 text-white py-4 px-6 rounded-xl hover:bg-zinc-800 transition-colors font-medium"
                  onClick={() => window.open('https://instagram.com/hassantech', '_blank')}
                >
                  Reach Me
                </button>
          </div>
        </div>
      </>
    )}
    </header>
    </>
  );
}