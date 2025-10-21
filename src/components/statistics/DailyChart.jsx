import React from "react";
import { Card } from "@/components/ui/card.jsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, subDays } from "date-fns";

export default function DailyChart({ badges }) {
  // Generate last 7 days data
  const chartData = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), 6 - i);
    const dateStr = format(date, "yyyy-MM-dd");
    const count = badges.filter((badge) => {
      const earnedDate = format(new Date(badge.earned_date), "yyyy-MM-dd");
      return earnedDate === dateStr;
    }).length;

    return {
      date: format(date, "MM/dd"),
      count,
      fullDate: dateStr,
    };
  });

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-emerald-100">
          <p className="text-sm font-medium text-gray-900">
            {payload[0].payload.date}
          </p>
          <p className="text-xs text-emerald-600">
            {payload[0].value} badges earned
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm border-emerald-100 shadow-lg">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        7-Day Badge Trend
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={{ stroke: "#e5e7eb" }}
          />
          <YAxis
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={{ stroke: "#e5e7eb" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="count"
            fill="url(#colorGradient)"
            radius={[8, 8, 0, 0]}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
