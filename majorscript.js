//script//
let output=document.getElementById("output");
output.innerHTML="<p>";
function draw(){
let sketch=document.getElementById("sketch");
let tool=sketch.getContext("2d");
tool.fillStyle="#808000";
tool.fillRect(0,0,700,200);
tool.shadowOffsetX=5;
tool.shadowOffsetY=5;
tool.shadowBlur=3;
tool.shadowColor="#000";
tool.strokeStyle="#c0c0c0";
tool.font="40px san serif";
tool.strokeText("Maduagwu Chukwuemeka Francis !", 60, 100);
}
function selector(){
    let sele=document.getElementById("sele");
    for(i=0;i<sele.length;i++){
        let select=sele[i];
        if(select.selected===true){
            output.innerHTML+="This is my country";
            output.innerHTML+=select.value;
            output.innerHTML+="of choice<p>";
            //console.log(select.value);//
        }
    }
}