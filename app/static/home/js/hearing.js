(function(window,$){
    $(function(){
        var  index = 1,
        len = $('#heargin_ping li').size(),
        wid = $('#heargin_ping li:first').outerWidth(true),
        step = 1,
        stepWidth = wid * step,
        timer,
        str ='',
        li =$('#heargin_ping li');
        // 初始化数组按钮
        $('#heargin_ping li:first').show()

        //自动播放，鼠标滑过停止鼠标滑离继续播放
        $('.heargin_cen').hover(function(){
            clearInterval( timer );
        },function(){
            timer = setInterval(function(){
                play( index+1 );
            },3500);
        }).mouseleave();
        //通过按钮选图

        //点击右按钮图往左(下一页)
        $('#heargin_you img').bind('click',function(){
            play(index+1)
        });
        //点击左按钮图往右(上一页)

        $('#heargin_zuo img').bind('click',function(){
            play(index-1)
        });

        //动画函数
        function play( nums ){
            if(!$('#heargin_ping li').is(':animated')){
                if( nums > len){
                    nums = 1;
                }else if(nums <= 0){
                    nums = len;
                }
                index = nums;
                $('#heargin_ping li').eq( index -1 ).fadeIn().siblings().fadeOut();
            }
        }
    })
})(window,jQuery)