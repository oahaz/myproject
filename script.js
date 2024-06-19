const html = document.querySelector("html");
const info = document.querySelector(".info");

const target = document.querySelector(".target");
let center = {
  x: target.getBoundingClientRect().left + target.clientWidth / 2,
  y: target.getBoundingClientRect().top + target.clientHeight / 2,
};

window.addEventListener("resize", () => {
  center = {
    x: target.getBoundingClientRect().left + target.clientWidth / 2,
    y: target.getBoundingClientRect().top + target.clientHeight / 2,
  };
  console.log("실행");
});

html.addEventListener("mousemove", (e) => {
  const x = center.x - e.clientX;
  const y = center.y - e.clientY;

  const radian = Math.atan2(y, x);
  const degree = ((radian * 180) / Math.PI).toFixed(0);
  info.innerHTML =
    "mouse(x/y) : " +
    e.clientX +
    "/" +
    e.clientY +
    "<br>target : rotate " +
    degree +
    "deg";
  target.style.transform = "translate(-50%, -50%) rotate(" + degree + "deg)";
});
