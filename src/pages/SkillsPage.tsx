import { useState, useMemo } from "react";
import {
  Search,
  Calendar,
  ExternalLink,
  Rocket,
  Filter,
  Sparkles,
} from "lucide-react";

import { skillsData } from "../data/skillsData";
import type { Skill } from "../types/skill";
import { categories } from "../data/categories";

// ========= Type Definitions =========
type Category = "General" | "Frontend" | "Backend" | "Flutter" | "UI/UX";
type Priority = "High" | "Medium" | "Low";

export default function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredSkills = useMemo(() => {
    return (skillsData as Skill[]).filter((skill) => {
      const matchesSearch =
        skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.brief.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || skill.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getCategoryColor = (category: Category) => {
    const colors: Record<Category, string> = {
      General: "bg-purple-500/20 text-purple-300 border-purple-500/50",
      Frontend: "bg-blue-500/20 text-blue-300 border-blue-500/50",
      Backend: "bg-green-500/20 text-green-300 border-green-500/50",
      Flutter: "bg-cyan-500/20 text-cyan-300 border-cyan-500/50",
      "UI/UX": "bg-pink-500/20 text-pink-300 border-pink-500/50",
    };
    return colors[category];
  };

  const getPriorityColor = (priority: Priority) => {
    const colors: Record<Priority, string> = {
      High: "bg-red-500/20 text-red-300 border-red-500/50",
      Medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/50",
      Low: "bg-green-500/20 text-green-300 border-green-500/50",
    };
    return colors[priority];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* ===== Animated Background ===== */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 via-transparent to-transparent blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/20 via-transparent to-transparent blur-3xl animate-pulse delay-1000" />
      </div>

      {/* ===== Hero Section ===== */}
      <div className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.1) 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm">
              <Rocket className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                Start Your Journey
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mb-6">
                رحلتك نحو الاحتراف
              </span>
              <span className="block text-white">تبدأ من هنا</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              كل مهارة تتعلمها اليوم تصنع منك المطور الذي تحلم أن تكونه.
            </p>

            <h6 className="text-xl sm:text-2xl font-bold">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                HELP YOURSELF TO LEARN TOGETHER
              </span>
            </h6>

            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Filter Section ===== */}
      <div className="relative max-w-7xl mx-auto px-4 py-10 z-40">
        <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-slate-800">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن مهارة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border-2 border-slate-700 rounded-2xl focus:border-purple-500 focus:outline-none text-slate-200 placeholder-slate-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative lg:w-64">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between pl-12 pr-4 py-4 bg-slate-800/50 border-2 border-slate-700 rounded-2xl text-slate-200"
              >
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                {selectedCategory}
                <span
                  className={`transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-50 w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left ${
                        selectedCategory === cat
                          ? "bg-purple-500/20 text-purple-300"
                          : "text-slate-300 hover:bg-slate-700/50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Skills Grid ===== */}
      <div className="relative max-w-7xl mx-auto px-4 pb-20 z-10">
        {filteredSkills.length === 0 ? (
          <div className="text-center py-32">
            <div className="text-7xl mb-6">🔍</div>
            <p className="text-2xl text-slate-400">
              لا توجد مهارات تطابق البحث
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="group relative bg-slate-900/80 border border-slate-800 rounded-3xl p-6 hover:border-purple-500/50 transition-all hover:-translate-y-2"
              >
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                      skill.category
                    )}`}
                  >
                    {skill.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(
                      skill.priority
                    )}`}
                  >
                    {skill.priority}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {skill.title}
                </h3>

                <p className="text-slate-400 mb-6">{skill.brief}</p>

                <div className="flex items-center gap-2 mb-6 text-sm text-slate-300">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  {skill.duration}
                </div>

                <div className="border-t border-slate-800 pt-5">
                  <p className="text-xs text-slate-500 mb-3">المصادر</p>
                  <div className="flex flex-col gap-2">
                    {skill.resources.map((r, i) => (
                      <a
                        key={i}
                        href={r.url}
                        target="_blank"
                        className="flex items-center gap-2 text-purple-400 hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {r.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
