let music = new Audio('music.mp3')
let change = new Audio('ting.mp3')
let gameover = new Audio('win.mp3')
let turn = "X";
let over = false;

const changeTurn = ()=>{
    return turn==="X"? "0":"X";
}
const checkWin = ()=>{
    boxText = document.getElementsByClassName('boxText')

    let wins = [
        [0,1,2,0,0,0],
        [3,4,5,0,0,10],
        [6,7,8,0,0,20],
        [0,3,6,90,9,10],
        [1,4,7,90,9,0],
        [2,5,8,90,9,-10],
        [0,4,8,45,6,7],
        [2,4,6,135,6,-7]
    ]

    wins.forEach((e)=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText===boxText[e[2]].innerText) && (boxText[e[0]].innerText!=='')){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " won"
            over= true;
            document.querySelector('#line').style.width = "29vw";
            
            
            document.querySelector('#line').style.transform = `rotate(${e[3]}deg) translate(${e[4]}vw, ${e[5]}vw)`;
            


            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "20vw"
            gameover.play();
          
        }
       
       
    })

}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            change.play();
            checkWin();
        }
        if(! over){
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;


        }
    });
});


    
    let reset = document.getElementById('reset');
    reset.addEventListener('click',()=>{
        let boxText= document.getElementsByClassName('boxText');
        Array.from(boxText).forEach((e)=>{
            e.innerHTML = '';
        })
        turn = "X";
        over = false;
        document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0"
        document.querySelector('#line').style.display = "none";
        
        
    })


   
