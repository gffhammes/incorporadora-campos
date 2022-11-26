export const scrollToTarget = (targetId: string, offset?: number): void => {
  const target = document.getElementById(targetId)?.offsetTop;

  const getTopDistance = () => {
    if (!target) return 0;

    if (offset) return target - offset;

    return target;
  };

  const topDistance = getTopDistance();

  window.scrollTo({
    top: topDistance,
    behavior: "smooth",
  });
};
