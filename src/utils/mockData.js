// Mock用户数据，包含头像、用户名、徽章数量等信息
export const mockUsers = [
  {
    id: "user_001",
    username: "EcoWarrior",
    email: "ecowarrior@example.com",
    avatar: "🌱",
    badgeCount: 15,
    itemsSorted: 1250,
    joinDate: "2024-01-15",
    level: "Master",
    achievements: [
      "Waste Warrior Legend",
      "E-Waste Expert",
      "Composting Champion",
    ],
  },
  {
    id: "user_002",
    username: "GreenThumb",
    email: "greenthumb@example.com",
    avatar: "🌿",
    badgeCount: 12,
    itemsSorted: 980,
    joinDate: "2024-02-20",
    level: "Expert",
    achievements: ["Recycling Rookie", "Composting Champion", "Hazmat Hero"],
  },
  {
    id: "user_003",
    username: "RecycleKing",
    email: "recycleking@example.com",
    avatar: "♻️",
    badgeCount: 10,
    itemsSorted: 850,
    joinDate: "2024-03-10",
    level: "Expert",
    achievements: [
      "Recycling Rookie",
      "E-Waste Expert",
      "Waste Warrior Legend",
    ],
  },
  {
    id: "user_004",
    username: "EcoEnthusiast",
    email: "ecoenthusiast@example.com",
    avatar: "🌍",
    badgeCount: 8,
    itemsSorted: 650,
    joinDate: "2024-04-05",
    level: "Advanced",
    achievements: ["Composting Champion", "Hazmat Hero"],
  },
  {
    id: "user_005",
    username: "WasteWizard",
    email: "wastewizard@example.com",
    avatar: "🧙‍♂️",
    badgeCount: 7,
    itemsSorted: 580,
    joinDate: "2024-05-12",
    level: "Advanced",
    achievements: ["E-Waste Expert", "Recycling Rookie"],
  },
  {
    id: "user_006",
    username: "GreenGuru",
    email: "greenguru@example.com",
    avatar: "🧘‍♀️",
    badgeCount: 6,
    itemsSorted: 420,
    joinDate: "2024-06-18",
    level: "Intermediate",
    achievements: ["Composting Champion", "Hazmat Hero"],
  },
  {
    id: "user_007",
    username: "EcoExplorer",
    email: "ecoexplorer@example.com",
    avatar: "🗺️",
    badgeCount: 5,
    itemsSorted: 350,
    joinDate: "2024-07-25",
    level: "Intermediate",
    achievements: ["Recycling Rookie", "E-Waste Expert"],
  },
  {
    id: "user_008",
    username: "NatureLover",
    email: "naturelover@example.com",
    avatar: "🌸",
    badgeCount: 4,
    itemsSorted: 280,
    joinDate: "2024-08-30",
    level: "Beginner",
    achievements: ["Composting Champion"],
  },
  {
    id: "user_009",
    username: "GreenNewbie",
    email: "greennewbie@example.com",
    avatar: "🌱",
    badgeCount: 3,
    itemsSorted: 180,
    joinDate: "2024-09-15",
    level: "Beginner",
    achievements: ["Recycling Rookie"],
  },
  {
    id: "user_010",
    username: "EcoStarter",
    email: "ecostarter@example.com",
    avatar: "🌿",
    badgeCount: 2,
    itemsSorted: 120,
    joinDate: "2024-10-01",
    level: "Beginner",
    achievements: ["Recycling Rookie"],
  },
];

