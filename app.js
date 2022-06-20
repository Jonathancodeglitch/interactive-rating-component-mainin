let ratings=document.querySelectorAll(".rate");
let main= document.querySelector(".grid");
let rateNum=document.querySelector(".selected-text")
let select =ratings.forEach(rate=>rate.addEventListener('click',function(){
   ratings.forEach(ratings=>{
       if(ratings!==rate){
           ratings.classList.remove('active')
       }
   })
   rate.classList.add('active')
   rateNum.innerHTML=`you selected ${rate.innerHTML}/5!`
}))

let button=document.querySelector('.btn').addEventListener('click',function(){
      main.classList.add('close')  
})

