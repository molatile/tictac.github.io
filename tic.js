let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg1=document.querySelector("#msg1");
let msg=document.querySelector("#msg");
let turn=true;
const win=[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[6,4,2],[1,4,7],[2,5,8]];
let count=0;
let check=()=>{
    for(let indx of win){
        let p1=boxes[indx[0]].innerText;
        let p2=boxes[indx[1]].innerText;
        let p3=boxes[indx[2]].innerText;
        if(p1 !="" && p2 !="" &&p3 !=""){
            if(p1===p2 && p2===p3){
                display(p1);
                console.log("winner")
                for(let i of boxes){
                    i.disabled=true;
                }
            }
    }
}
};

let draw=()=>{
    if (count >=9){
        msg.innerText="DRAW 'RESET'";
        msg1.classList.remove("hide");

    }
}

reset.addEventListener('click',()=>{
    turn=true;
    for(let able of boxes){
        able.disabled=false;
        able.innerText="";
    }
    msg1.classList.add("hide");
    count=0;
    msg.innerText="TIC TAC";

});

let display=(winner)=>{
    msg.innerText=`${winner} WON`
    msg1.classList.remove("hide");

}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if (turn==true){
            box.innerText="O";
            turn=false;
            box.disabled=true;
        }else{
            box.innerText="X";
            turn=true;
            box.disabled=true;
        }
        count++;
        draw();
        check();
    });
});