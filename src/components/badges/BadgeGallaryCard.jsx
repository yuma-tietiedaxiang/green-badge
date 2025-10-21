import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Sparkles, Calendar, Recycle } from "lucide-react";
import { format } from "date-fns";
import Badge3DModel from "./Badge3DModel.jsx";

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

const wasteCategoryLabels = {
  recyclable: "Recyclable",
  food_waste: "Food Waste",
  hazardous: "Hazardous",
  residual: "Residual",
  bulky: "Bulky Items",
  electronic: "E-Waste",
};

export default function BadgeGalleryCard({ badge, index, onShare }) {
  const rarityStyle = rarityConfig[badge.rarity] || rarityConfig.common;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className={`relative overflow-hidden bg-white/90 backdrop-blur-sm border-2 ${rarityStyle.color
          .split(" ")
          .pop()} ${
          rarityStyle.glow
        } shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer`}
        onClick={() => onShare && onShare(badge)}
      >
        {/* Rarity indicator */}
        {badge.rarity === "legendary" && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-pulse" />
        )}

        <div className="p-6">
          {/* 3D Model Display */}
          <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
            {badge.model_url ? (
              <Badge3DModel
                modelUrl={badge.model_url}
                color={badge.color || "#10b981"}
                autoRotate={isHovered}
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">
                {badge.icon || "🏆"}
              </div>
            )}
          </div>

          {/* Badge Info */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-lg text-gray-900 line-clamp-2">
                {badge.name}
              </h3>
              {badge.rarity === "legendary" && (
                <Sparkles className="w-5 h-5 text-orange-500 animate-pulse flex-shrink-0" />
              )}
            </div>

            <p className="text-sm text-gray-600 line-clamp-2">
              {badge.description}
            </p>

            {/* Waste info */}
            <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 rounded-lg p-2">
              <Recycle className="w-4 h-4" />
              <span className="font-medium">
                {wasteCategoryLabels[badge.waste_category]}
              </span>
              {badge.items_sorted && (
                <span className="text-xs text-emerald-600">
                  • {badge.items_sorted} items
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <Badge variant="outline" className={rarityStyle.color}>
                {badge.rarity === "common" && "Common"}
                {badge.rarity === "rare" && "Rare"}
                {badge.rarity === "epic" && "Epic"}
                {badge.rarity === "legendary" && "Legendary"}
              </Badge>

              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>{format(new Date(badge.earned_date), "MM/dd/yy")}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
