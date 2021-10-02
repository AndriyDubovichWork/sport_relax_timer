const audio = new Audio('alarm.mp3')




let progressbar=document.getElementById('progressbar')
let RelaxSport=document.getElementById('RelaxSport')
progressbar.style.width='90%'

function Start(){
  let relaxtime=15
  let workTime=45
  if (document.getElementById('relaxTime').value) {
    relaxtime=document.getElementById('relaxTime').value
    
  }
  if (document.getElementById('workTime').value) {
    workTime=document.getElementById('workTime').value
    
  }  
  document.getElementById('relaxTime').disabled=true
  document.getElementById('workTime').disabled=true




  let FuncchangeCount = 0
  progressbar.value=0
  audio.play()
  document.body.style.background = "rgb(50,255,0)";
  document.body.style.background = "linear-gradient(90deg, rgba(50,255,0,1) 0%, rgba(0,212,255,1) 100%)";
  RelaxSport.innerHTML ='Relax'
  function timer_15(){
  document. getElementById("start").disabled = true
  timer15=setTimeout(
    () => {
      if(FuncchangeCount<14){
        
        
        document.body.style.background = "rgb(40,0,255)";
        document.body.style.background = "linear-gradient(90deg, rgba(40,0,255,1) 0%, rgba(255,0,0,1) 100%)";
        timer_45()
        audio.play()
        ++FuncchangeCount
        progressbar.value=FuncchangeCount*10
        RelaxSport.innerHTML ='Sport'

      }else{
        clearTimeout(timer15);
        document. getElementById("start").disabled = false
        document.getElementById('relaxTime').disabled=false
        document.getElementById('workTime').disabled=false
        progressbar.value=0
      }
    },
    relaxtime*1000
  );
  document.getElementById("stop").onclick=function () {
    document.getElementById("start").disabled = false
    document.getElementById('relaxTime').disabled=false
    document.getElementById('workTime').disabled=false
    progressbar.value=0
    clearTimeout(timer45);
    clearTimeout(timer15);
    document.body.style.background = "rgb(50,255,0)";
    document.body.style.background = "linear-gradient(90deg, rgba(50,255,0,1) 0%, rgba(0,212,255,1) 100%)";
    RelaxSport.innerHTML ='Relax'
  }
  }
  function timer_45(){
  
  document. getElementById("start").disabled = true
  timer45=setTimeout(
    () => {
      if(FuncchangeCount<14){
        
        document.body.style.background = "rgb(50,255,0)";
        document.body.style.background = "linear-gradient(90deg, rgba(50,255,0,1) 0%, rgba(0,212,255,1) 100%)";
        timer_15()
        audio.play()
        ++FuncchangeCount
        progressbar.value=FuncchangeCount*10
        RelaxSport.innerHTML ='Relax'
      }else{
        clearTimeout(timer45);
        document. getElementById("start").disabled = false
        document.getElementById('relaxTime').disabled=false
        document.getElementById('workTime').disabled=false
        progressbar.value=0
      }
    },
    workTime * 1000
  );
  document.getElementById("stop").onclick=function () {
    document.getElementById("start").disabled = false
    document.getElementById('relaxTime').disabled=false
    document.getElementById('workTime').disabled=false
    progressbar.value=0
    clearTimeout(timer45);
    clearTimeout(timer15);
    document.body.style.background = "rgb(50,255,0)";
    document.body.style.background = "linear-gradient(90deg, rgba(50,255,0,1) 0%, rgba(0,212,255,1) 100%)";
    RelaxSport.innerHTML ='Relax'
  }
  }
  timer_15()


}


