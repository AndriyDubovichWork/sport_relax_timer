const audio = new Audio('alarm.mp3')



let FuncchangeCount = 0
let progressbar=document.getElementById('progressbar')
let RelaxSport=document.getElementById('RelaxSport')
progressbar.style.width='90%'
progressbar.value=0
function Start(){
  audio.play()
  function timer_15(){
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
      }
    },
    15*1000
  );
  }
  function timer_45(){
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
      }
    },
    45 * 1000
  );
  }
  timer_15()







}