$(document).ready(function(){

    var x;

    if(window.innerWidth < 1900){
        x = window.innerWidth-1600;
        $("#left_sticky").css({"width":x});
        $("#right_sticky").animate({"width":x});
    }else{
        x=1;
        $("#left_sticky").animate({"width":"300px"});
        $("#right_sticky").animate({"width":"300px"});
    }

    $(window).resize(function(){
        x = window.innerWidth*0.5-630;
        if(window.innerWidth < 1900){
            $("#left_sticky").css({"width":x});
            $("#right_sticky").css({"width":x});
        }else{
            $("#left_sticky").css({"width":"300px"});
            $("#right_sticky").css({"width":"300px"});
        }
    });

    if(window.innerWidth < 860){
        $(".main_num1_box").css({"width":"600px","height":"1436px"});
        $(".main_num1_box > div").css({"width":"50%"});
    }else if(window.innerWidth < 1160){
        $(".main_num1_box").css({"width":"900px","height":"1150px"});
        $(".main_num1_box > div").css({"width":"33.33%"});
    }else{
        $(".main_num1_box").css({"width":"1200px","height":"870px"});
        $(".main_num1_box > div").css({"width":"25%"});
    }
    $(window).resize(function(){
        if(window.innerWidth < 860){
            $(".main_num1_box").css({"width":"600px","height":"1436px"});
            $(".main_num1_box > div").css({"width":"50%"});
        }else if(window.innerWidth < 1160){
            $(".main_num1_box").css({"width":"900px","height":"1150px"});
            $(".main_num1_box > div").css({"width":"33.33%"});
        }else{
            $(".main_num1_box").css({"width":"1200px","height":"870px"});
            $(".main_num1_box > div").css({"width":"25%"});
        }
    });
});