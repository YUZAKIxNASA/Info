import React, { useState, useMemo } from 'react';
import { X, Search, Filter, Hash, Sparkles, Copy, Check, ArrowRight, BookOpen, Layers, Terminal, AlertCircle } from 'lucide-react';
import { SKILLS_DATA, SKILL_CATEGORIES, SkillItem } from '../data/skillsData';
import { TechLogo } from './TechLogo';

interface SkillsExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  initialCategory?: string;
}

export const SkillsExplorerModal: React.FC<SkillsExplorerModalProps> = ({
  isOpen,
  onClose,
  initialQuery = '',
  initialCategory = 'All',
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedAlpha, setSelectedAlpha] = useState<string>('ALL');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(48);
  const [showDuplicatesOnly, setShowDuplicatesOnly] = useState(false);

  // Sync when initialQuery changes
  React.useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
    }
  }, [initialQuery]);

  // Track duplicates according to source list
  const duplicatesList = useMemo(() => {
    const seen = new Map<string, number>();
    const dupes = new Set<number>();
    SKILLS_DATA.forEach((item) => {
      const key = item.cleanName.toLowerCase();
      if (seen.has(key)) {
        dupes.add(item.id);
      } else {
        seen.set(key, item.id);
      }
    });
    return dupes;
  }, []);

  // Filtered skills computation
  const filteredSkills = useMemo(() => {
    let result = SKILLS_DATA;

    if (showDuplicatesOnly) {
      result = result.filter((item) => duplicatesList.has(item.id));
    }

    if (selectedCategory !== 'All') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (selectedAlpha !== 'ALL') {
      if (selectedAlpha === '#') {
        result = result.filter((item) => /^[0-9]/.test(item.cleanName));
      } else {
        result = result.filter((item) =>
          item.cleanName.toUpperCase().startsWith(selectedAlpha)
        );
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.cleanName.toLowerCase().includes(q) ||
          item.id.toString() === q ||
          item.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [searchQuery, selectedCategory, selectedAlpha, showDuplicatesOnly, duplicatesList]);

  // Reset page when filters change
  React.useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedCategory, selectedAlpha, showDuplicatesOnly]);

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);
  const paginatedSkills = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredSkills.slice(start, start + itemsPerPage);
  }, [filteredSkills, page, itemsPerPage]);

  const alphabet = ['ALL', '#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const handleCopyName = (skill: SkillItem) => {
    navigator.clipboard.writeText(skill.name);
    setCopiedId(skill.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#020711] border border-[rgba(0,220,200,0.35)] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[rgba(0,220,200,0.25)] bg-[#081423]/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#020711] border border-[rgba(0,220,200,0.3)] text-[#00E89B] shadow-[0_0_15px_rgba(0,232,155,0.25)]">
              <BookOpen size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-mono text-base sm:text-lg font-bold text-[#FFFFFF]">
                  Skills Explorer
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-[#00E89B]/15 border border-[#00E89B]/40 text-[#00E89B] font-mono text-xs font-semibold">
                  900 Entries
                </span>
              </div>
              <p className="text-xs text-[#A7B4C5] font-mono">
                The authoritative PLAY-CODE language and technology inventory
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.3)] text-[#A7B4C5] hover:text-[#FFFFFF] hover:border-[#f85149] hover:bg-[#f85149]/10 transition-colors cursor-pointer"
            aria-label="Close Explorer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Filter Controls Header */}
        <div className="p-4 sm:px-6 bg-[#081423]/50 border-b border-[rgba(0,220,200,0.2)] flex flex-col gap-3">
          {/* Search bar & Duplicate pill */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A7B4C5]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by language name, keyword, or number (#1 to #900)..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#020711] border border-[rgba(0,220,200,0.3)] text-sm font-mono text-[#FFFFFF] placeholder-[#A7B4C5]/60 focus:outline-none focus:border-[#00E89B] focus:ring-1 focus:ring-[#00E89B] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A7B4C5] hover:text-[#FFFFFF]"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Preserved duplicates filter button */}
              <button
                onClick={() => setShowDuplicatesOnly(!showDuplicatesOnly)}
                className={`px-3 py-2 rounded-xl font-mono text-xs flex items-center gap-1.5 border transition-colors cursor-pointer ${
                  showDuplicatesOnly
                    ? 'bg-[#d29922]/20 border-[#d29922] text-[#d29922]'
                    : 'bg-[#020711] border-[rgba(0,220,200,0.25)] text-[#A7B4C5] hover:text-[#FFFFFF]'
                }`}
                title="View 5 preserved duplicate entries from PLAY-CODE inventory"
              >
                <AlertCircle size={14} />
                <span>Preserved Duplicates (5)</span>
              </button>

              {/* Items count indicator */}
              <div className="px-3 py-2 rounded-xl bg-[#020711] border border-[rgba(0,220,200,0.25)] font-mono text-xs text-[#A7B4C5]">
                <span className="text-[#00E89B] font-bold">{filteredSkills.length}</span> / 900
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs font-mono">
            {SKILL_CATEGORIES.map((category) => {
              const count =
                category === 'All'
                  ? 900
                  : SKILLS_DATA.filter((s) => s.category === category).length;
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#00E89B] text-[#020711] font-bold shadow-[0_0_12px_rgba(0,232,155,0.4)]'
                      : 'bg-[#020711] text-[#A7B4C5] hover:text-[#FFFFFF] border border-[rgba(0,220,200,0.25)]'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`ml-1.5 text-[10px] ${
                      isSelected ? 'text-[#020711]/80' : 'text-[#A7B4C5]/70'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Alphabetical Quick Bar */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar text-[11px] font-mono text-[#A7B4C5]">
            <span className="text-[#A7B4C5]/60 text-[10px] uppercase mr-1">Jump:</span>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedAlpha(letter)}
                className={`w-6 h-6 rounded flex items-center justify-center font-semibold transition-colors cursor-pointer shrink-0 ${
                  selectedAlpha === letter
                    ? 'bg-[#00AFFF] text-[#020711]'
                    : 'hover:text-[#FFFFFF] hover:bg-[#081423]'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#020711]">
          {filteredSkills.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#081423] border border-[rgba(0,220,200,0.3)] flex items-center justify-center text-[#A7B4C5] mb-3">
                <Search size={28} />
              </div>
              <h3 className="font-mono text-base font-bold text-[#FFFFFF]">
                No matching technologies found
              </h3>
              <p className="text-xs text-[#A7B4C5] max-w-sm mt-1">
                No entries matched "{searchQuery}". Try searching by another keyword or reset the category filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedAlpha('ALL');
                  setShowDuplicatesOnly(false);
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#081423] border border-[#00E89B]/50 text-[#00E89B] font-mono text-xs font-semibold hover:bg-[#00E89B] hover:text-[#020711] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {paginatedSkills.map((skill) => {
                const isDupe = duplicatesList.has(skill.id);
                return (
                  <div
                    key={`${skill.id}-${skill.name}`}
                    onClick={() => setSelectedSkill(skill)}
                    className="p-3 rounded-xl bg-[#081423]/80 border border-[rgba(0,220,200,0.25)] hover:border-[#00E89B] hover:shadow-[0_0_15px_rgba(0,232,155,0.2)] flex items-center justify-between gap-3 group transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <TechLogo name={skill.cleanName} size={30} className="shrink-0" />
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-xs font-bold text-[#FFFFFF] group-hover:text-[#00E89B] transition-colors truncate">
                            {skill.cleanName}
                          </span>
                          {isDupe && (
                            <span
                              className="text-[9px] font-mono px-1 py-0.2 rounded bg-[#d29922]/20 text-[#d29922] shrink-0"
                              title="Preserved duplicate entry"
                            >
                              dup
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-[#A7B4C5] truncate">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="font-mono text-[11px] text-[#A7B4C5] group-hover:text-[#00AFFF] transition-colors">
                        #{skill.id}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Pagination Footer */}
        {filteredSkills.length > 0 && (
          <div className="px-4 sm:px-6 py-3 bg-[#081423]/90 border-t border-[rgba(0,220,200,0.2)] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#A7B4C5]">
            <div className="flex items-center gap-2">
              <span>
                Showing {(page - 1) * itemsPerPage + 1}–
                {Math.min(page * itemsPerPage, filteredSkills.length)} of {filteredSkills.length}
              </span>
              <span className="hidden sm:inline">•</span>
              <button
                onClick={() => setItemsPerPage(itemsPerPage === 48 ? 96 : 48)}
                className="hidden sm:inline text-[#00AFFF] hover:underline"
              >
                {itemsPerPage === 48 ? 'Show 96 per page' : 'Show 48 per page'}
              </button>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-2.5 py-1 rounded bg-[#020711] border border-[rgba(0,220,200,0.25)] disabled:opacity-40 disabled:cursor-not-allowed hover:text-[#FFFFFF]"
                >
                  Prev
                </button>
                <span className="px-2 text-[#FFFFFF]">
                  {page} / {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-2.5 py-1 rounded bg-[#020711] border border-[rgba(0,220,200,0.25)] disabled:opacity-40 disabled:cursor-not-allowed hover:text-[#FFFFFF]"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}

        {/* Quick Skill Detail Modal Overlay */}
        {selectedSkill && (
          <div
            className="fixed inset-0 z-60 bg-black/75 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="w-full max-w-md p-6 rounded-2xl bg-[#081423] border border-[rgba(0,220,200,0.35)] shadow-2xl flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TechLogo name={selectedSkill.cleanName} size={40} />
                  <div>
                    <h3 className="font-mono text-lg font-bold text-[#FFFFFF]">
                      {selectedSkill.cleanName}
                    </h3>
                    <span className="font-mono text-xs text-[#00E89B]">
                      PLAY-CODE Entry #{selectedSkill.id}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="p-1 rounded text-[#A7B4C5] hover:text-[#FFFFFF]"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-[#020711] border border-[rgba(0,220,200,0.25)] flex flex-col gap-2 font-mono text-xs">
                <div className="flex justify-between text-[#A7B4C5]">
                  <span>Raw Title in Inventory:</span>
                  <span className="text-[#FFFFFF] font-semibold">{selectedSkill.name}</span>
                </div>
                <div className="flex justify-between text-[#A7B4C5]">
                  <span>Category:</span>
                  <span className="text-[#00AFFF]">{selectedSkill.category}</span>
                </div>
                <div className="flex justify-between text-[#A7B4C5]">
                  <span>Status:</span>
                  <span className="text-[#00E89B]">Available in PLAY-CODE</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => handleCopyName(selectedSkill)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#020711] border border-[rgba(0,220,200,0.3)] hover:border-[#00E89B] font-mono text-xs font-semibold text-[#FFFFFF] transition-colors"
                >
                  {copiedId === selectedSkill.id ? (
                    <>
                      <Check size={14} className="text-[#00E89B]" />
                      <span className="text-[#00E89B]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Name</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setSearchQuery(selectedSkill.cleanName);
                    setSelectedSkill(null);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#00E89B] hover:bg-[#00FFB2] text-[#020711] font-mono text-xs font-bold transition-colors shadow-sm"
                >
                  Filter Stack
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
