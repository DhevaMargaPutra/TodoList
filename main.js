const submitBtn = document.getElementById("sub");
const inputFld = document.getElementById("in");
const myLst = document.getElementById("list");

myLst.innerHTML = localStorage.getItem("list");
submitBtn.addEventListener("click", function() {
    console.log(inputFld.value);
    myLst.innerHTML = myLst.innerHTML + '<li class="list-group-item">' + inputFld.value + '</li>';
    localStorage.setItem ("list", myLst.innerHTML);
    inputFld.value = "";
});