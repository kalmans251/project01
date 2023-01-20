$(document).ready(function(){
    var a=-1;
    var n;
    var m;


    if(window.innerWidth < 1300){
        m=0;
        $("header").css({"background":"linear-gradient(to bottom ,rgba(114, 196, 180, 1) 70px,rgba(114, 196, 180, 0.3) 1px)"});
        $("#logo_box").css({"position":"relative","left":($("header").innerWidth()/2)-102.5});
        $("#header_nav").hide();
        $("header").stop();
        $("header").css({"height":"70px"});
        if(a==1){
            
            if(((window.innerWidth-200) > n)){
                $("#main_wrap").stop();
                $("#mother_wrap").stop();
                $("#hidden_nav").stop();
                $("header").stop();
    
                $("#main_wrap").css({"width": "calc(100% - 200px)"},200);
                $("#mother_wrap").css({"width":"100%"},200);
                $("header").css({"width": $("#main_wrap").width()},200);
                $("body").css({"overflow":"hidden"});
            }else{
                $("#mother_wrap").stop();
                $("#main_wrap").stop();
                $("#hidden_nav").stop();

                n = n+200;
                $("#mother_wrap").css({"width":n});
                n = n-200;
                $("header").css({"width": n});
                $("#main_wrap").css({"width": n});
                $("#hidden_nav").css({"width":"200px"}); 
                $("body").css({"overflow":"hidden"});
            }
        }
        
    }else{
        m=1;
        $("header").css({"background":"linear-gradient(to bottom ,rgba(114, 196, 180, 1) 70px,rgba(114, 196, 180, 0.3) 1px)"});
        $("#logo_box").css({"position":"relative","left":"0px"});
        $("#header_nav").show();
        if(a==1){
            $("#main_wrap").stop();
            $("#mother_wrap").stop();
            $("#hidden_nav").stop();
            $("header").stop();
            
            $("#main_wrap").css({"width": "100%"},200);
            $("#mother_wrap").css({"width":"100%"},200);
            $("#hidden_nav").css({"width": "0px"},200);
            $("header").css({"width": "100%"},200);
            $("body").css({"overflow":"auto"});
            a=0;
        }else if(a==0){

        }
    }
    // if(window.innerWidth < 1300){
    //     $("#logo_box").css({"position":"relative","left":($("header").innerWidth()/2)-102.5});
    //     $("#header_nav").hide();
    // }else{
    //     $("#logo_box").css({"position":"relative","left":"0px"});
    //     $("#header_nav").show();
    // }



    $(window).resize(function(){
        if(window.innerWidth < 1300){
            m=0;
            $("header").css({"background":"linear-gradient(to bottom ,rgba(114, 196, 180, 1) 70px,rgba(114, 196, 180, 0.3) 1px)"});
            $("#logo_box").css({"position":"relative","left":($("header").innerWidth()/2)-102.5});
            $("#header_nav").hide();
            $("header").stop();
            $("header").css({"height":"70px"});
            if(a==1){
                
                if(((window.innerWidth-200) > n)){
                    $("#main_wrap").stop();
                    $("#mother_wrap").stop();
                    $("#hidden_nav").stop();
                    $("header").stop();
        
                    $("#main_wrap").css({"width": "calc(100% - 200px)"},200);
                    $("#mother_wrap").css({"width":"100%"},200);
                    $("header").css({"width": $("#main_wrap").width()},200);
                    $("body").css({"overflow":"hidden"});
                }else{
                    $("#mother_wrap").stop();
                    $("#main_wrap").stop();
                    $("#hidden_nav").stop();

                    n = n+200;
                    $("#mother_wrap").css({"width":n});
                    n = n-200;
                    $("header").css({"width": n});
                    $("#main_wrap").css({"width": n});
                    $("#hidden_nav").css({"width":"200px"}); 
                    $("body").css({"overflow":"hidden"});
                }
            }
            
        }else{
            m=1;
            $("#logo_box").css({"position":"relative","left":"0px"});
            $("#header_nav").show();
            if(a==1){
                $("#main_wrap").stop();
                $("#mother_wrap").stop();
                $("#hidden_nav").stop();
                $("header").stop();
                
                $("#main_wrap").css({"width": "100%"},200);
                $("#mother_wrap").css({"width":"100%"},200);
                $("#hidden_nav").css({"width": "0px"},200);
                $("header").css({"width": "100%"},200);
                $("body").css({"overflow":"auto"});
                a=0;
            }else if(a==0){

            }
        }
    });
    
    $("header").mouseenter(function(){
        if(m==1){
            $(this).stop();
            $(this).animate({"height":"300px"});
            $(this).css({"background":"linear-gradient(to bottom,red 70px,blue 1px)"});
        }
    });
    $("header").mouseleave(function(){
        if(m==1){
            $(this).stop();
            $(this).animate({"height":"70px"});
            $(this).css({"background":"linear-gradient(to bottom ,rgba(114, 196, 180, 1) 70px,rgba(114, 196, 180, 0.3) 1px)"});
        }
    });
    
    


    $("#hidden_nav_button").click(function(){
        if(a==1){
            $("#main_wrap").stop();
            $("#mother_wrap").stop();
            $("#hidden_nav").stop();
            $("header").stop();

            $("#main_wrap").animate({"width": "100%"},200);
            $("#mother_wrap").animate({"width":"100%"},200);
            $("#hidden_nav").animate({"width": "0px"},200);
            $("header").animate({"width": "100%"},200);
            $("body").css({"overflow":"auto"});
            a=0;
        }else{
            $("#mother_wrap").stop();
            $("#main_wrap").stop();
            $("#hidden_nav").stop();

            n = $("#main_wrap").width()+200;
            $("#mother_wrap").animate({"width":n},200);
            n = $("#main_wrap").width();
            $("header").animate({"width": n},200);
            $("#main_wrap").animate({"width": n},200);
            $("#hidden_nav").animate({"width":"200px"},200); 
            $("body").css({"overflow":"hidden"});
            a=1;
        }
    });



});