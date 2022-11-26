
// let button=document.getElementsByTagName("button")
 let button = document.querySelectorAll('.button');
console.log(button)
let input=document.getElementById("input")
let equal=document.getElementById("equal")
let clear=document.getElementById("clear")

button.forEach((button)=> {

    button.addEventListener("click",(element)=>{
                let value=element.value
                // input.value+=value;
                console.log(button.value)
                // console.log(element.target.value)
                 input.value+=element.target.value;
    })
    
});

clear.addEventListener('click',(element)=>{

            input.value="";
        
})
equal.addEventListener('click',(element)=>{

    input.value=eval(input.value)
})











