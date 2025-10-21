// CSV徽章数据解析和转换工具
export const parseCSVBadgeData = () => {
  // 从CSV文件解析的徽章数据
  const csvBadgeData = [
    {
      id: "68f6c91382f13ed14465558c",
      name: "Recycling Rookie",
      description: "Sorted your first 10 recyclable items",
      icon: "🌍",
      color: "#3b82f6",
      category: "",
      earned_date: "2025-01-15",
      rarity: "common",
      created_date: "2025-10-20T23:43:15.319000",
      updated_date: "2025-10-20T23:43:15.319000",
      created_by_id: "68f6c687f122562a7aeab1f4",
      created_by: "cn221071hz@gmail.com",
      is_sample: "",
      model_url: "/models/planet_earth.glb", // Add 3D model for Earth
    },
    {
      id: "68f6c91382f13ed14465558d",
      name: "Composting Champion",
      description: "Diverted 50 food waste items from landfill",
      icon: "🏖️",
      color: "#10b981",
      category: "",
      earned_date: "2025-01-14",
      rarity: "rare",
      created_date: "2025-10-20T23:43:15.319000",
      updated_date: "2025-10-20T23:43:15.319000",
      created_by_id: "68f6c687f122562a7aeab1f4",
      created_by: "cn221071hz@gmail.com",
      is_sample: "",
    },
    {
      id: "68f6c91382f13ed14465558e",
      name: "E-Waste Expert",
      description: "Properly disposed 100 electronic items",
      icon: "🍉",
      color: "#8b5cf6",
      category: "",
      earned_date: "2025-01-13",
      rarity: "epic",
      created_date: "2025-10-20T23:43:15.319000",
      updated_date: "2025-10-20T23:43:15.319000",
      created_by_id: "68f6c687f122562a7aeab1f4",
      created_by: "cn221071hz@gmail.com",
      is_sample: "",
    },
    {
      id: "68f6c91382f13ed14465558f",
      name: "Waste Warrior Legend",
      description: "Master of all waste categories - 500+ items sorted!",
      icon: "👑",
      color: "#f59e0b",
      category: "",
      earned_date: "2025-01-12",
      rarity: "legendary",
      created_date: "2025-10-20T23:43:15.319000",
      updated_date: "2025-10-20T23:43:15.319000",
      created_by_id: "68f6c687f122562a7aeab1f4",
      created_by: "cn221071hz@gmail.com",
      is_sample: "",
    },
    {
      id: "68f6c91382f13ed144655590",
      name: "Hazmat Hero",
      description: "Safely disposed 25 hazardous items",
      icon: "⛄️",
      color: "#ef4444",
      category: "",
      earned_date: "2025-01-15",
      rarity: "rare",
      created_date: "2025-10-20T23:43:15.319000",
      updated_date: "2025-10-20T23:43:15.319000",
      created_by_id: "68f6c687f122562a7aeab1f4",
      created_by: "cn221071hz@gmail.com",
      is_sample: "",
    },
  ];

  // 转换数据格式以匹配应用的数据结构
  return csvBadgeData.map((badge) => ({
    ...badge,
    // 为没有图标的徽章添加默认图标
    icon: badge.icon || "🏆",
    // 为没有分类的徽章添加默认分类
    category: badge.category || "achievement",
    // 添加waste_category字段（基于描述推断）
    waste_category: inferWasteCategory(badge.description),
    // 添加items_sorted字段（基于描述推断）
    items_sorted: extractItemsCount(badge.description),
  }));
};

// 根据描述推断废物分类
const inferWasteCategory = (description) => {
  const desc = description.toLowerCase();
  if (desc.includes("recycl") || desc.includes("recycling"))
    return "recyclable";
  if (desc.includes("food") || desc.includes("compost")) return "food_waste";
  if (desc.includes("electronic") || desc.includes("e-waste"))
    return "electronic";
  if (desc.includes("hazardous") || desc.includes("hazmat")) return "hazardous";
  return "residual";
};

// 从描述中提取物品数量
const extractItemsCount = (description) => {
  const matches = description.match(/(\d+)/);
  return matches ? parseInt(matches[1]) : 0;
};
