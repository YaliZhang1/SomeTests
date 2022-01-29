var headOne = document.querySelector("#one");
var headTwo = document.querySelector("#two");
var headThree = document.querySelector("#three");

headOne.addEventListener('mouseover', function(){
    headOne.textContent = "Mouse currently over";
    headOne.style.color = "red";
});
headOne.addEventListener('mouseout',function(){
    headOne.textContent = "Mouse not on me";
    headOne.style.color = "blue";
});
headTwo.addEventListener('click', function(){
    headTwo.textContent ="You have clicked!";
    headTwo.style.color = "blue";
});
headThree.addEventListener('dblclick', function(){
    headThree.textContent ="Double clicked!";
    headThree.style.color = "red";
})