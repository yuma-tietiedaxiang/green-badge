import React, { useState, useEffect } from "react";
import { Award, Sparkles, Recycle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BadgeGalleryCard from "../components/badges/BadgeGallaryCard.jsx";
import ShareModal from "../components/badges/ShareModel.jsx";
import { parseCSVBadgeData } from "../utils/badgeData.js";

export default function MyBadges() {
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [badges, setBadges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟加载延迟
    const loadBadges = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 模拟网络延迟
      const badgeData = parseCSVBadgeData();
      setBadges(badgeData);
      setIsLoading(false);
    };

    loadBadges();
  }, []);

  const rarityCount = {
    common: badges.filter((b) => b.rarity === "common").length,
    rare: badges.filter((b) => b.rarity === "rare").length,
    epic: badges.filter((b) => b.rarity === "epic").length,
    legendary: badges.filter((b) => b.rarity === "legendary").length,
  };

  const totalItemsSorted = badges.reduce(
    (sum, badge) => sum + (badge.items_sorted || 0),
    0
  );

  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white px-6 pt-8 pb-12 rounded-b-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-screen-lg mx-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1 flex items-center gap-2">
                <Award className="w-8 h-8" />
                My Badge Gallery
              </h1>
              <p className="text-emerald-100 text-sm">
                {badges.length} badges collected
              </p>
            </div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center col-span-2 md:col-span-1">
              <Recycle className="w-6 h-6 mx-auto mb-2 text-emerald-200" />
              <div className="text-2xl font-bold">{totalItemsSorted}</div>
              <div className="text-xs text-emerald-100">Items Sorted</div>
            </div>
            {[
              {
                label: "Common",
                count: rarityCount.common,
                color: "bg-gray-500",
              },
              { label: "Rare", count: rarityCount.rare, color: "bg-blue-500" },
              {
                label: "Epic",
                count: rarityCount.epic,
                color: "bg-purple-500",
              },
              {
                label: "Legendary",
                count: rarityCount.legendary,
                color: "bg-orange-500",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
              >
                <div
                  className={`w-2 h-2 ${stat.color} rounded-full mx-auto mb-2`}
                />
                <div className="text-2xl font-bold">{stat.count}</div>
                <div className="text-xs text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="px-6 -mt-6 max-w-screen-lg mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-white/50 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : badges.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 text-center shadow-xl"
          >
            <div className="text-8xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Badges Yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start sorting waste to earn your first badge!
            </p>
            <div className="inline-block bg-emerald-50 rounded-2xl px-6 py-4">
              <p className="text-sm text-emerald-700 font-medium">
                Sort recyclables, food waste, and more to unlock badges
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {badges.map((badge, index) => (
                <BadgeGalleryCard
                  key={badge.id}
                  badge={badge}
                  index={index}
                  onShare={setSelectedBadge}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Share Modal */}
      <ShareModal
        badge={selectedBadge}
        isOpen={!!selectedBadge}
        onClose={() => setSelectedBadge(null)}
      />
    </div>
  );
}
