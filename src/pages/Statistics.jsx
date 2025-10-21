import React, { useState, useEffect } from "react";
import { TrendingUp, Users, Award, Zap, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import DailyChart from "../components/statistics/DailyChart.jsx";
import TopUsers from "../components/statistics/TopUsers.jsx";
import {
  getUserStats,
  getTodayBadges,
  getAllBadges,
  getRecent7DaysBadges,
} from "../utils/mockData.js";

export default function Statistics() {
  const [userStats, setUserStats] = useState([]);
  const [allBadges, setAllBadges] = useState([]);
  const [todayBadges, setTodayBadges] = useState([]);
  const [recent7DaysBadges, setRecent7DaysBadges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 模拟加载延迟

      const stats = getUserStats();
      const badges = getAllBadges();
      const today = getTodayBadges();
      const recent7Days = getRecent7DaysBadges();

      setUserStats(stats);
      setAllBadges(badges);
      setTodayBadges(today);
      setRecent7DaysBadges(recent7Days);
      setIsLoading(false);
    };

    loadData();
  }, []);

  // Calculate unique users
  const uniqueUsers = userStats.length;

  // Total items sorted
  const totalItemsSorted = userStats.reduce(
    (sum, user) => sum + user.itemsSorted,
    0
  );

  // Most popular badge today
  const badgeCounts = todayBadges.reduce((acc, badge) => {
    acc[badge.name] = (acc[badge.name] || 0) + 1;
    return acc;
  }, {});
  const mostPopular = Object.entries(badgeCounts).sort(
    (a, b) => b[1] - a[1]
  )[0];

  const stats = [
    {
      label: "Today's Badges",
      value: todayBadges.length,
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      label: "Total Badges",
      value: allBadges.length,
      icon: Award,
      color: "from-emerald-400 to-teal-600",
      bgColor: "bg-emerald-50",
    },
    {
      label: "Active Users",
      value: uniqueUsers,
      icon: Users,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: "Items Sorted",
      value: totalItemsSorted.toLocaleString(),
      icon: Recycle,
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white px-6 pt-8 pb-12 rounded-b-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-screen-lg mx-auto"
        >
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Statistics</h1>
          </div>
          <p className="text-emerald-100 text-sm">
            Community badge trends & activity
          </p>
        </motion.div>
      </div>

      <div className="px-6 -mt-6 max-w-screen-lg mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`${stat.bgColor} rounded-2xl p-4 md:p-5 shadow-lg`}
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Most Popular Badge Today */}
        {mostPopular && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-purple-100"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
              <h3 className="font-bold text-gray-900">
                Today's Trending Badge
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-4xl">🔥</div>
                <div>
                  <p className="font-bold text-gray-900">{mostPopular[0]}</p>
                  <p className="text-sm text-gray-600">
                    {mostPopular[1]} users earned it
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Daily Chart */}
        <DailyChart badges={recent7DaysBadges} />

        {/* Top Users */}
        <TopUsers userStats={userStats} />
      </div>
    </div>
  );
}
