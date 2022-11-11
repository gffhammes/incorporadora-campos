export const scrollToTarget = (targetId: string): void => {
  const target = document.getElementById(targetId);
  target?.scrollIntoView({ behavior: "smooth" });
};
