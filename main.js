etc="";
img="";
object="";
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(600,450);
    canvas.center();
    cocossd=ml5.objectDetector('cocossd',modalok);
    document.getElementById('bla').innerHTML="status : detecting objects";
    
}
function modalok(){
    etc=true;
    console.log("All is well");
    cocossd.detect(img,gotAns);
}
function gotAns(error,result){
if(error){
    console.error(error);
}
else{
    console.log(result);   
    object=result;
    
}
}
    function draw(){
    image(img,0,0,600,450);
    if(etc !=""){
        for(a =0; a<object.length; a++){
    fill("#005ff7");
    p=floor(object[a].confidence*100);
    text(object[a].label+" "+p+"%",object[a].x,object[a].y );
    stroke("#005ff7");
    noFill();
    rect(object[a].x,object[a].y,object[a].width,object[a].height);
    document.getElementById("bla").innerHTML="status= object detected is "+object[a].label;
}
    }
    }
