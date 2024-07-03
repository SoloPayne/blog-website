window.addEventListener("resize", () => {
  const topSvgElement = document.getElementById("lt");

  if (topSvgElement) {
    if (window.innerWidth <= 768) {
      topSvgElement.setAttribute("src", "/images/teksteeze.svg");
      topSvgElement.classList.add("top_svg_2");
      topSvgElement.classList.remove("top_svg");
    } else {
      topSvgElement.setAttribute("src", "/images/teksteezeflipped.svg");
      topSvgElement.classList.remove("top_svg_2");
      topSvgElement.classList.add("top_svg");
    }
  }
});

window.onload = () => {
  const topSvgElement = document.getElementById("lt");

  if (topSvgElement) {
    if (window.innerWidth <= 768) {
      topSvgElement.setAttribute("src", "/images/teksteeze.svg");
      topSvgElement.classList.add("top_svg_2");
      topSvgElement.classList.remove("top_svg");
    } else {
      topSvgElement.setAttribute("src", "/images/teksteezeflipped.svg");
      topSvgElement.classList.remove("top_svg_2");
      topSvgElement.classList.add("top_svg");
    }
  }
};

// function mapping() {
//   const list = [];
//   let num = 1;

//   // Populate the list with initial values, for example, [1, 2, 3]
//   const initialList = [1, 2, 3];

//   initialList.forEach(() => {
//     num += 1;
//     list.push(num);
//   });
// }

// document.addEventListener("click", mapping);

// const [one, two] = document.querySelectorAll(".widget");

// const compile = [one, two];

// compile.forEach((element) => {
//   //  element.classList.add("d-none");
//   console.log(element.id);
// });
