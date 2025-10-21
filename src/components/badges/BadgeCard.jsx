import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Sparkles, Calendar } from "lucide-react";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

const rarityConfig = {
  common: {
    color: "bg-gray-100 text-gray-700 border-gray-300",
    glow: "shadow-gray-200",
  },
  rare: {
    color: "bg-blue-100 text-blue-700 border-blue-300",
    glow: "shadow-blue-200",
  },
  epic: {
    color: "bg-purple-100 text-purple-700 border-purple-300",
    glow: "shadow-purple-200",
  },
  legendary: {
    color:
      "bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border-orange-300",
    glow: "shadow-orange-200",
  },
};

export default function BadgeCard({ badge, index, onShare }) {
  const rarityStyle = rarityConfig[badge.rarity] || rarityConfig.common;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        className={`relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 ${rarityStyle.color
          .split(" ")
          .pop()} ${
          rarityStyle.glow
        } shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
        onClick={() => onShare && onShare(badge)}
      >
        {/* Rarity indicator */}
        {badge.rarity === "legendary" && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-pulse" />
        )}

        <div className="p-5">
          {/* Icon and Badge Info */}
          <div className="flex items-start gap-4 mb-3">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg`}
              style={{ backgroundColor: badge.color || "#667eea" }}
            >
              {badge.icon || "🏆"}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-900 truncate">
                  {badge.name}
                </h3>
                {badge.rarity === "legendary" && (
                  <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                )}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {badge.description}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <Badge variant="outline" className={rarityStyle.color}>
              {badge.rarity === "common" && "普通"}
              {badge.rarity === "rare" && "稀有"}
              {badge.rarity === "epic" && "史诗"}
              {badge.rarity === "legendary" && "传说"}
            </Badge>

            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>
                {format(new Date(badge.earned_date), "MM/dd", { locale: zhCN })}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
