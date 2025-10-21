import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils/index.js";
import { Award, TrendingUp } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  const navItems = [
    { name: "MyBadges", label: "My Badges", icon: Award },
    { name: "Statistics", label: "Statistics", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <style>{`
        :root {
          --primary-gradient: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
          --secondary-gradient: linear-gradient(135deg, #6ee7b7 0%, #3b82f6 100%);
          --accent-gradient: linear-gradient(135deg, #34d399 0%, #14b8a6 100%);
        }
      `}</style>

      {/* Main Content */}
      <main className="pb-20">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 safe-area-bottom z-50">
        <div className="max-w-screen-sm mx-auto px-4">
          <div className="flex justify-around items-center h-16">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === createPageUrl(item.name);

              return (
                <Link
                  key={item.name}
                  to={createPageUrl(item.name)}
                  className="flex flex-col items-center justify-center flex-1 py-2 transition-all duration-300"
                >
                  <div
                    className={`p-2 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-emerald-500 to-teal-500 scale-110"
                        : "bg-transparent scale-100"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs mt-1 font-medium transition-colors duration-300 ${
                      isActive ? "text-emerald-600" : "text-gray-400"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
