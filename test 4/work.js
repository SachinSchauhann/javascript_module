

function fun(){
    let color = document.querySelector('#input').value;
    document.body.style.backgroundColor = color
    return false;
}


//Q2 increment , decriment by 5, reset 


let v = 0

function inc(){
    
      document.querySelector('#value').innerHTML = v+=5
   
 }

 function dec(){
    if(v>0){
    document.querySelector('#value').innerHTML = v-=5
 }
     
 }

 function reset(){
  
      document.querySelector('#value').innerHTML = 0
      
 }

//q3 gulab jamun , kajukatli, malaibarfi image will print on image box


function gulab(){
    let img = document.getElementById('image')
    img.src = 's2.jpg'
    
}

function kaju(){
    let img = document.getElementById('image')
    img.src = 's3.jpg'
   
}

function malai(){
    let img = document.getElementById('image')
    img.src = 's1.jpg'
    
}