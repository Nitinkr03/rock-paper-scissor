let rockbutton=document.querySelector(".button1")
let rockimage=document.querySelector(".rockimage")
let paperbutton=document.querySelector(".button2")
let paperimage=document.querySelector(".paperimage")
let scissorbutton=document.querySelector(".button3")
let scissorimage=document.querySelector(".scissorimage")
let lock=document.querySelector(".lockbutton")
let yourcore=document.querySelector(".yourcore")
let oppocore=document.querySelector(".oppocore")
let won=document.querySelector(".won")
let lost=document.querySelector(".lost")
let draw=document.querySelector(".draw")
let userinput=0
let yourscore=0;
let opposcore=0;

rockbutton.addEventListener("click",()=>{
    userinput=1
console.log(userinput)
})
paperbutton.addEventListener("click",()=>{
    userinput=2
console.log(userinput)
})
scissorbutton.addEventListener("click",()=>{
    userinput=3
console.log(userinput)
console.log("HELLO")
})
const max=3
const min=1
let computerinput=Math.floor(Math.random()*(max-min+1)+min)
// 1-rock
//2-paper
//3-scissor

lock.addEventListener("click",()=>{
    if(userinput==1){
        if(computerinput==2){
         paperimage.style.display="block"
        lost.style.display="block"
        opposcore++;
        }
        else if(computerinput==3){
                scissorimage.style.display="block"
            won.style.display="block"
            yourscore++;
            yourcore.innerText=yourscore
        }
        else{
            rockimage.style.display="block"
            draw.style.display="block"
        }   
    }
    else if(userinput==2){
        if(computerinput==3){
            scissorimage.style.display="block"
            lost.style.display="block"
        opposcore++;

        }
        else if(computerinput==1){
            rockimage.style.display="block"
            won.style.display="block" 
            yourscore++;
            yourcore.innerText=yourscore


        }
        else{
         paperimage.style.display="block"
         draw.style.display="block"
        }
    }
    else{
        if(computerinput==1){
            lost.style.display="block"
            rockimage.style.display="block"    
        opposcore++;

        }
        else if(computerinput==2){
            won.style.display="block" 
            yourscore++;
            yourcore.innerText=yourscore


         paperimage.style.display="block"       
        }
        else{
            scissorimage.style.display="block"
         draw.style.display="block"
        }
    }

})