// Mock徽章数据，为每个用户分配徽章
export const mockBadges = [
  // EcoWarrior的徽章
  {
    id: "badge_001",
    name: "Waste Warrior Legend",
    user_id: "user_001",
    earned_date: "2024-01-20",
    rarity: "legendary",
    icon: "👑",
  },
  {
    id: "badge_002",
    name: "E-Waste Expert",
    user_id: "user_001",
    earned_date: "2024-01-25",
    rarity: "epic",
    icon: "📱",
  },
  {
    id: "badge_003",
    name: "Composting Champion",
    user_id: "user_001",
    earned_date: "2024-02-01",
    rarity: "rare",
    icon: "🌱",
  },
  {
    id: "badge_004",
    name: "Recycling Rookie",
    user_id: "user_001",
    earned_date: "2024-01-16",
    rarity: "common",
    icon: "♻️",
  },
  {
    id: "badge_005",
    name: "Hazmat Hero",
    user_id: "user_001",
    earned_date: "2024-02-10",
    rarity: "rare",
    icon: "⚠️",
  },
  {
    id: "badge_006",
    name: "首次登录",
    user_id: "user_001",
    earned_date: "2024-01-15",
    rarity: "common",
    icon: "👋",
  },
  {
    id: "badge_007",
    name: "分享达人",
    user_id: "user_001",
    earned_date: "2024-01-18",
    rarity: "rare",
    icon: "📤",
  },
  {
    id: "badge_008",
    name: "收藏家",
    user_id: "user_001",
    earned_date: "2024-02-05",
    rarity: "epic",
    icon: "🎯",
  },
  {
    id: "badge_009",
    name: "传奇玩家",
    user_id: "user_001",
    earned_date: "2024-02-15",
    rarity: "legendary",
    icon: "🏆",
  },
  {
    id: "badge_010",
    name: "连续签到7天",
    user_id: "user_001",
    earned_date: "2024-01-22",
    rarity: "rare",
    icon: "⭐",
  },
  {
    id: "badge_011",
    name: "Waste Warrior Legend",
    user_id: "user_001",
    earned_date: "2024-02-20",
    rarity: "legendary",
    icon: "👑",
  },
  {
    id: "badge_012",
    name: "E-Waste Expert",
    user_id: "user_001",
    earned_date: "2024-03-01",
    rarity: "epic",
    icon: "📱",
  },
  {
    id: "badge_013",
    name: "Composting Champion",
    user_id: "user_001",
    earned_date: "2024-03-05",
    rarity: "rare",
    icon: "🌱",
  },
  {
    id: "badge_014",
    name: "Recycling Rookie",
    user_id: "user_001",
    earned_date: "2024-03-10",
    rarity: "common",
    icon: "♻️",
  },
  {
    id: "badge_015",
    name: "Hazmat Hero",
    user_id: "user_001",
    earned_date: "2024-03-15",
    rarity: "rare",
    icon: "⚠️",
  },

  // GreenThumb的徽章
  {
    id: "badge_016",
    name: "Recycling Rookie",
    user_id: "user_002",
    earned_date: "2024-02-21",
    rarity: "common",
  },
  {
    id: "badge_017",
    name: "Composting Champion",
    user_id: "user_002",
    earned_date: "2024-02-25",
    rarity: "rare",
  },
  {
    id: "badge_018",
    name: "Hazmat Hero",
    user_id: "user_002",
    earned_date: "2024-03-01",
    rarity: "rare",
  },
  {
    id: "badge_019",
    name: "E-Waste Expert",
    user_id: "user_002",
    earned_date: "2024-03-05",
    rarity: "epic",
  },
  {
    id: "badge_020",
    name: "Waste Warrior Legend",
    user_id: "user_002",
    earned_date: "2024-03-10",
    rarity: "legendary",
  },
  {
    id: "badge_021",
    name: "首次登录",
    user_id: "user_002",
    earned_date: "2024-02-20",
    rarity: "common",
  },
  {
    id: "badge_022",
    name: "分享达人",
    user_id: "user_002",
    earned_date: "2024-02-22",
    rarity: "rare",
  },
  {
    id: "badge_023",
    name: "收藏家",
    user_id: "user_002",
    earned_date: "2024-03-02",
    rarity: "epic",
  },
  {
    id: "badge_024",
    name: "传奇玩家",
    user_id: "user_002",
    earned_date: "2024-03-12",
    rarity: "legendary",
  },
  {
    id: "badge_025",
    name: "连续签到7天",
    user_id: "user_002",
    earned_date: "2024-02-27",
    rarity: "rare",
  },
  {
    id: "badge_026",
    name: "Recycling Rookie",
    user_id: "user_002",
    earned_date: "2024-03-15",
    rarity: "common",
  },
  {
    id: "badge_027",
    name: "Composting Champion",
    user_id: "user_002",
    earned_date: "2024-03-20",
    rarity: "rare",
  },

  // RecycleKing的徽章
  {
    id: "badge_028",
    name: "Recycling Rookie",
    user_id: "user_003",
    earned_date: "2024-03-11",
    rarity: "common",
  },
  {
    id: "badge_029",
    name: "E-Waste Expert",
    user_id: "user_003",
    earned_date: "2024-03-15",
    rarity: "epic",
  },
  {
    id: "badge_030",
    name: "Waste Warrior Legend",
    user_id: "user_003",
    earned_date: "2024-03-20",
    rarity: "legendary",
  },
  {
    id: "badge_031",
    name: "Composting Champion",
    user_id: "user_003",
    earned_date: "2024-03-25",
    rarity: "rare",
  },
  {
    id: "badge_032",
    name: "Hazmat Hero",
    user_id: "user_003",
    earned_date: "2024-03-30",
    rarity: "rare",
  },
  {
    id: "badge_033",
    name: "首次登录",
    user_id: "user_003",
    earned_date: "2024-03-10",
    rarity: "common",
  },
  {
    id: "badge_034",
    name: "分享达人",
    user_id: "user_003",
    earned_date: "2024-03-12",
    rarity: "rare",
  },
  {
    id: "badge_035",
    name: "收藏家",
    user_id: "user_003",
    earned_date: "2024-03-18",
    rarity: "epic",
  },
  {
    id: "badge_036",
    name: "传奇玩家",
    user_id: "user_003",
    earned_date: "2024-03-22",
    rarity: "legendary",
  },
  {
    id: "badge_037",
    name: "连续签到7天",
    user_id: "user_003",
    earned_date: "2024-03-17",
    rarity: "rare",
  },

  // 其他用户的徽章数据...
  {
    id: "badge_038",
    name: "Composting Champion",
    user_id: "user_004",
    earned_date: "2024-04-06",
    rarity: "rare",
  },
  {
    id: "badge_039",
    name: "Hazmat Hero",
    user_id: "user_004",
    earned_date: "2024-04-10",
    rarity: "rare",
  },
  {
    id: "badge_040",
    name: "Recycling Rookie",
    user_id: "user_004",
    earned_date: "2024-04-05",
    rarity: "common",
  },
  {
    id: "badge_041",
    name: "E-Waste Expert",
    user_id: "user_004",
    earned_date: "2024-04-15",
    rarity: "epic",
  },
  {
    id: "badge_042",
    name: "Waste Warrior Legend",
    user_id: "user_004",
    earned_date: "2024-04-20",
    rarity: "legendary",
  },
  {
    id: "badge_043",
    name: "首次登录",
    user_id: "user_004",
    earned_date: "2024-04-05",
    rarity: "common",
  },
  {
    id: "badge_044",
    name: "分享达人",
    user_id: "user_004",
    earned_date: "2024-04-08",
    rarity: "rare",
  },
  {
    id: "badge_045",
    name: "收藏家",
    user_id: "user_004",
    earned_date: "2024-04-12",
    rarity: "epic",
  },

  {
    id: "badge_046",
    name: "E-Waste Expert",
    user_id: "user_005",
    earned_date: "2024-05-13",
    rarity: "epic",
  },
  {
    id: "badge_047",
    name: "Recycling Rookie",
    user_id: "user_005",
    earned_date: "2024-05-12",
    rarity: "common",
  },
  {
    id: "badge_048",
    name: "Composting Champion",
    user_id: "user_005",
    earned_date: "2024-05-15",
    rarity: "rare",
  },
  {
    id: "badge_049",
    name: "Hazmat Hero",
    user_id: "user_005",
    earned_date: "2024-05-18",
    rarity: "rare",
  },
  {
    id: "badge_050",
    name: "Waste Warrior Legend",
    user_id: "user_005",
    earned_date: "2024-05-20",
    rarity: "legendary",
  },
  {
    id: "badge_051",
    name: "首次登录",
    user_id: "user_005",
    earned_date: "2024-05-12",
    rarity: "common",
  },
  {
    id: "badge_052",
    name: "分享达人",
    user_id: "user_005",
    earned_date: "2024-05-14",
    rarity: "rare",
  },

  {
    id: "badge_053",
    name: "Composting Champion",
    user_id: "user_006",
    earned_date: "2024-06-19",
    rarity: "rare",
  },
  {
    id: "badge_054",
    name: "Hazmat Hero",
    user_id: "user_006",
    earned_date: "2024-06-22",
    rarity: "rare",
  },
  {
    id: "badge_055",
    name: "Recycling Rookie",
    user_id: "user_006",
    earned_date: "2024-06-18",
    rarity: "common",
  },
  {
    id: "badge_056",
    name: "E-Waste Expert",
    user_id: "user_006",
    earned_date: "2024-06-25",
    rarity: "epic",
  },
  {
    id: "badge_057",
    name: "Waste Warrior Legend",
    user_id: "user_006",
    earned_date: "2024-06-28",
    rarity: "legendary",
  },
  {
    id: "badge_058",
    name: "首次登录",
    user_id: "user_006",
    earned_date: "2024-06-18",
    rarity: "common",
  },

  {
    id: "badge_059",
    name: "Recycling Rookie",
    user_id: "user_007",
    earned_date: "2024-07-26",
    rarity: "common",
  },
  {
    id: "badge_060",
    name: "E-Waste Expert",
    user_id: "user_007",
    earned_date: "2024-07-30",
    rarity: "epic",
  },
  {
    id: "badge_061",
    name: "Composting Champion",
    user_id: "user_007",
    earned_date: "2024-08-02",
    rarity: "rare",
  },
  {
    id: "badge_062",
    name: "Hazmat Hero",
    user_id: "user_007",
    earned_date: "2024-08-05",
    rarity: "rare",
  },
  {
    id: "badge_063",
    name: "Waste Warrior Legend",
    user_id: "user_007",
    earned_date: "2024-08-08",
    rarity: "legendary",
  },

  {
    id: "badge_064",
    name: "Composting Champion",
    user_id: "user_008",
    earned_date: "2024-08-31",
    rarity: "rare",
  },
  {
    id: "badge_065",
    name: "Recycling Rookie",
    user_id: "user_008",
    earned_date: "2024-08-30",
    rarity: "common",
  },
  {
    id: "badge_066",
    name: "E-Waste Expert",
    user_id: "user_008",
    earned_date: "2024-09-02",
    rarity: "epic",
  },
  {
    id: "badge_067",
    name: "Hazmat Hero",
    user_id: "user_008",
    earned_date: "2024-09-05",
    rarity: "rare",
  },

  {
    id: "badge_068",
    name: "Recycling Rookie",
    user_id: "user_009",
    earned_date: "2024-09-16",
    rarity: "common",
  },
  {
    id: "badge_069",
    name: "Composting Champion",
    user_id: "user_009",
    earned_date: "2024-09-20",
    rarity: "rare",
  },
  {
    id: "badge_070",
    name: "E-Waste Expert",
    user_id: "user_009",
    earned_date: "2024-09-25",
    rarity: "epic",
  },

  {
    id: "badge_071",
    name: "Recycling Rookie",
    user_id: "user_010",
    earned_date: "2024-10-02",
    rarity: "common",
  },
  {
    id: "badge_072",
    name: "Composting Champion",
    user_id: "user_010",
    earned_date: "2024-10-05",
    rarity: "rare",
  },
];

