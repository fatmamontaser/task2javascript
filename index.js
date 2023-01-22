let decrease = document.querySelector(".dec");
let rest= document.querySelector(".res");
let increase = document.querySelector(".inc");
let coununtOfNumber= document.querySelector("h1");
let count=0;

increase.addEventListener('click',()=>{
 
    count+=1;
    coununtOfNumber.innerHTML=count
    
    })
decrease.addEventListener('click',()=>{
 
count-=1;
coununtOfNumber.innerHTML=count

})

rest.addEventListener('click',()=>{
 
    count=0;
    coununtOfNumber.innerHTML=count
    
    })

