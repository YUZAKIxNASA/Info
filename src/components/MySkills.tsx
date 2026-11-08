import React, { useState, useMemo, useEffect } from 'react';
import { Code2, Search, X, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';
import { SKILLS_DATA, SKILL_CATEGORIES, SkillItem } from '../data/skillsData';
import { TechLogo } from './TechLogo';

export const MySkills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const ITEMS_PER_PAGE = 50;

  // Filter skills based on search query and category
  const filteredSkills = useMemo(() => {
    let result = SKILLS_DATA;

    if (selectedCategory !== 'All') {
      result = result.filter((item) => item.category === selectedCategory);
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
  }, [searchQuery, selectedCategory]);

  // Reset to page 1 whenever search query or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredSkills.length / ITEMS_PER_PAGE));

  // Current 50 skills slice (exactly 50 per page across all 18 pages)
  const displayedSkills = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredSkills.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredSkills, currentPage]);

  const handleCopySkillName = (skill: SkillItem) => {
    navigator.clipboard.writeText(skill.name);
    setCopiedId(skill.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Generate pagination items with ellipsis
  const paginationRange = useMemo(() => {
    const delta = 2;
    const range: (number | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      } else if (range[range.length - 1] !== '...') {
        range.push('...');
      }
    }

    return range;
  }, [totalPages, currentPage]);

  return (
    <section id="skills" className="w-full flex flex-col gap-2.5 sm:gap-3.5">
      {/* Section Header: Title, Total Badge & Page Count */}
      <div className="flex items-center justify-between pb-2 border-b border-[rgba(0,220,200,0.25)]">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.35)] text-[#00E89B] shadow-[0_0_10px_rgba(0,232,155,0.25)]">
            <Code2 size={15} className="sm:w-4 sm:h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 sm:gap-2.5">
              <h2 className="font-mono text-sm sm:text-base md:text-lg font-bold text-[#FFFFFF] tracking-tight">
                My Skills
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-[#00E89B]/15 border border-[#00E89B]/40 text-[#00E89B] font-mono text-[8.5px] sm:text-[11px] font-semibold">
                900+ Skills &amp; Languages
              </span>
            </div>
            <p className="text-[8.5px] sm:text-[11px] text-[#A7B4C5] font-mono mt-0.5">
              Complete PLAY-CODE computing language &amp; technology inventory
            </p>
          </div>
        </div>

        {/* Quick Page Indicator: Page 1 of 18 */}
        <div className="font-mono text-[8.5px] sm:text-[11px] text-[#A7B4C5] bg-[#081423]/90 border border-[rgba(0,220,200,0.25)] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shrink-0">
          <span className="text-[#00E89B] font-bold">Page {currentPage}</span> of {totalPages}
        </div>
      </div>

      {/* Main Skills Container — Compact proportions & subtle glass surface */}
      <div className="p-2 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl glass-panel flex flex-col gap-2.5 sm:gap-3.5 shadow-xl border border-[rgba(0,220,200,0.35)] w-full">
        {/* Controls Bar: Live Search & Category Filter Tabs */}
        <div className="flex flex-col gap-2 pb-2 border-b border-[rgba(0,220,200,0.2)]">
          {/* Live Search Input Field */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="relative flex-1">
              <Search
                size={13}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#00E89B]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 900+ skills by language, technology, or number (e.g. Python, SQL, Rust, #42)..."
                className="w-full pl-7 sm:pl-8 pr-7 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#020711]/90 border border-[rgba(0,220,200,0.3)] text-[9.5px] sm:text-[11px] font-mono text-[#FFFFFF] placeholder-[#A7B4C5]/60 focus:outline-none focus:border-[#00E89B] focus:ring-1 focus:ring-[#00E89B] transition-colors shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#A7B4C5] hover:text-[#FFFFFF] p-1 cursor-pointer"
                  title="Clear search"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* Counter Indicator: 900 results */}
            <div className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#020711]/90 border border-[rgba(0,220,200,0.25)] font-mono text-[9px] sm:text-[11px] text-[#A7B4C5] shrink-0">
              <span className="text-[#00E89B] font-bold">{filteredSkills.length}</span> results
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-0.5 text-[8.5px] sm:text-[11px] font-mono no-scrollbar">
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
                  className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#00E89B] text-[#020711] font-bold shadow-[0_0_10px_rgba(0,232,155,0.4)]'
                      : 'bg-[#020711]/80 text-[#A7B4C5] hover:text-[#FFFFFF] border border-[rgba(0,220,200,0.25)]'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`ml-1 text-[7.5px] sm:text-[9.5px] ${
                      isSelected ? 'text-[#020711]/80' : 'text-[#A7B4C5]/70'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid: Exactly 50 Skills per page in a sleek, compact 5-column grid */}
        {filteredSkills.length === 0 ? (
          <div className="py-10 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.3)] flex items-center justify-center text-[#A7B4C5] mb-2">
              <Search size={20} />
            </div>
            <h3 className="font-mono text-xs sm:text-sm font-bold text-[#FFFFFF]">
              No matching skills found
            </h3>
            <p className="text-[9.5px] sm:text-[11px] text-[#A7B4C5] font-mono max-w-sm mt-0.5">
              No entries matched &quot;{searchQuery}&quot;. Clear search to browse all 900 skills.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2.5 px-3 py-1.5 rounded-xl bg-[#081423] border border-[#00E89B]/50 text-[#00E89B] font-mono text-[11px] font-semibold hover:bg-[#00E89B] hover:text-[#020711] transition-colors cursor-pointer"
            >
              Clear Search &amp; Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-1 sm:gap-1.5 md:gap-2 w-full">
            {displayedSkills.map((skill) => (
              <div
                key={`${skill.id}-${skill.name}`}
                onClick={() => setSelectedSkill(skill)}
                className="group p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#081423]/90 border border-[rgba(0,220,200,0.25)] hover:border-[#00E89B] hover:bg-[#07111F] hover:shadow-[0_0_12px_rgba(0,232,155,0.25)] transition-all duration-150 cursor-pointer flex items-center justify-between gap-1.5 min-h-[40px] sm:min-h-[46px] md:min-h-[48px]"
                title={`#${skill.id} ${skill.name} — ${skill.category}`}
              >
                {/* Left: Individual Technology Logo with authentic branding */}
                <div className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 shrink-0 flex items-center justify-center">
                  <TechLogo name={skill.cleanName} size={24} className="sm:w-[26px] sm:h-[26px]" />
                </div>

                {/* Right: Skill Info (Compact typography with high contrast) */}
                <div className="flex flex-col min-w-0 flex-1 justify-center">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-mono text-[8.5px] sm:text-[10px] md:text-[11px] font-bold text-[#FFFFFF] group-hover:text-[#00E89B] transition-colors truncate">
                      {skill.cleanName}
                    </span>
                    <span className="font-mono text-[7px] sm:text-[8px] md:text-[9px] text-[#A7B4C5] group-hover:text-[#00AFFF] shrink-0 font-semibold">
                      #{skill.id}
                    </span>
                  </div>
                  <span className="font-mono text-[6.5px] sm:text-[8px] md:text-[8.5px] text-[#A7B4C5] truncate mt-0.5 opacity-80 group-hover:opacity-100">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Numbered Pagination System: Display 50 Skills Per Page */}
        {filteredSkills.length > 0 && (
          <div className="pt-2.5 border-t border-[rgba(0,220,200,0.2)] flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 font-mono text-[9px] sm:text-[11px] text-[#A7B4C5] w-full">
            {/* Range Info */}
            <div className="flex items-center gap-1.5 text-center">
              <span>
                Showing{' '}
                <strong className="text-[#FFFFFF]">
                  {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredSkills.length)}
                </strong>{' '}
                of <strong className="text-[#00E89B]">{filteredSkills.length}</strong> skills
              </span>
              <span>•</span>
              <span className="text-[8px] sm:text-[10px] text-[#A7B4C5]/80">50 per page</span>
            </div>

            {/* Numbered Pagination Buttons */}
            <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap justify-center">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-0.5 px-2 py-1 rounded-md sm:rounded-lg bg-[#020711] border border-[rgba(0,220,200,0.25)] text-[#A7B4C5] hover:text-[#FFFFFF] hover:border-[#00E89B]/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer text-[9px] sm:text-[11px]"
              >
                <ChevronLeft size={11} />
                <span>Previous</span>
              </button>

              {/* Page Number Buttons */}
              <div className="flex items-center gap-0.5 sm:gap-1">
                {paginationRange.map((pageItem, index) => {
                  if (pageItem === '...') {
                    return (
                      <span key={`ellipsis-${index}`} className="px-1 text-[#A7B4C5] text-[10px]">
                        ...
                      </span>
                    );
                  }
                  const pageNum = Number(pageItem);
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`min-w-[24px] h-[24px] sm:min-w-[28px] sm:h-[28px] px-1 rounded-md sm:rounded-lg font-mono text-[9px] sm:text-[11px] font-bold transition-all duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-[#00E89B] text-[#020711] shadow-[0_0_10px_rgba(0,232,155,0.4)]'
                          : 'bg-[#020711] border border-[rgba(0,220,200,0.25)] text-[#A7B4C5] hover:text-[#FFFFFF] hover:border-[#00E89B]/40'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-0.5 px-2 py-1 rounded-md sm:rounded-lg bg-[#020711] border border-[rgba(0,220,200,0.25)] text-[#A7B4C5] hover:text-[#FFFFFF] hover:border-[#00E89B]/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer text-[9px] sm:text-[11px]"
              >
                <span>Next</span>
                <ChevronRight size={11} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Skill Details Modal Popover */}
      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="w-full max-w-sm p-4 sm:p-5 rounded-2xl bg-[#081423] border border-[rgba(0,220,200,0.35)] shadow-2xl flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 flex items-center justify-center">
                  <TechLogo name={selectedSkill.cleanName} size={28} />
                </div>
                <div>
                  <h3 className="font-mono text-sm sm:text-base font-bold text-[#FFFFFF]">
                    {selectedSkill.cleanName}
                  </h3>
                  <span className="font-mono text-[10px] text-[#00E89B]">
                    PLAY-CODE Entry #{selectedSkill.id}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="p-1 rounded text-[#A7B4C5] hover:text-[#FFFFFF] cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            <div className="p-2.5 rounded-xl bg-[#020711] border border-[rgba(0,220,200,0.25)] flex flex-col gap-1.5 font-mono text-[11px]">
              <div className="flex justify-between text-[#A7B4C5]">
                <span>Raw Title in Inventory:</span>
                <span className="text-[#FFFFFF] font-semibold">{selectedSkill.name}</span>
              </div>
              <div className="flex justify-between text-[#A7B4C5]">
                <span>Category:</span>
                <span className="text-[#00AFFF]">{selectedSkill.category}</span>
              </div>
              <div className="flex justify-between text-[#A7B4C5]">
                <span>Inventory Position:</span>
                <span className="text-[#00E89B]">#{selectedSkill.id} of 900</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => handleCopySkillName(selectedSkill)}
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-[#020711] border border-[rgba(0,220,200,0.3)] hover:border-[#00E89B] font-mono text-xs font-semibold text-[#FFFFFF] transition-colors cursor-pointer"
              >
                {copiedId === selectedSkill.id ? (
                  <>
                    <Check size={13} className="text-[#00E89B]" />
                    <span className="text-[#00E89B]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Name</span>
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setSearchQuery(selectedSkill.cleanName);
                  setSelectedSkill(null);
                }}
                className="px-3 py-1.5 rounded-xl bg-[#00E89B] hover:bg-[#00FFB2] text-[#020711] font-mono text-xs font-bold transition-colors shadow-sm cursor-pointer"
              >
                Filter Stack
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
