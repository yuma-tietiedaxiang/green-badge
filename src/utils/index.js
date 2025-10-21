export function createPageUrl(pageName) {
  const routes = {
    MyBadges: "/my-badges",
    Statistics: "/statistics",
  };
  return routes[pageName] || "/";
}
