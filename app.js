function getPin(){
    const pin =Math.round(Math.random()*10000);
    const pinSting =pin+'';
     if (pinSting.length==4){
         return pin;
     }
else{
    return getPin();
}
}
function generatepin(){
const pin =getPin();
document.getElementById('pinShowForm').value=pin;
};
document.getElementById('cal-In').addEventListener('click',function (event){
    const numbar= event.target.innerText;
    const caleInput=document.getElementById('cal-Form');
    if(isNaN(numbar)){
      if(numbar=='C'){
        caleInput.value='';
      }
      
    }
    else{
        const previusNumbar= caleInput.value;
        const newNumbar= previusNumbar+numbar;
        caleInput.value =newNumbar;
    }
   

})

function matchBtn(){

    const pingenerator=document.getElementById('pinShowForm').value;
    const tryPin=document.getElementById('cal-Form').value;

    const netifyTure= document.getElementById('notify-true');
    const netifyFlase= document.getElementById('notify-flase');

    if(pingenerator==tryPin){
        netifyTure.style.display='block';
        netifyFlase.style.display='none';
    }
    else{       
        netifyTure.style.display='none';
        netifyFlase.style.display='block';
    }
   
}

