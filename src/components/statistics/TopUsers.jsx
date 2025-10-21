import React from "react";
import { Card } from "@/components/ui/card.jsx";
import { motion } from "framer-motion";
import { Trophy, Medal, Award, Crown, Star } from "lucide-react";

export default function TopUsers({ userStats }) {
  // Sort by badge count and get top 10
  const topUsers = userStats.slice(0, 10);

  const getRankIcon = (index) => {
    if (index === 0) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (index === 1) return <Trophy className="w-5 h-5 text-gray-400" />;
    if (index === 2) return <Medal className="w-5 h-5 text-orange-600" />;
    return <Star className="w-4 h-4 text-emerald-400" />;
  };

  const getRankColor = (index) => {
    if (index === 0) return "text-yellow-500";
    if (index === 1) return "text-gray-400";
    if (index === 2) return "text-orange-600";
    return "text-emerald-400";
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Master":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Expert":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Advanced":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Intermediate":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "Beginner":
        return "bg-gradient-to-r from-gray-400 to-gray-600";
      default:
        return "bg-gradient-to-r from-gray-400 to-gray-600";
    }
  };

  const getAvatarColor = (index) => {
    const colors = [
      "bg-gradient-to-br from-emerald-400 to-teal-500", // 绿色
      "bg-gradient-to-br from-blue-400 to-cyan-500", // 蓝色
      "bg-gradient-to-br from-purple-400 to-pink-500", // 紫色
      "bg-gradient-to-br from-orange-400 to-red-500", // 橙色
      "bg-gradient-to-br from-yellow-400 to-orange-500", // 黄色
      "bg-gradient-to-br from-indigo-400 to-purple-500", // 靛蓝
      "bg-gradient-to-br from-pink-400 to-rose-500", // 粉色
      "bg-gradient-to-br from-cyan-400 to-blue-500", // 青色
      "bg-gradient-to-br from-lime-400 to-green-500", // 酸橙绿
      "bg-gradient-to-br from-violet-400 to-purple-500", // 紫罗兰
    ];
    return colors[index % colors.length];
  };

  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm border-emerald-100 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-emerald-600" />
        <h3 className="text-xl font-bold text-gray-900">Leaderboard</h3>
      </div>

      <div className="space-y-3">
        {topUsers.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex items-center justify-between p-4 rounded-xl transition-all ${
              index < 3
                ? "bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              {/* Rank Icon */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 ${
                  index < 3 ? "bg-white shadow-md" : "bg-white"
                }`}
              >
                {getRankIcon(index)}
              </div>

              {/* Avatar */}
              <div
                className={`w-12 h-12 rounded-full ${getAvatarColor(
                  index
                )} flex items-center justify-center text-2xl shadow-lg`}
              >
                {user.avatar}
              </div>

              {/* User Info */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-gray-900 text-sm truncate">
                    {user.username}
                  </p>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(
                      user.level
                    )}`}
                  >
                    {user.level}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1">
                  {user.badgeCount} badges • {user.itemsSorted.toLocaleString()}{" "}
                  items sorted
                </p>
                <p className="text-xs text-gray-400">
                  Joined {new Date(user.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Rank Number */}
            <div
              className={`text-3xl font-bold flex-shrink-0 ${getRankColor(
                index
              )}`}
            >
              #{index + 1}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-emerald-600">
              {userStats.length}
            </div>
            <div className="text-xs text-gray-500">Total Users</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {userStats.reduce((sum, user) => sum + user.badgeCount, 0)}
            </div>
            <div className="text-xs text-gray-500">Total Badges</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {userStats
                .reduce((sum, user) => sum + user.itemsSorted, 0)
                .toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">Items Sorted</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
