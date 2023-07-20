let count = 0;
let arr = document.getElementsByClassName("images")
let dot = document.getElementsByClassName("hello")
// console.log(dot)
// console.log(arr)
arr[0].style.display = "block"
dot[0].className += " active"
console.log(dot[0].className)

function slide_show(num){
    // console.log(count)
    arr[count].style.display = "none"
    dot[count].className = dot[count].className.replace("active","")
    count+=num;

    if(count==arr.length){
        count=0;
    }
    if(count<0){
        count=arr.length-1;
    }

    arr[count].style.display = "block"
    dot[count].className += " active"

}
