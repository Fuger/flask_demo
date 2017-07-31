
//学生详情模块 二级页面添加"<div id="studentSpeech"></div>" 即可
$(document).ready(function () {

    //学生的详情按照页面的顺序添加
    var studentSpeech = [
        {
            'name':"刘*欣",
            "school":"斯坦福大学",
            "photo_url":"",
            "results":"100",
            "speech":"二十多天的SAT训练其实对我来说也是一种生活上的历练，我相信参加过SAT补习的学生都知道SAT的难度，它并不是一朝一夕就能考出来的，而是需要你付出无限的努力，才能取得比较合理的成绩。"
        },
        {
            'name':"Abby",
            "school":"耶鲁大学",
            "results":"101",
            "speech":"Never frown, even when you are sad, because you never know who is falling in love with your smile."
        },
        {
            'name':"Aimee",
            "school":"哥伦比亚大学",
            "results":"102",
            "speech":"If we can only encounter each other rather than stay with each other,then I wish we had never encountered ."
        },
        {
            'name':"Alisa",
            "school":"斯坦福大学",
            "results":"103",
            "speech":"No man or woman is worth your tears, and the one who is, won't make you cry"
        },
        {
            'name':"Angelia",
            "school":"布朗大学",
            "results":"104",
            "speech":"I would like weeping with the smile rather than repenting with the cry,when my heart is broken ,is it needed to fix?"
        },
        {
            'name':"Cassie",
            "school":"普林斯顿大学",
            "results":"105",
            "speech":"To the world you may be one person, but to one person you may be the world."
        },
        {
            'name':"Daisy",
            "school":"芝加哥大学",
            "results":"106",
            "speech":"I am looking for the missing glass-shoes who has picked it up ."
        },
        {
            'name':"Angelia",
            "school":"麻省理工学院",
            "results":"107",
            "speech":"If you weeped for the missing sunset,you would miss all the shining stars ."
        },
        {
            'name':"Anne",
            "school":"哈佛大学",
            "results":"108",
            "speech":"When alive ,we may probably offend some people.However, we must think about whether they are deserved offended."
        },
        {
            'name':"Beata",
            "school":"宾夕法尼亚大学",
            "results":"109",
            "speech":"You will have it if it belongs to you,whereas you don't kveth for it if it doesn't appear in your life."
        },
        {
            'name':"Camille",
            "school":"杜克大学",
            "results":"110",
            "speech":"to feel the flame of dreaming and to feel the moment of dancing,when all the romance is far away,the eternity is always there.    "
        },
        {
            'name':"Carrie",
            "school":"约翰霍普金斯大学",
            "results":"111",
            "speech":"Maybe God wants us to meet a few wrong people before meeting the right one, so that when we finally meet the person, we will know how to be grateful."
        }

    ];
    //空数组主要存储学生相关的html
    var dataArray = [];
    //图片地址前缀 ps:放到项目中要修改地址
    var imageSrc = "images";
    dataArray.push(
        '<div class="toof_eight_div">' +
        '   <a onmouseover="display(1)" onmouseout="disappear()">' +
        '       <img id="selector1" src="'+imageSrc+'/toof01.png"/>' +
        '   </a>' +
        '   <a onmouseover="display(2)" onmouseout="disappear()">' +
        '       <img id="selector2" src="'+imageSrc+'/toof02.png"/>' +
        '   </a>' +
        '   <a onmouseover="display(3)" onmouseout="disappear()">' +
        '       <img id="selector3" src="'+imageSrc+'/toof03.png"/>' +
        '       <b ></b>' +
        '   </a>' +
        '</div>' +
        '<div class="toof_eight_div2">' +
        '   <a onmouseover="display(4)" onmouseout="disappear()">' +
        '       <img  id="selector4" src="'+imageSrc+'/toof04.png"/>' +
        '   </a> ' +
        '   <a onmouseover="display(5)" onmouseout="disappear()">' +
        '       <img id="selector5" src="'+imageSrc+'/toof05.png"/>' +
        '   </a>' +
        '</div>' +
        '<div class="toof_eight_div">' +
        '   <a onmouseover="display(6)" onmouseout="disappear()">' +
        '       <img id="selector6" src="'+imageSrc+'/toof06.png"/>' +
        '   </a>' +
        '   <a ><img src="'+imageSrc+'/toof07.png"/></a>' +
        '   <a onmouseover="display(7)" onmouseout="disappear()">' +
        '       <img id="selector7" src="'+imageSrc+'/toof08.png"/>' +
        '       </a>' +
        '</div>' +
        '<div class="toof_eight_div2">' +
        '   <a onmouseover="display(8)" onmouseout="disappear()">' +
        '       <img id="selector8" src="'+imageSrc+'/toof09.png"/>' +
        '   </a>' +
        '   <a onmouseover="display(9)" onmouseout="disappear()">' +
        '       <img id="selector9" src="'+imageSrc+'/toof10.png"/>' +
        '   </a>' +
        '</div>' +
        '<div class="toof_eight_div">' +
        '   <a onmouseover="display(10)" onmouseout="disappear()">' +
        '       <img  id="selector10" src="'+imageSrc+'/toof11.png"/>' +
        '   </a>' +
        '   <a onmouseover="display(11)" onmouseout="disappear()">' +
        '       <img id="selector11" src="'+imageSrc+'/toof12.png"/>' +
        '   </a> ' +
        '   <a onmouseover="display(12)" onmouseout="disappear()">' +
        '       <img id="selector12" src="'+imageSrc+'/toof13.png"/>' +
        '   </a>' +
        '</div>');

    for (var i=1;i <= studentSpeech.length;i++){
        var box = "box"+i;

        dataArray.push(
            '<div id="'+box+'" class="toof_eight_tan" style="display: none" onmouseover="display('+i+')" onmouseout="disappear()" >' +
            '   <p class="toof_eight_tan_p">'+studentSpeech[i-1].name+
            '       <a>'+studentSpeech[i-1].school+'</a>' +
            '       <span>在托福考试中获得'+studentSpeech[i-1].results+'的好成绩</span>' +
            '   </p>' +
            '   <p class="toof_eight_tan_p1">'+studentSpeech[i-1].speech+'</p>' +
            '</div>'
    );
    }
    $('#studentSpeech').html(dataArray.join(''));

});
//显示学生感言div
function display(id){
    var box = "box"+id;
    var selector = "selector"+id;
    document.getElementById(box).style.display="block";
    document.getElementById(selector).style.opacity=0.7;
}

//隐藏学生感言div
function disappear(){

    for (var i=1;i <= 12;i++){
        var box = 'box'+i;
        var selector = "selector"+i;
        document.getElementById(box).style.display="none";
        document.getElementById(selector).style.opacity=1;
    }
}

