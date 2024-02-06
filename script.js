document.addEventListener("DOMContentLoaded", () => {
  const toggleElements = document.querySelectorAll(
    ".question-item img, .question-item .question"
  );

  toggleElements.forEach((element) => {
    element.addEventListener("click", function () {
      const questionBox = this.closest(".question-box");
      const answerItem = questionBox.querySelector(".answer-item");
      const icon = questionBox.querySelector("img");

      const isExpanding = icon.getAttribute("src").includes("icon-plus.svg");

      if (isExpanding) {
        icon.setAttribute("src", "./assets/images/icon-minus.svg");
        answerItem.style.height = "auto"; 
      } else {
        icon.setAttribute("src", "./assets/images/icon-plus.svg");
        answerItem.style.height = "0";
      }
    });
  });
});
