const audio = new Audio('alarm.mp3')




let progressbar=document.getElementById('progressbar')
let RelaxSport=document.getElementById('RelaxSport')
let ReapeatNum=document.getElementById('numberOFreapeat')
progressbar.style.width='90%'

function Start(){
  let relaxtime=15
  let workTime=45
  let repeatnum=7
  
  if (document.getElementById('relaxTime').value) {
    relaxtime=document.getElementById('relaxTime').value
    
  }
  if (document.getElementById('workTime').value) {
    workTime=document.getElementById('workTime').value
    
  }  
  if (document.getElementById('numberOFreapeat').value) {
    repeatnum=document.getElementById('numberOFreapeat').value
    
  }  
  document.getElementById('relaxTime').disabled=true
  document.getElementById('workTime').disabled=true
  document.getElementById('numberOFreapeat').disabled=true
  progressbar.max=repeatnum*20



  let FuncchangeCount = 0
  progressbar.value=0
  audio.play()
  document.body.style.background = "rgb(50,255,0)";
  document.body.style.background = "linear-gradient(90deg, rgba(50,255,0,1) 0%, rgba(0,212,255,1) 100%)";
  RelaxSport.innerHTML ='Relax'
  function timer_1(){
  
  document. getElementById("start").disabled = true
  timer1=setTimeout(
    () => {
      if(FuncchangeCount<repeatnum*2){
        
        
        document.body.style.background = "rgb(40,0,255)";
        document.body.style.background = "linear-gradient(90deg, rgba(40,0,255,1) 0%, rgba(255,0,0,1) 100%)";
        timer_2()
        audio.play()
        ++FuncchangeCount
        progressbar.value=FuncchangeCount*10
        RelaxSport.innerHTML ='Sport'

      }else{
        clearTimeout(timer1);
        document. getElementById("start").disabled = false
        document.getElementById('relaxTime').disabled=false
        document.getElementById('workTime').disabled=false
        document.getElementById('numberOFreapeat').disabled=false
        progressbar.value=0
      }
    },
    relaxtime*1000
  );
  document.getElementById("stop").onclick=function () {
    document.getElementById("start").disabled = false
    document.getElementById('relaxTime').disabled=false
    document.getElementById('workTime').disabled=false
    document.getElementById('numberOFreapeat').disabled=false
    progressbar.value=0
    clearTimeout(timer2);
    clearTimeout(timer1);
    document.body.style.background = "rgb(50,255,0)";
    document.body.style.background = "linear-gradient(90deg, rgba(50,255,0,1) 0%, rgba(0,212,255,1) 100%)";
    RelaxSport.innerHTML ='Relax'
  }
  }
  function timer_2(){
  
  document. getElementById("start").disabled = true
  timer2=setTimeout(
    () => {
      if(FuncchangeCount<repeatnum*2){
        
        document.body.style.background = "rgb(50,255,0)";
        document.body.style.background = "linear-gradient(90deg, rgba(50,255,0,1) 0%, rgba(0,212,255,1) 100%)";
        timer_1()
        audio.play()
        ++FuncchangeCount
        progressbar.value=FuncchangeCount*10
        RelaxSport.innerHTML ='Relax'
      }else{
        clearTimeout(timer2);
        document. getElementById("start").disabled = false
        document.getElementById('relaxTime').disabled=false
        document.getElementById('workTime').disabled=false
        document.getElementById('numberOFreapeat').disabled=false
        progressbar.value=0
      }
    },
    workTime * 1000
  );
  document.getElementById("stop").onclick=function () {
    document.getElementById("start").disabled = false
    document.getElementById('relaxTime').disabled=false
    document.getElementById('workTime').disabled=false
    document.getElementById('numberOFreapeat').disabled=false
    progressbar.value=0
    clearTimeout(timer2);
    clearTimeout(timer1);
    document.body.style.background = "rgb(50,255,0)";
    document.body.style.background = "linear-gradient(90deg, rgba(50,255,0,1) 0%, rgba(0,212,255,1) 100%)";
    RelaxSport.innerHTML ='Relax'
  }
  }
  timer_1()


}


