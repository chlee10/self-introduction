// 스크롤 시 섹션이 부드럽게 나타나는 효과
(function () {
  const items = document.querySelectorAll(".reveal");

  // IntersectionObserver 미지원 환경 대비
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el, i) => {
    // 같은 화면 안의 요소들이 살짝 시차를 두고 등장
    el.style.transitionDelay = (i % 6) * 60 + "ms";
    observer.observe(el);
  });
})();
