// Mock API client for development
class MockBase44Client {
  constructor() {
    this.auth = {
      me: async () => {
        // Mock user data
        return {
          id: "1",
          email: "user@example.com",
          name: "Test User",
        };
      },
    };

    this.entities = {
      Badge: {
        list: async (sort = "") => {
          // Mock badge data
          return [
            {
              id: "1",
              name: "Recycling Champion",
              description: "Sorted 50 recyclable items",
              model_url: null,
              color: "#10b981",
              waste_category: "recyclable",
              items_sorted: 50,
              earned_date: new Date().toISOString(),
              rarity: "common",
              created_by: "user@example.com",
            },
            {
              id: "2",
              name: "Food Waste Warrior",
              description: "Composted 25 food waste items",
              model_url: null,
              color: "#f59e0b",
              waste_category: "food_waste",
              items_sorted: 25,
              earned_date: new Date(Date.now() - 86400000).toISOString(),
              rarity: "rare",
              created_by: "user@example.com",
            },
            {
              id: "3",
              name: "E-Waste Expert",
              description: "Properly disposed of 10 electronic items",
              model_url: null,
              color: "#8b5cf6",
              waste_category: "electronic",
              items_sorted: 10,
              earned_date: new Date(Date.now() - 172800000).toISOString(),
              rarity: "epic",
              created_by: "user@example.com",
            },
            {
              id: "4",
              name: "Environmental Legend",
              description: "Mastered all waste categories",
              model_url: null,
              color: "#f97316",
              waste_category: "recyclable",
              items_sorted: 100,
              earned_date: new Date(Date.now() - 259200000).toISOString(),
              rarity: "legendary",
              created_by: "user@example.com",
            },
            {
              id: "5",
              name: "Hazardous Handler",
              description: "Safely disposed of hazardous materials",
              model_url: null,
              color: "#ef4444",
              waste_category: "hazardous",
              items_sorted: 5,
              earned_date: new Date(Date.now() - 345600000).toISOString(),
              rarity: "rare",
              created_by: "user@example.com",
            },
            {
              id: "6",
              name: "Bulky Items Master",
              description: "Handled large items responsibly",
              model_url: null,
              color: "#06b6d4",
              waste_category: "bulky",
              items_sorted: 3,
              earned_date: new Date(Date.now() - 432000000).toISOString(),
              rarity: "epic",
              created_by: "user@example.com",
            },
          ];
        },

        filter: async (conditions = {}, sort = "") => {
          const allBadges = await this.list(sort);
          // Simple filtering - in real app this would be more sophisticated
          if (conditions.created_by) {
            return allBadges.filter(
              (badge) => badge.created_by === conditions.created_by
            );
          }
          return allBadges;
        },
      },
    };
  }
}

export const base44 = new MockBase44Client();
