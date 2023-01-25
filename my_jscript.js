$(document).ready(function(){
    var a=-1;
    var n;
    var m;
    var l=0;
    var t=0;

    $("#hidden_nav").css({"height":window.innerHeight});
    if(window.innerWidth < 1300){
        m=0;
        $("header").css({"background":"linear-gradient(to bottom ,rgba(114, 196, 180, 1) 70px,rgba(114, 196, 180, 0.3) 1px)"});
        $("#logo_box").css({"position":"relative","left":($("header").innerWidth()/2)-102.5});
        $("#header_nav").hide();
        $("header").stop();
        $("header").css({"height":"70px"});
        $("#hidden_nav_button").show();
        $("#header_right_box").hide();
        if(a==1){
            
            if(((window.innerWidth-200) > n)){
                $("#main_wrap").stop();
                $("#mother_wrap").stop();
                $("#hidden_nav").stop();
                $("header").stop();
    
                $("#main_wrap").css({"width": "calc(100% - 200px)"});
                $("#mother_wrap").css({"width":"100%"},300);
                $("header").css({"width": $("#main_wrap").width()});
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
                $("#hidden_nav").css({"width":"220px"}); 
                $("body").css({"overflow":"hidden"});
            }
        }
        
    }else{
        m=1;
        $("header").css({"background":"linear-gradient(to bottom ,rgba(114, 196, 180, 1) 70px,rgba(114, 196, 180, 0.3) 1px)"});
        $("#logo_box").css({"position":"relative","left":"0px"});
        $("#header_nav").show();
        $("#hidden_nav_button").hide();
        $("#header_right_box").show();
        if(a==1){
            $("#main_wrap").stop();
            $("#mother_wrap").stop();
            $("#hidden_nav").stop();
            $("header").stop();
            
            $("#main_wrap").css({"width": "100%"});
            $("#mother_wrap").css({"width":"100%"});
            $("#hidden_nav").css({"width": "0px"});
            $("header").css({"width": "100%"});
            $("body").css({"overflow":"auto"});
            a=0;
        }else if(a==0){

        }
    }

    $(window).resize(function(){

        if(window.innerWidth < 1300){
            $("#hidden_nav").css({"height":window.innerHeight});
            m=0;
            $("header").css({"background":"linear-gradient(to bottom ,rgba(114, 196, 180, 1) 70px,rgba(114, 196, 180, 0.3) 1px)"});
            $("#logo_box").css({"position":"relative","left":($("header").innerWidth()/2)-102.5});
            $("#header_nav").hide();
            $("header").stop();
            $("header").css({"height":"70px"});
            $("#hidden_nav_button").show();
            $("#header_right_box").hide();
            if(a==1){
                
                if(((window.innerWidth-200) > n)){
                    $("#main_wrap").stop();
                    $("#mother_wrap").stop();
                    $("#hidden_nav").stop();
                    $("header").stop();
        
                    $("#main_wrap").css({"width": "calc(100% - 200px)"});
                    $("#mother_wrap").css({"width":"100%"},200);
                    $("header").css({"width": $("#main_wrap").width()});
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
                    $("#hidden_nav").css({"width":"220px"}); 
                    $("body").css({"overflow":"hidden"});
                }
            }
            
        }else{
            m=1;
            $("#logo_box").css({"position":"relative","left":"0px"});
            $("#header_nav").show();
            $("#hidden_nav_button").hide();
            $("#header_right_box").show();
            if(a==1){
                $("#main_wrap").stop();
                $("#mother_wrap").stop();
                $("#hidden_nav").stop();
                $("header").stop();
                
                $("#main_wrap").css({"width": "100%"});
                $("#mother_wrap").css({"width":"100%"});
                $("#hidden_nav").css({"width": "0px"});
                $("header").css({"width": "100%"});
                $("body").css({"overflow":"auto"});
                a=0;
            }else if(a==0){

            }
        }
    });
    
    $("header").mouseenter(function(){
        if(m==1){
            $(this).stop();
            $(this).animate({"height":"440px"});
            $(this).css({"background":"linear-gradient(to bottom ,rgba(44, 126, 110, 1) 70px,rgba(71, 69, 69, 0.8) 1px)"});
        }
    });
    $("header").mouseleave(function(){
        if(m==1){
            $(this).stop();
            $(this).css({"height":"70px"});
            $(this).css({"background":"linear-gradient(to bottom ,rgba(114, 196, 180, 1) 70px,rgba(71, 69, 69, 0.8) 1px)"});
        }
    });
    
    $(".hidden_nav_box_clickBT").click(function(){
        $("#hidden_nav_box li").stop();
        $(this).parent().children("li").slideToggle(100);

        if($(this).text()==="V"){
            $(this).text("ㅡ");
        }else{
            $(this).text("V");
        }
    });





    $("#header_menu_table a").mouseenter(function(){
        $(this).css({"color":"white","transition-duration":"0.3s"});
    })
    $("#header_menu_table a").mouseleave(function(){
        $(this).css({"color":"black"});
    })

    $("#hidden_nav_button").click(function(){
        if(a==1){
            $("#main_wrap").stop();
            $("#mother_wrap").stop();
            $("#hidden_nav").stop();
            $("header").stop();

            $("#hidden_nav").css({"margin-top":window.pageYOffset});
            $("#main_wrap").animate({"width": "100%"},200);
            $("#mother_wrap").animate({"width":"100%"},200);
            $("#hidden_nav").animate({"width": "0px"},300);
            $("header").animate({"width": "100%"},200);
            $("body").css({"overflow-y":"visible"});
            a=0;
        }else{
            $("#mother_wrap").stop();
            $("#main_wrap").stop();
            $("#hidden_nav").stop();

            $("#hidden_nav").css({"margin-top":window.pageYOffset});
            n = $("#main_wrap").width()+200;
            $("#mother_wrap").animate({"width":n},200);
            n = $("#main_wrap").width();
            $("header").animate({"width": n},200);
            $("#main_wrap").animate({"width": n},200);
            $("#hidden_nav").animate({"width":"220px"},300); 
            $("body").css({"overflow":"hidden"});
            a=1;
        }
    });

});