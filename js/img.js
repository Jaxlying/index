/**
 * Created by Jaxlying on 2016/8/3.
 */
$(document).ready(function () {
    var imgnum = 10;  //图片总个数
    var time=2000;   //间隔时间
    var img1,img2,img3,img4;
    var pox1,poy1,pox2,poy2,pox3,poy3,pox4,poy4;
    play3();
    function play3() {
        img1 = Math.ceil(Math.random()*imgnum);
        img2 = Math.ceil(Math.random()*imgnum);
        img3 = Math.ceil(Math.random()*imgnum);
        pox1=Math.random()*100,poy1=-Math.random()*400;
        pox2=Math.random()*100,poy2=-Math.random()*400;
        pox3=Math.random()*100,poy3=-Math.random()*400;
        $("body").css({"background-image":"url(img/" + img1 + ".png),url(img/" + img2 + ".png),url(img/" + img3 + ".png)","background-repeat":"no-repeat","background-position": pox1 + "%" + poy1 + "%,"+ pox2 + "%" + poy2 + "%," + pox3 + "%" + poy3 + "%"});
        setTimeout(play2,time);
    }

    function play2() {
        img1 = Math.ceil(Math.random()*imgnum);
        img2 = Math.ceil(Math.random()*imgnum);
        pox1=Math.random()*100,poy1=-Math.random()*400;
        pox2=Math.random()*100,poy2=-Math.random()*400;
        $("body").css({"background-image":"url(img/" + img1 + ".png),url(img/" + img2 + ".png)","background-repeat":"no-repeat","background-position": pox1 + "%" + poy1 + "%,"+ pox2 + "%" + poy2 + "%"});
        setTimeout(play4,time)
    }

    function play4() {
        img1 = Math.ceil(Math.random()*imgnum);
        img2 = Math.ceil(Math.random()*imgnum);
        img3 = Math.ceil(Math.random()*imgnum);
        img4 = Math.ceil(Math.random()*imgnum);
        pox1=Math.random()*100,poy1=-Math.random()*400;
        pox2=Math.random()*100,poy2=-Math.random()*400;
        pox3=Math.random()*100,poy3=-Math.random()*400;
        pox4=Math.random()*100,poy4=-Math.random()*400;
        $("body").css({"background-image":"url(img/" + img1 + ".png),url(img/" + img2 + ".png),url(img/" + img3 + ".png),url(img/" + img4 + ".png)","background-repeat":"no-repeat","background-position": pox1 + "%" + poy1 + "%,"+ pox2 + "%" + poy2 + "%," + pox3 + "%" + poy3 + "%," + pox4 + "%" + poy4 + "%"});
        setTimeout(play3,time)
    }

});
