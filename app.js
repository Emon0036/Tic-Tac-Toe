let box=document.querySelectorAll("#box");
let reset = document.getElementById("reset");
let msgContainer = document.querySelector(".msgContainer");
let newgame = document.querySelector("#ngame");
let msg = document.querySelector("#msg");

let player = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

box.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(player){
            box.innerText="O";
            player = false;
        }
        else{
            box.innerText="X";
            player = true;
        }
        box.disabled=true;

        winner();
    });   
    
});

const fresh = ()=>{
    let player = true;
    enable();
    msgContainer.classList.add('hide');
};

const off = ()=> {
    for (const boxs of box) {
         boxs.disabled = true;
    }

};

const enable = ()=> {
    for (const boxs of box) {
         boxs.disabled= false;
         boxs.innerText ="";
    }

};

const showMsg = (b1)=>{

    msg.innerText=`congratulations,winner is ${b1}`;
    msgContainer.classList.remove('hide');
    off();
};


const winner= ()=>{
    for (const pattern of winPattern) {
        let b1= box[pattern[0]].innerText;
        let b2 = box[pattern[1]].innerText;
        let b3 = box[pattern[2]].innerText; 
        
        if(b1 !="" && b2 !="" && b3 != ""){
            if(b1 === b2 && b2 === b3){
                showMsg(b1);
            }
        }
    }

};


reset.addEventListener("click",fresh);
newgame.addEventListener("click",fresh);
