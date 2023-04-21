//TODO your main logic here
let searchEl = document.querySelector("#search-form");
let formatEl = document.querySelector("#format-input")
let submitBtn = document.querySelector(".btn-info")


submitBtn.addEventListener("click", function(event){
    event.preventDefault()
    var searchValue = searchEl.textContent
    var formatValue = formatEl.textContent
    localStorage.setItem("search-value", searchValue);
    localStorage.setItem("format-value", formatValue);
    window.location.href = "./search-results.html"
})