// 获取用户统计数据
export const getUserStats = () => {
  return mockUsers
    .map((user) => {
      const userBadges = mockBadges.filter(
        (badge) => badge.user_id === user.id
      );
      return {
        ...user,
        badgeCount: userBadges.length,
        badges: userBadges,
      };
    })
    .sort((a, b) => b.badgeCount - a.badgeCount);
};

// 获取今日徽章数据
export const getTodayBadges = () => {
  const today = new Date().toISOString().split("T")[0];
  return mockBadges.filter((badge) => badge.earned_date === today);
};

// 生成最近7天的徽章数据
export const getRecent7DaysBadges = () => {
  const today = new Date();
  const recentBadges = [];

  // 为最近7天生成一些徽章数据
  const badgeNames = [
    "Recycling Rookie",
    "Composting Champion",
    "E-Waste Expert",
    "Hazmat Hero",
    "Waste Warrior Legend",
    "首次登录",
    "分享达人",
    "收藏家",
    "传奇玩家",
    "连续签到7天",
  ];

  // 为每个徽章名称定义对应的emoji
  const badgeEmojis = {
    "Recycling Rookie": "♻️",
    "Composting Champion": "🌱",
    "E-Waste Expert": "📱",
    "Hazmat Hero": "⚠️",
    "Waste Warrior Legend": "👑",
    首次登录: "👋",
    分享达人: "📤",
    收藏家: "🎯",
    传奇玩家: "🏆",
    连续签到7天: "⭐",
  };

  const userIds = ["user_001", "user_002", "user_003", "user_004", "user_005"];

  // 预定义的每天徽章数量，创建更有意义的趋势
  const dailyCounts = [2, 4, 3, 6, 5, 3, 4]; // 最近7天的徽章数量

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];

    // 使用预定义的数量而不是随机
    const badgesPerDay = dailyCounts[6 - i];

    for (let j = 0; j < badgesPerDay; j++) {
      const badgeName =
        badgeNames[Math.floor(Math.random() * badgeNames.length)];
      const userId = userIds[Math.floor(Math.random() * userIds.length)];

      recentBadges.push({
        id: `recent_badge_${dateStr}_${j}`,
        name: badgeName,
        user_id: userId,
        earned_date: dateStr,
        rarity: ["common", "rare", "epic", "legendary"][
          Math.floor(Math.random() * 4)
        ],
        icon: badgeEmojis[badgeName] || "🏆",
      });
    }
  }

  return recentBadges;
};

// 获取所有徽章数据
export const getAllBadges = () => {
  // 为所有徽章添加emoji
  const badgeEmojiMap = {
    "Waste Warrior Legend": "👑",
    "E-Waste Expert": "📱",
    "Composting Champion": "🌱",
    "Recycling Rookie": "♻️",
    "Hazmat Hero": "⚠️",
    首次登录: "👋",
    分享达人: "📤",
    收藏家: "🎯",
    传奇玩家: "🏆",
    连续签到7天: "⭐",
  };

  return mockBadges.map((badge) => ({
    ...badge,
    icon: badgeEmojiMap[badge.name] || "🏆",
  }));
};
