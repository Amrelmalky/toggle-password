// ! Setup Variables
const input = document.querySelector(".pass");
const btn = document.querySelector(".btn");

const togglePassWord = () => {
  if (btn.getAttribute("data-set") === "show") {
    input.setAttribute("type", "text");
    btn.setAttribute("data-set" ,"hidden")
    btn.textContent = "hidden";
  } else {
    input.setAttribute("type", "password");
    btn.setAttribute("data-set" ,"show")
    btn.textContent = "show";
  }
};

btn.addEventListener("click", togglePassWord);
