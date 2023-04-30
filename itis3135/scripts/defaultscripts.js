
function scriptTest(){
  alert("hello");

}
    
   let today= new Date();
   let f = new Intl.DateTimeFormat("en-us",{
    dateStyle:"full"
   })
  

   document.getElementById("date").innerHTML=f.format(today);



//}

function myFunction(){
   let name = document.querySelector("#name");
   let message = document.querySelector("#message");
   let mood = document.querySelector("#mood");
   message.innerHTML = "Lewis Web and Co welcomes you " + name.value +", "+ " today you feel "+ mood.value;

}
function myTime(){
   let time = document.querySelector("#time");
   setInterval(() =>{
      let d = new Date();
      time.innerHTML = d.toLocaleTimeString();

   },1000)
   
}




   function toggleB(){
      let body = document.querySelector('body');
     let toggle = document.getElementById('toggleDark');
   toggle.classList.toggle('active');
   body.classList.toggle('active'); 
   
   let text= toggle.textContent || toggle.innerText;
   if(text=='Light Mode'){
      toggle.innerHTML="Dark Mode";
   }else{
      toggle.innerHTML='Light Mode';
   }
}

function bColor(){
   let color= document.getElementById('color').value;
   let body = document.getElementsByTagName('body')[0];
  body.style.background=color;

}

function disable(x){
x.disabled=true;
}

let count=0;
let output=document.getElementById('output');

function countClicks(){
count=count+1;
output.innerHTML=count;

}





  