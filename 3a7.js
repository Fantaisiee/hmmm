var listDiv = document.querySelectorAll('.div');
var curDiv=0;
var count=0;
listDiv.forEach((Element,index)=>{
    Element.addEventListener('click',e=>{
        listDiv[index].style.transition = 0.5;
        listDiv[index].style.opacity = 0;
        count++;
        
        const myTimeout = setTimeout(e=>{if(count==4){
            alert('SURTRRRRRRRRRRRRRRRRRRRRR')} 
        },1000);
       
    })
})