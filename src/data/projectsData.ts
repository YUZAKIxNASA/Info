export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: 'Live' | 'Beta' | 'Open Source';
  stars: string;
  githubUrl: string;
  demoUrl: string;
  accentColor: string;
  glowColor: string;
  badgeBg: string;
  featured: boolean;
  type: string;
  highlights: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'play-code',
    name: 'PLAY-CODE',
    tagline: 'Online Code Editor & Learning Platform',
    description: 'Real-time multi-language sandbox, compiler preview, and interactive algorithms explorer.',
    longDescription: 'PLAY-CODE is a fast, web-based playground and learning environment for developers. Built with client-side code execution, Monaco editor integration, and support for syntax parsing and rapid experimentation across 900+ programming languages.',
    technologies: ['TypeScript', 'React', 'WebAssembly', 'TailwindCSS', 'Monaco'],
    status: 'Live',
    stars: '1.2k',
    githubUrl: 'https://github.com/yuzaki-nasa/play-code',
    demoUrl: 'https://play-code.dev',
    accentColor: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    badgeBg: 'rgba(56, 189, 248, 0.1)',
    featured: true,
    type: 'Web Application',
    highlights: ['Multi-language syntax highlighting', 'Instant live preview runner', 'Interactive algorithm tutorials', 'Zero-setup developer environment']
  },
  {
    id: 'init-habits',
    name: 'init.Habits',
    tagline: 'Habit Tracker That Looks Like a Terminal',
    description: 'Terminal-inspired developer habit tracker with git-commit heatmaps and streak analytics.',
    longDescription: 'A developer-first habit engineering dashboard designed like a Unix command line. Tracks daily streaks with GitHub-style contribution squares, custom command aliases, and exportable local storage data.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'LocalStorage', 'Framer Motion'],
    status: 'Live',
    stars: '850',
    githubUrl: 'https://github.com/yuzaki-nasa/init-habits',
    demoUrl: 'https://init-habits.app',
    accentColor: '#3FB950',
    glowColor: 'rgba(63, 185, 80, 0.25)',
    badgeBg: 'rgba(63, 185, 80, 0.1)',
    featured: true,
    type: 'Developer Tool',
    highlights: ['CLI keyboard shortcuts & command mode', 'Git commit styled heatmaps', 'Offline-first persistence', 'Productivity telemetry analytics']
  },
  {
    id: 'color-palette',
    name: 'ColorPalette',
    tagline: 'Explore 16M+ Colors with Style',
    description: 'Generative harmonic palette discovery tool with contrast auditing and CSS tokens generator.',
    longDescription: 'A sophisticated color synthesis tool for UI/UX engineers and designers. Features WCAG 2.2 accessibility verification, automated tints/shades generation, and 1-click CSS/Tailwind export.',
    technologies: ['JavaScript', 'Canvas API', 'Color Theory', 'CSS Tokens'],
    status: 'Live',
    stars: '720',
    githubUrl: 'https://github.com/yuzaki-nasa/color-palette',
    demoUrl: 'https://colorpalette.studio',
    accentColor: '#A78BFA',
    glowColor: 'rgba(167, 139, 250, 0.25)',
    badgeBg: 'rgba(167, 139, 250, 0.1)',
    featured: true,
    type: 'Creative Design Utility',
    highlights: ['Harmonic scale algorithms (Complementary, Triadic, Analogous)', 'Real-time WCAG AA/AAA contrast checker', 'Tailwind v4 color config exporter', '16M+ hex space exploration']
  },
  {
    id: 'yt-grab',
    name: 'YTGrab',
    tagline: 'YouTube Media & Content Extractor',
    description: 'High-speed audio & video stream parser with chapter indexing and metadata preservation.',
    longDescription: 'An ultra-clean media extraction workflow utility. Supports stream quality resolution selection, thumbnail downloads, chapter markers parsing, and batch transcript extraction.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'Stream API', 'FFmpeg'],
    status: 'Live',
    stars: '640',
    githubUrl: 'https://github.com/yuzaki-nasa/yt-grab',
    demoUrl: 'https://ytgrab.tech',
    accentColor: '#F43F5E',
    glowColor: 'rgba(244, 63, 94, 0.25)',
    badgeBg: 'rgba(244, 63, 94, 0.1)',
    featured: true,
    type: 'Media Utility',
    highlights: ['Resolution & bitrate auto-negotiation', 'Lossless audio extraction', 'Video chapters & subtitle timestamps', 'Responsive mobile layout']
  },
  {
    id: 'terminal-os',
    name: 'TerminalOS Web',
    tagline: 'In-Browser Virtual Shell Environment',
    description: 'Virtual UNIX desktop shell featuring POSIX file system, pipes, and custom scripting.',
    longDescription: 'An interactive browser operating system emulator equipped with standard bash built-ins (ls, cat, grep, cd, rm, nano), simulated network socket, and package manager.',
    technologies: ['TypeScript', 'Xterm.js', 'Web Workers', 'IndexedDB'],
    status: 'Open Source',
    stars: '510',
    githubUrl: 'https://github.com/yuzaki-nasa/terminal-os',
    demoUrl: 'https://terminal-os.dev',
    accentColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    badgeBg: 'rgba(245, 158, 11, 0.1)',
    featured: false,
    type: 'Operating System Simulation',
    highlights: ['POSIX virtual file system', 'Piped command execution', 'Lightweight built-in text editor', 'Vim keybindings']
  },
  {
    id: 'codesnippet-cli',
    name: 'CodeSnippet CLI',
    tagline: 'Instant Snippet Finder for 900+ Stacks',
    description: 'Fast terminal CLI tool to search syntax recipes and algorithms directly from terminal.',
    longDescription: 'Command-line tool that plugs into developer workflow. Type `snippet find <lang> <topic>` to instantly copy syntax boilerplates and idiomatic patterns.',
    technologies: ['Go', 'SQLite', 'Bubbletea', 'Cobra'],
    status: 'Open Source',
    stars: '390',
    githubUrl: 'https://github.com/yuzaki-nasa/codesnippet-cli',
    demoUrl: 'https://github.com/yuzaki-nasa/codesnippet-cli',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    badgeBg: 'rgba(16, 185, 129, 0.1)',
    featured: false,
    type: 'CLI Tool',
    highlights: ['Interactive fuzzy search in terminal', 'Offline database with zero network lag', 'Cross-platform binaries (Linux/macOS/Windows)', 'Clipboard integration']
  }
];
