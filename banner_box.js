$(document).ready(function(){
    let interval;
    i=1;
    $("#circle_1").css({"box-shadow":"0px 0px 3px 4px black"});
    $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
    $("#circle_3").css({"box-shadow":"0px 0px 0px black"});

    interval=setInterval(function(){
        i++;
        if(i==4){
            $("#banner_box").stop();
            $("#banner_box").css({"margin-left":"0vw"}).animate({"margin-left":"-100vw"},900);
            i=0;
        }else{
            $("#banner_box").stop();
            $("#banner_box").animate({"margin-left":-(i*100)+"vw"},900);
        }
        if(i==0){
             $("#circle_1").css({"box-shadow":"0px 0px 3px 4px black"});
             $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
             $("#circle_3").css({"box-shadow":"0px 0px 0px black"});
        }
        if(i==1){
            $("#circle_1").css({"box-shadow":"0px 0px 3px 4px black"});
            $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_3").css({"box-shadow":"0px 0px 0px black"});
        }
        if(i==2){
            $("#circle_1").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_2").css({"box-shadow":"0px 0px 3px 4px black"});
            $("#circle_3").css({"box-shadow":"0px 0px 0px black"});
        }
        if(i==3){
            $("#circle_1").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_3").css({"box-shadow":"0px 0px 3px 4px black"});
        }
    },5000);
    
    $("#banner_box,#right_button,#left_button").mouseenter(function(){
        clearInterval(interval);
    });
    $("#banner_box,#right_button,#left_button").mouseleave(function(){
        interval=setInterval(function(){
            i++;
            
            if(i==4){
                $("#banner_box").stop();
                $("#banner_box").css({"margin-left":"0vw"}).animate({"margin-left":"-100vw"},900);
                i=0;
            }else{
                $("#banner_box").stop();
                $("#banner_box").animate({"margin-left":-(i*100)+"vw"},900);
            }
            if(i==0){
                $("#circle_1").css({"box-shadow":"0px 0px 3px 4px black"});
                $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
                $("#circle_3").css({"box-shadow":"0px 0px 0px black"});
            }
            if(i==1){
                $("#circle_1").css({"box-shadow":"0px 0px 3px 4px black"});
                $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
                $("#circle_3").css({"box-shadow":"0px 0px 0px black"});
            }
            if(i==2){
                $("#circle_1").css({"box-shadow":"0px 0px 0px black"});
                $("#circle_2").css({"box-shadow":"0px 0px 3px 4px black"});
                $("#circle_3").css({"box-shadow":"0px 0px 0px black"});
            }
            if(i==3){
                $("#circle_1").css({"box-shadow":"0px 0px 0px black"});
                $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
                $("#circle_3").css({"box-shadow":"0px 0px 3px 4px black"});
            }
        },5000);
        
    });

    $("#right_button").click(function(){
        i++;
        if(i==4){
            $("#banner_box").stop();
            $("#banner_box").css({"margin-left":"0vw"}).animate({"margin-left":"-100vw"},300);
            i=0;
            $("#circle_1").css({"box-shadow":"0px 0px 3px 4px black"});
            $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_3").css({"box-shadow":"0px 0px 0px black"});
        }else{
            $("#banner_box").stop();
            $("#banner_box").animate({"margin-left":-(i*100)+"vw"},300);
        }
        if(i==1){
            $("#circle_1").css({"box-shadow":"0px 0px 3px 4px black"});
            $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_3").css({"box-shadow":"0px 0px 0px black"});
        }
        if(i==2){
            $("#circle_1").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_2").css({"box-shadow":"0px 0px 3px 4px black"});
            $("#circle_3").css({"box-shadow":"0px 0px 0px black"});
        }
        if(i==3){
            $("#circle_1").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_3").css({"box-shadow":"0px 0px 3px 4px black"});
        }
    });
    $("#left_button").click(function(){
        i--;
        if(i==-1){
            $("#banner_box").stop();
            $("#banner_box").css({"margin-left":"-300vw"}).animate({"margin-left":"-200vw"},300);
            i=2;
        }else{
            $("#banner_box").stop();
            $("#banner_box").animate({"margin-left":-(i*100)+"vw"},300);
        }
        
        if(i==0){
            $("#circle_1").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_3").css({"box-shadow":"0px 0px 3px 4px black"});
        }
        if(i==1){
            $("#circle_1").css({"box-shadow":"0px 0px 3px 4px black"});
            $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_3").css({"box-shadow":"0px 0px 0px black"});
        }
        if(i==2){
            $("#circle_1").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_2").css({"box-shadow":"0px 0px 3px 4px black"});
            $("#circle_3").css({"box-shadow":"0px 0px 0px black"});
        }
        if(i==3){
            $("#circle_1").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_2").css({"box-shadow":"0px 0px 0px black"});
            $("#circle_3").css({"box-shadow":"0px 0px 3px 4px black"});
        }
    });
});


