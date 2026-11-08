import React from 'react';

interface TechLogoProps {
  name: string;
  size?: number;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, size = 26, className = '' }) => {
  const normalized = name.toLowerCase().replace(/\s*\([^)]*\)/g, '').trim();

  // 1. HTML / HTML5
  if (normalized === 'html' || normalized === 'html5' || normalized.includes('html')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M4 2L6.5 28L16 30.5L25.5 28L28 2H4Z" fill="#E34F26" />
        <path d="M16 4.5V28.2L23.6 26.1L25.7 4.5H16Z" fill="#EF652A" />
        <path d="M16 10.5H10.5L11 15H16V18.5H11.3L11.7 22.5L16 23.7V20.5" fill="#EBEBEB" />
        <path d="M16 10.5H21.5L21.1 15H16V10.5ZM16 18.5H20.7L20.3 22.5L16 23.7V18.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 2. CSS / CSS3
  if (normalized === 'css' || normalized === 'css3') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M4 2L6.5 28L16 30.5L25.5 28L28 2H4Z" fill="#1572B6" />
        <path d="M16 4.5V28.2L23.6 26.1L25.7 4.5H16Z" fill="#33A9DC" />
        <path d="M16 10.5H10.2L10.6 15H16V10.5ZM16 18.5H10.9L11.3 22.5L16 23.7V18.5Z" fill="#EBEBEB" />
        <path d="M16 10.5H21.8L21 18.5H16V23.7L20.7 22.5L21.3 16.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // 3. JavaScript / JS
  if (normalized === 'javascript' || normalized === 'js' || normalized.includes('javascript')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#F7DF1E" />
        <path d="M18.5 12H21.5V21C21.5 24 19.5 25 17 25C15 25 13.5 24 12.8 22.5L15 21.2C15.5 22 16.2 22.6 17.2 22.6C18.2 22.6 19 22.2 19 20.8V12H18.5Z" fill="#000000" />
        <path d="M23 19C23.6 20 24.6 20.6 26 20.6C27.2 20.6 28 20 28 19.2C28 18.3 27.2 17.9 25.8 17.3C23.6 16.4 22.4 15.3 22.4 13.6C22.4 11.8 24 10.5 26.2 10.5C27.8 10.5 29 11.2 29.8 12.6L27.8 13.8C27.4 13.1 26.8 12.8 26.1 12.8C25.3 12.8 24.7 13.3 24.7 13.9C24.7 14.6 25.3 15 26.6 15.5C28.8 16.5 30.2 17.4 30.2 19.4C30.2 21.4 28.5 22.8 26 22.8C23.8 22.8 22.3 21.6 21.5 19.8L23 19Z" fill="#000000" />
      </svg>
    );
  }

  // 4. PHP
  if (normalized === 'php') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <ellipse cx="16" cy="16" rx="15" ry="9" fill="#777BB4" />
        <path d="M10 13H13C14.5 13 15.5 13.8 15.5 15.2C15.5 16.8 14.2 17.5 12.7 17.5H11.2L10.5 20.5H8.5L10 13ZM11.6 16H12.8C13.4 16 13.9 15.7 13.9 15.2C13.9 14.6 13.5 14.3 12.8 14.3H12L11.6 16Z" fill="#FFFFFF" />
        <path d="M16 13H18L17.2 16.8H19.5L19.9 14.8H21.8L20.5 20.5H18.6L19 18.2H16.7L16.2 20.5H14.3L16 13Z" fill="#FFFFFF" />
        <path d="M22.5 13H25.5C27 13 28 13.8 28 15.2C28 16.8 26.7 17.5 25.2 17.5H23.7L23 20.5H21L22.5 13ZM24.1 16H25.3C25.9 16 26.4 15.7 26.4 15.2C26.4 14.6 26 14.3 25.3 14.3H24.5L24.1 16Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 5. Python
  if (normalized === 'python') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M15.8 3C11.5 3 11.8 4.8 11.8 4.8L11.8 6.7H16V7.7H7.7C7.7 7.7 4 7.3 4 12.1C4 16.9 6.7 16.7 6.7 16.7H8.6V14.3C8.6 11.4 11.1 11.4 11.1 11.4H16C18.6 11.4 18.6 9 18.6 9V4.8C18.6 4.8 18.9 3 15.8 3Z" fill="#3776AB" />
        <circle cx="13.5" cy="5.2" r="1" fill="#FFFFFF" />
        <path d="M16.2 29C20.5 29 20.2 27.2 20.2 27.2L20.2 25.3H16V24.3H24.3C24.3 24.3 28 24.7 28 19.9C28 15.1 25.3 15.3 25.3 15.3H23.4V17.7C23.4 20.6 20.9 20.6 20.9 20.6H16C13.4 20.6 13.4 23 13.4 23V27.2C13.4 27.2 13.1 29 16.2 29Z" fill="#FFD43B" />
        <circle cx="18.5" cy="26.8" r="1" fill="#FFFFFF" />
      </svg>
    );
  }

  // 6. SQL / Database
  if (normalized === 'sql' || normalized.includes('sql') || normalized.includes('database')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <ellipse cx="16" cy="8" rx="11" ry="4" fill="#0284C7" />
        <path d="M5 8V14C5 16.2 9.9 18 16 18C22.1 18 27 16.2 27 14V8" stroke="#38BDF8" strokeWidth="2" fill="#0369A1" />
        <path d="M5 14V20C5 22.2 9.9 24 16 24C22.1 24 27 22.2 27 20V14" stroke="#38BDF8" strokeWidth="2" fill="#075985" />
        <path d="M5 20V26C5 28.2 9.9 30 16 30C22.1 30 27 28.2 27 26V20" stroke="#38BDF8" strokeWidth="2" fill="#0C4A6E" />
      </svg>
    );
  }

  // 7. TypeScript
  if (normalized === 'typescript' || normalized === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#3178C6" />
        <path d="M13 13H19V15H17V24H15V15H13V13Z" fill="#FFFFFF" />
        <path d="M19.5 21.5C20.2 22.2 21.2 22.6 22.2 22.6C23.4 22.6 24.2 22 24.2 21.1C24.2 20.2 23.5 19.8 22.2 19.3C20.2 18.5 19.2 17.5 19.2 15.8C19.2 14.1 20.7 12.8 22.7 12.8C24.2 12.8 25.3 13.4 26.1 14.6L24.4 15.8C23.9 15.2 23.4 14.9 22.7 14.9C22 14.9 21.4 15.3 21.4 15.9C21.4 16.5 21.9 16.9 23 17.4C25.1 18.2 26.5 19.1 26.5 21C26.5 23 24.8 24.5 22.3 24.5C20.4 24.5 19 23.5 18.2 22.2L19.5 21.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 8. jQuery
  if (normalized === 'jquery') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#0769AD" />
        <path d="M16 6C10.5 6 6 10.5 6 16C6 21.5 10.5 26 16 26C21.5 26 26 21.5 26 16C26 10.5 21.5 6 16 6ZM18.5 20C17.2 20.5 15.8 20.2 15.2 19.2L13 15.5C12.5 14.5 12 13.5 11 13.5C10.5 13.5 10 13.8 9.5 14.2L8.5 13.2C9.5 12.2 10.8 11.5 12 11.5C13.8 11.5 14.8 12.8 15.5 14L17.2 17C17.5 17.5 18 17.8 18.8 17.5C19.2 17.2 19.5 16.8 19.5 16C19.5 14.5 18 13.5 16.5 13.5V11.5C19.2 11.5 21.5 13 21.5 16C21.5 18.2 20.2 19.5 18.5 20Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 9. Java
  if (normalized === 'java') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M12.5 24C16 24 21 23 22 21C22 21 21 21.8 19 22.2C15 22.8 10 22.5 8 21.5C9 23.5 12.5 24 12.5 24Z" fill="#EA2D2E" />
        <path d="M11 20C15 20.5 19 20 23.5 18C23.5 18 21.5 18.8 19.5 19C15 19.5 10 19.2 8.5 18C9.5 19.6 11 20 11 20Z" fill="#007396" />
        <path d="M17 11C18 12 18.5 13.5 17 15.5C15 18 14 19 19 17C17.5 16 16.5 15.5 17 14C17.5 12.5 19 12 17 11Z" fill="#EA2D2E" />
        <path d="M14 6C15.5 8 13 10.5 15 13C16.2 14.5 16 15 15 16C14 17 12 15 13 13C14 11 15 10 13.5 8.5C12.5 7.5 13 6.5 14 6Z" fill="#007396" />
        <path d="M7 25C11 26.5 21 26.5 25 25C26 24.5 24 25.5 22 26C16 27.2 9 27 7 25Z" fill="#EA2D2E" />
      </svg>
    );
  }

  // 10. C#
  if (normalized === 'c#' || normalized === 'csharp') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#239120" />
        <path d="M16 4.5L25.5 10V22L16 27.5L6.5 22V10L16 4.5Z" fill="#9B4993" />
        <path d="M14 11C11.5 11 9.5 13 9.5 15.5C9.5 18 11.5 20 14 20C15.5 20 16.8 19.3 17.5 18.2L16 17C15.5 17.6 14.8 18 14 18C12.6 18 11.5 16.9 11.5 15.5C11.5 14.1 12.6 13 14 13C14.8 13 15.5 13.4 16 14L17.5 12.8C16.8 11.7 15.5 11 14 11Z" fill="#FFFFFF" />
        <path d="M19.5 13H21L20.5 15H22V16H20.3L20 17H21.5V18H19.7L19.2 20H18.2L18.7 18H17.5L17 20H16L16.5 18H15.5V17H16.8L17 16H15.8V15H17.3L17.8 13H18.8L18.3 15H19.5L20 13H19.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 11. C++
  if (normalized === 'c++' || normalized === 'cpp') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#00599C" />
        <path d="M15 11C12.2 11 10 13.2 10 16C10 18.8 12.2 21 15 21C16.8 21 18.2 20.2 19 19L17.5 17.5C17 18.2 16.1 18.7 15 18.7C13.5 18.7 12.3 17.5 12.3 16C12.3 14.5 13.5 13.3 15 13.3C16.1 13.3 17 13.8 17.5 14.5L19 13C18.2 11.8 16.8 11 15 11Z" fill="#FFFFFF" />
        <path d="M20 15V17H22V19H24V17H26V15H24V13H22V15H20Z" fill="#004482" />
        <path d="M20 15H22V13H24V15H26V17H24V19H22V17H20V15Z" fill="#659AD2" />
      </svg>
    );
  }

  // 12. Go / Golang
  if (normalized === 'go' || normalized === 'golang') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#00ADD8" />
        <path d="M10 16C10 13 12 11 15 11C16.5 11 17.8 11.6 18.5 12.5L16.8 14C16.4 13.5 15.8 13.2 15 13.2C13.4 13.2 12.3 14.4 12.3 16C12.3 17.6 13.4 18.8 15 18.8C16 18.8 16.7 18.4 17.1 17.8H15V16H19V19C18 20.2 16.5 21 15 21C12 21 10 19 10 16Z" fill="#FFFFFF" />
        <path d="M21 16C21 13 23 11 26 11C29 11 31 13 31 16C31 19 29 21 26 21C23 21 21 19 21 16ZM28.8 16C28.8 14.4 27.6 13.2 26 13.2C24.4 13.2 23.2 14.4 23.2 16C23.2 17.6 24.4 18.8 26 18.8C27.6 18.8 28.8 17.6 28.8 16Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 13. Ruby
  if (normalized === 'ruby') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M6 10L10 4H22L26 10L16 28L6 10Z" fill="#CC342D" />
        <path d="M10 4L16 10L22 4H10Z" fill="#E8615A" />
        <path d="M6 10H14L16 28L6 10Z" fill="#B32822" />
        <path d="M26 10H18L16 28L26 10Z" fill="#911D18" />
        <path d="M14 10H18L16 28L14 10Z" fill="#E8615A" />
      </svg>
    );
  }

  // 14. Swift
  if (normalized === 'swift') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="6" fill="#F05138" />
        <path d="M7 16C10.5 21 16 24 22 24.5C18.5 22.8 16 19.8 15 16C19 19 23.5 19 26 17C23 15.5 20.5 13 20 9C19 12 16 14.5 13 14C11 12 10.5 9 12 6C8 9 6.5 13 7 16Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 15. Kotlin
  if (normalized === 'kotlin') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#0D1117" />
        <path d="M4 28V4H28L16 16L28 28H4Z" fill="url(#kotlin-grad)" />
        <defs>
          <linearGradient id="kotlin-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7F52FF" />
            <stop offset="0.5" stopColor="#C711E1" />
            <stop offset="1" stopColor="#E4485D" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 16. Rust
  if (normalized === 'rust') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <circle cx="16" cy="16" r="14" fill="#DEA584" />
        <circle cx="16" cy="16" r="11" fill="#000000" />
        <path d="M12 11H17C18.5 11 19.5 11.8 19.5 13.2C19.5 14.5 18.6 15.2 17.5 15.5L20 21H17.8L15.6 16.2H14.2V21H12V11ZM14.2 14.5H16.8C17.3 14.5 17.7 14.1 17.7 13.6C17.7 13.1 17.3 12.7 16.8 12.7H14.2V14.5Z" fill="#DEA584" />
      </svg>
    );
  }

  // 17. Dart
  if (normalized === 'dart') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M6 16L16 6L26 16L16 26L6 16Z" fill="#0175C2" />
        <path d="M16 6L26 16L21 21L11 11L16 6Z" fill="#02569B" />
        <path d="M11 11L21 21L16 26L6 16L11 11Z" fill="#29B6F6" />
        <path d="M13.5 13.5L18.5 18.5L16 21L11 16L13.5 13.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 18. R
  if (normalized === 'r') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#276DC3" />
        <ellipse cx="18" cy="16" rx="9" ry="7" fill="#C8D6E5" />
        <ellipse cx="18" cy="16" rx="6" ry="4" fill="#276DC3" />
        <path d="M10 9H17C19.5 9 21.5 10.5 21.5 13C21.5 15.2 19.8 16.5 18 16.8L22 23H18.5L15 17H13V23H10V9ZM13 14.5H16.5C17.5 14.5 18.2 14 18.2 13C18.2 12 17.5 11.5 16.5 11.5H13V14.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 19. Perl
  if (normalized === 'perl') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#004065" />
        <path d="M8 24V8H15C18.5 8 21 10.5 21 14C21 17.5 18.5 20 15 20H12V24H8ZM12 16H15C16.5 16 17.5 15.2 17.5 14C17.5 12.8 16.5 12 15 12H12V16Z" fill="#39A7E1" />
        <circle cx="23" cy="22" r="2.5" fill="#39A7E1" />
      </svg>
    );
  }

  // 20. VBA
  if (normalized === 'vba' || normalized.includes('vba')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#1D6F42" />
        <path d="M8 10L12.5 22H15.5L20 10H17L14 18.5L11 10H8Z" fill="#FFFFFF" />
        <path d="M18 10H23C25 10 26 11 26 12.5C26 13.5 25.5 14.2 24.5 14.6C25.8 15.1 26.5 16 26.5 17.5C26.5 19.5 25 20.5 22.8 20.5H18V10ZM20.5 14H22.5C23.5 14 24 13.5 24 12.8C24 12.1 23.5 11.8 22.5 11.8H20.5V14ZM20.5 18.5H22.8C24 18.5 24.5 17.9 24.5 17.1C24.5 16.3 23.9 15.8 22.7 15.8H20.5V18.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 21. C
  if (normalized === 'c') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#A8B9CC" />
        <path d="M16 4.5L25.5 10V22L16 27.5L6.5 22V10L16 4.5Z" fill="#283593" />
        <path d="M16 9C12.1 9 9 12.1 9 16C9 19.9 12.1 23 16 23C18.5 23 20.7 21.8 21.8 20.2L19.5 18.2C18.7 19.2 17.4 19.9 16 19.9C13.8 19.9 12.1 18.1 12.1 16C12.1 13.9 13.8 12.1 16 12.1C17.4 12.1 18.7 12.8 19.5 13.8L21.8 11.8C20.7 10.2 18.5 9 16 9Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 22. Objective-C
  if (normalized === 'objective-c' || normalized === 'objc') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#0B5A84" />
        <path d="M11 16C11 13 13 11 16 11C18 11 19.5 12 20.2 13.2L18.5 14.5C18 13.8 17.2 13.2 16 13.2C14.2 13.2 13.2 14.5 13.2 16C13.2 17.5 14.2 18.8 16 18.8C17.2 18.8 18 18.2 18.5 17.5L20.2 18.8C19.5 20 18 21 16 21C13 21 11 19 11 16Z" fill="#FFFFFF" />
        <circle cx="23" cy="11" r="2.5" fill="#F05138" />
      </svg>
    );
  }

  // 23. Scala
  if (normalized === 'scala') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#0D1117" />
        <path d="M7 23C7 20 17 19 25 18V22C17 23 7 24 7 26V23Z" fill="#DC322F" />
        <path d="M7 16C7 13 17 12 25 11V15C17 16 7 17 7 19V16Z" fill="#DC322F" />
        <path d="M7 9C7 6 17 5 25 4V8C17 9 7 10 7 12V9Z" fill="#DC322F" />
      </svg>
    );
  }

  // 24. Haskell
  if (normalized === 'haskell') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#131418" />
        <path d="M5 6L11 16L5 26H9L13 19.3L17 26H21L13 12.7L17 6H13L9 12.7L5 6Z" fill="#5E5086" />
        <path d="M14 6L20 16L14 26H18L26 12.7L22 6H18L16 9.3L14 6Z" fill="#8F4E8B" />
        <path d="M21 14H27V16.5H21V14ZM22.5 18.5H27V21H22.5V18.5Z" fill="#8F4E8B" />
      </svg>
    );
  }

  // 25. Lua
  if (normalized === 'lua') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#000080" />
        <circle cx="16" cy="16" r="8" fill="#FFFFFF" />
        <circle cx="19" cy="13" r="6" fill="#000080" />
        <circle cx="23" cy="9" r="2.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // 26. MATLAB
  if (normalized === 'matlab') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#003366" />
        <path d="M6 22L11 13L16 25L21 9L26 22H6Z" fill="#E15B26" />
        <path d="M11 13L16 25L21 9" stroke="#FFD700" strokeWidth="1.5" />
      </svg>
    );
  }

  // 27. Julia
  if (normalized === 'julia') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#1C1E24" />
        <circle cx="11" cy="20" r="4.5" fill="#CB3C33" />
        <circle cx="21" cy="20" r="4.5" fill="#389826" />
        <circle cx="16" cy="10" r="4.5" fill="#9558B2" />
      </svg>
    );
  }

  // 28. Elixir
  if (normalized === 'elixir') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#4B275F" />
        <path d="M16 6C16 6 10 14 10 19C10 22.3 12.7 25 16 25C19.3 25 22 22.3 22 19C22 14 16 6 16 6Z" fill="#A37ACC" />
        <path d="M16 11C16 11 12 16 12 19.5C12 21.7 13.8 23.5 16 23.5C18.2 23.5 20 21.7 20 19.5C20 16 16 11 16 11Z" fill="#FFFFFF" opacity="0.6" />
      </svg>
    );
  }

  // 29. Erlang
  if (normalized === 'erlang') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#A90533" />
        <circle cx="16" cy="16" r="10" fill="#FFFFFF" />
        <path d="M11 13H17V15H13V17H16V19H13V21H17V23H11V13ZM19 13H21V23H19V13Z" fill="#A90533" />
      </svg>
    );
  }

  // 30. Clojure
  if (normalized === 'clojure') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#1C2128" />
        <circle cx="16" cy="16" r="11" fill="#62B132" />
        <path d="M16 5C10 5 5 10 5 16C5 22 10 27 16 27C19.5 27 22.5 25.5 24.5 23C21 23 18 20 18 16C18 12 21 9 24.5 9C22.5 6.5 19.5 5 16 5Z" fill="#5881D8" />
      </svg>
    );
  }

  // 31. F#
  if (normalized === 'f#' || normalized === 'fsharp') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#30B9DB" />
        <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="#007ACC" />
        <path d="M12 16L16 12L20 16L16 20L12 16Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 32. OCaml
  if (normalized === 'ocaml') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#EE6A1A" />
        <path d="M16 8C11 8 8 11.5 8 16C8 20.5 11 24 16 24C21 24 24 20.5 24 16C24 11.5 21 8 16 8ZM16 20C13 20 11.5 18 11.5 16C11.5 14 13 12 16 12C19 12 20.5 14 20.5 16C20.5 18 19 20 16 20Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 33. Fortran
  if (normalized === 'fortran') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#734F96" />
        <path d="M10 8H22V11H13V14H20V17H13V24H10V8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 34. COBOL
  if (normalized === 'cobol') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#003865" />
        <circle cx="16" cy="16" r="9" stroke="#00A3E0" strokeWidth="2.5" fill="none" />
        <path d="M14 12C12 13 11 14.5 11 16C11 17.5 12 19 14 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 12C20 13 21 14.5 21 16C21 17.5 20 19 18 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 35. Pascal / Delphi
  if (normalized === 'pascal' || normalized === 'delphi') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#EE3124" />
        <path d="M16 6L26 24H6L16 6Z" fill="#FFFFFF" />
        <path d="M16 11L21 21H11L16 11Z" fill="#EE3124" />
      </svg>
    );
  }

  // 36. Ada
  if (normalized === 'ada') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#006666" />
        <path d="M16 6L7 24H11L13 19H19L21 24H25L16 6ZM16 11.5L18 16.5H14L16 11.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 37. Lisp / Scheme / Common Lisp / Racket
  if (normalized.includes('lisp') || normalized === 'scheme' || normalized === 'racket') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#1C3A5E" />
        <path d="M8 8C6 11 6 21 8 24" stroke="#48B0F7" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 8C26 11 26 21 24 24" stroke="#48B0F7" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 21L16 12L20 21M13.5 18H18.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 38. Prolog
  if (normalized === 'prolog') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#742A2A" />
        <circle cx="16" cy="16" r="9" stroke="#E58A8A" strokeWidth="2" fill="none" />
        <path d="M11 11L21 21M21 11L11 21" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
    );
  }

  // 39. Smalltalk
  if (normalized === 'smalltalk') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#3D5A80" />
        <circle cx="16" cy="14" r="8" fill="#98C1D9" />
        <path d="M16 22L12 27L15 22H16Z" fill="#98C1D9" />
      </svg>
    );
  }

  // 40. Groovy
  if (normalized === 'groovy') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#4298B8" />
        <path d="M16 6L18 12H24L19 16L21 22L16 18L11 22L13 16L8 12H14L16 6Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 41. Bash / Shell
  if (normalized === 'bash' || normalized === 'shell' || normalized === 'sh' || normalized.includes('bash')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#293138" />
        <path d="M8 11L14 16L8 21" stroke="#4EAA25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 21H24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 42. PowerShell
  if (normalized === 'powershell' || normalized.includes('powershell')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#1E2A38" />
        <path d="M8 10L17 16L8 22" stroke="#0078D7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 22H24" stroke="#0078D7" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 43. Assembly / ASM
  if (normalized === 'assembly' || normalized.includes('assembly') || normalized === 'asm') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect x="6" y="6" width="20" height="20" rx="3" fill="#1F2428" stroke="#00E89B" strokeWidth="1.5" />
        <rect x="11" y="11" width="10" height="10" fill="#00E89B" />
        <path d="M3 11H6M3 16H6M3 21H6M26 11H29M26 16H29M26 21H29M11 3V6M16 3V6M21 3V6M11 26V29M16 26V29M21 26V29" stroke="#00E89B" strokeWidth="1.5" />
      </svg>
    );
  }

  // 44. Visual Basic / Visual Basic .NET
  if (normalized.includes('visual basic')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#512BD4" />
        <path d="M9 10L14 22H17L22 10H19L15.5 19L12 10H9Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 45. Zig
  if (normalized === 'zig') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#F7A41D" />
        <path d="M8 8H24L13 20H24V24H8L19 12H8V8Z" fill="#000000" />
      </svg>
    );
  }

  // 46. Solidity
  if (normalized === 'solidity') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#1C1C1C" />
        <path d="M12 7L16 13L12 19L8 13L12 7Z" fill="#999999" />
        <path d="M20 13L24 19L20 25L16 19L20 13Z" fill="#CCCCCC" />
      </svg>
    );
  }

  // 47. WebAssembly
  if (normalized === 'webassembly' || normalized === 'wasm') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#654FF0" />
        <path d="M7 11L10 21H12.5L14.5 14.5L16.5 21H19L22 11H19.5L17.5 17.5L15.5 11H13.5L11.5 17.5L9.5 11H7Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 48. React / Vue / Node / Docker / Git
  if (normalized === 'react') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#20232A" />
        <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)" />
        <circle cx="16" cy="16" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  if (normalized === 'vue' || normalized === 'vuejs') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#1A1A1A" />
        <polygon points="16,27 2,4 7.5,4 16,19 24.5,4 30,4" fill="#41B883" />
        <polygon points="16,19 7.5,4 12,4 16,11 20,4 24.5,4" fill="#35495E" />
      </svg>
    );
  }

  if (normalized === 'node' || normalized === 'nodejs') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#333333" />
        <path d="M16 4L27 10V22L16 28L5 22V10L16 4Z" fill="#339933" />
        <path d="M16 8L23 12V20L16 24L9 20V12L16 8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (normalized === 'docker') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#0DB7ED" />
        <rect x="7" y="13" width="3" height="3" fill="#FFFFFF" />
        <rect x="11" y="13" width="3" height="3" fill="#FFFFFF" />
        <rect x="15" y="13" width="3" height="3" fill="#FFFFFF" />
        <rect x="11" y="9" width="3" height="3" fill="#FFFFFF" />
        <rect x="15" y="9" width="3" height="3" fill="#FFFFFF" />
        <path d="M5 18C7 18 8 22 16 22C24 22 25 18 27 18C27 22 23 25 16 25C9 25 5 22 5 18Z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (normalized === 'git' || normalized.includes('git')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#F05032" />
        <path d="M16 6L26 16L16 26L6 16L16 6Z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <circle cx="16" cy="12" r="2" fill="#FFFFFF" />
        <circle cx="12" cy="16" r="2" fill="#FFFFFF" />
        <circle cx="16" cy="20" r="2" fill="#FFFFFF" />
        <path d="M16 14V18M14 16H16" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
    );
  }

  if (normalized === 'graphql') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#171E26" />
        <polygon points="16,4 27,10 27,22 16,28 5,22 5,10" stroke="#E10098" strokeWidth="2" fill="none" />
        <polygon points="16,8 24,23 8,23" stroke="#E10098" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="8" r="2" fill="#E10098" />
        <circle cx="24" cy="23" r="2" fill="#E10098" />
        <circle cx="8" cy="23" r="2" fill="#E10098" />
      </svg>
    );
  }

  if (normalized === 'markdown') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#080808" />
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
        <path d="M7 19V13L10 16L13 13V19M21 16V13H19V16H17L20 19L23 16H21Z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (normalized === 'json') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#292929" />
        <path d="M11 10C9 10 8 11.5 8 13.5V14.5C8 15.5 7 16 6 16C7 16 8 16.5 8 17.5V18.5C8 20.5 9 22 11 22M21 10C23 10 24 11.5 24 13.5V14.5C24 15.5 25 16 26 16C25 16 24 16.5 24 17.5V18.5C24 20.5 23 22 21 22" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // 49. Nim
  if (normalized === 'nim') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#FFE953" />
        <path d="M8 20L11 12L16 17L21 12L24 20H8Z" fill="#373737" />
        <circle cx="11" cy="10" r="1.5" fill="#373737" />
        <circle cx="16" cy="8" r="1.5" fill="#373737" />
        <circle cx="21" cy="10" r="1.5" fill="#373737" />
      </svg>
    );
  }

  // 50. Crystal
  if (normalized === 'crystal') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#000000" />
        <polygon points="16,6 26,16 16,26 6,16" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <polygon points="16,11 21,16 16,21 11,16" fill="#FFFFFF" />
      </svg>
    );
  }

  // 51. D / Dlang
  if (normalized === 'd' || normalized === 'dlang') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#B03931" />
        <path d="M10 8H16C21 8 24 11.5 24 16C24 20.5 21 24 16 24H10V8ZM14 12V20H16C18.5 20 20 18.5 20 16C20 13.5 18.5 12 16 12H14Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 52. CoffeeScript
  if (normalized === 'coffeescript') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#241B18" />
        <ellipse cx="16" cy="18" rx="8" ry="4" stroke="#895934" strokeWidth="2" fill="none" />
        <path d="M12 18V21C12 23 14 24 16 24C18 24 20 23 20 21V18" stroke="#895934" strokeWidth="2" fill="none" />
        <path d="M14 9C15 11 13 13 14 15M17 8C18 10 16 12 17 14" stroke="#C88E5E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 53. Elm
  if (normalized === 'elm') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#121820" />
        <polygon points="6,6 16,16 6,26" fill="#60B5CC" />
        <polygon points="16,16 26,6 26,26" fill="#F0AD00" />
        <polygon points="6,6 26,6 16,16" fill="#88D048" />
        <polygon points="6,26 26,26 16,16" fill="#5A6378" />
      </svg>
    );
  }

  // 54. Scratch
  if (normalized === 'scratch') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#FFAB19" />
        <circle cx="16" cy="16" r="8" fill="#FFFFFF" />
        <circle cx="13" cy="15" r="2" fill="#4D97FF" />
        <circle cx="19" cy="15" r="2" fill="#4D97FF" />
        <path d="M14 19C15 20 17 20 18 19" stroke="#FF8C1A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 55. Arduino
  if (normalized === 'arduino') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#00979D" />
        <ellipse cx="12" cy="16" rx="5" ry="6" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <ellipse cx="20" cy="16" rx="5" ry="6" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <path d="M10 16H14M12 14V18M18 16H22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 56. Wolfram / Mathematica
  if (normalized.includes('wolfram') || normalized.includes('mathematica')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#D91111" />
        <polygon points="16,6 19,13 26,16 19,19 16,26 13,19 6,16 13,13" fill="#FFFFFF" />
      </svg>
    );
  }

  // 57. SAS / SPSS / Stata
  if (normalized === 'sas' || normalized === 'spss' || normalized === 'stata') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#005A9C" />
        <path d="M7 21L12 15L17 18L25 10" stroke="#00E89B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="25" cy="10" r="2" fill="#FFFFFF" />
      </svg>
    );
  }

  // 58. Verilog / VHDL / SystemVerilog
  if (normalized.includes('verilog') || normalized.includes('vhdl')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#1F2A38" />
        <path d="M8 12H13C16 12 18 14 18 16C18 18 16 20 13 20H8V12ZM20 16H24M8 14H6M8 18H6" stroke="#00AFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 59. Linux
  if (normalized === 'linux') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#FCC624" />
        <ellipse cx="16" cy="16" rx="8" ry="10" fill="#000000" />
        <ellipse cx="16" cy="17" rx="6" ry="7" fill="#FFFFFF" />
        <circle cx="14" cy="12" r="1.5" fill="#000000" />
        <circle cx="18" cy="12" r="1.5" fill="#000000" />
        <polygon points="14,14 18,14 16,17" fill="#FFA500" />
      </svg>
    );
  }

  // 60. Sass
  if (normalized === 'sass' || normalized === 'scss') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="4" fill="#CF649A" />
        <path d="M12 19C12 21 14 22 17 22C21 22 23 20 23 18C23 15 19 14.5 16 14C13 13.5 10 13 10 10C10 7.5 12.5 6 16 6C19 6 21.5 7 22 9M18 19C16 19 14.5 18 14.5 17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // Individualized high-tech chip badge for all other specialized compiler/runtime inventory entries
  // Generates a deterministic vector badge with language-specific styling, border glow, and initials
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    hash = normalized.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  const initials = normalized
    .split(/[\s_-]+/)
    .map(w => w[0]?.toUpperCase() || '')
    .slice(0, 2)
    .join('') || normalized.slice(0, 2).toUpperCase();

  return (
    <div
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, hsl(${hue}, 65%, 20%), hsl(${(hue + 40) % 360}, 75%, 10%))`,
        border: `1px solid hsl(${hue}, 60%, 45%, 0.45)`,
        boxShadow: `0 0 6px hsl(${hue}, 60%, 45%, 0.2)`
      }}
      className={`rounded-lg flex items-center justify-center font-mono font-bold text-[9px] sm:text-[10px] text-white/95 shrink-0 select-none ${className}`}
      title={name}
    >
      {initials}
    </div>
  );
};
