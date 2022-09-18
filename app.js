let h2 = document.getElementsByTagName('h2')[0]
console.log(h2);

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')

let score = 0

btn1.addEventListener('click', ()=>{
    score--
    console.log(score);
    h2.textContent = score;

    if (score<0){
        document.body.style.backgroundColor = "red";
    }else if(score == 0){
        document.body.style.backgroundColor = "yellow";
        
    }else if(score>0){
        document.body.style.backgroundColor = "green";
        
    }
})

btn2.addEventListener('click',()=>{
    score = 0
    console.log(score);
    h2.textContent = score;
    if (score<0){
        document.body.style.backgroundColor = "red";
    }else if(score == 0){
        document.body.style.backgroundColor = "yellow";
        
    }else if(score>0){
        document.body.style.backgroundColor = "green";
        
    }
})
btn3.addEventListener('click',()=>{
    score++
    console.log(score);
    h2.textContent = score;
    if (score<0){
        document.body.style.backgroundColor = "red";
    }else if(score == 0){
        document.body.style.backgroundColor = "yellow";
        
    }else if(score>0){
        document.body.style.backgroundColor = "green";
        
    }
})