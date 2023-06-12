let inp = document.querySelector(".grow"),
    num = document.querySelector(".num");

inp.addEventListener("input", () => {
    num.innerHTML = inp.value;
})