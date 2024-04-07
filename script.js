let score=0
document.body.onkeyup=function(e){
    if(e.key.code=="Space"){
        player.classList.add("jump");
        score=score+1
        setTimeout(()=>{
            player.classList.remove("jump");
        },500)
    }
}
setInterval(()=>{
    if(experimentalSetDeliveryMetricsExportedToBigQueryEnabled.offsetLeft<100&&player.offsetTop>300){
        alert('Game Over')
    }
    score_p.innerHTML= score;
},10);