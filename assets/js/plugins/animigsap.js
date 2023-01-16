const splitPArray = gsap.utils.toArray("p");
splitPArray.forEach((P) => {
  const splitP = new SplitText(P, { type: ["lines"] });
  const splitPParent = new SplitText(P, {
    type: ["lines"],
    linesClass: "lineParent",
  });
  gsap.set(".lineParent", { overflow: "hidden" });
  gsap.from(splitP.lines, {
    yPercent: 100,
    stagger: 0.1,
    scrollTrigger: {
      trigger: splitP.lines,
      start: "top 80%",
      markers: true,
    },
  });
});