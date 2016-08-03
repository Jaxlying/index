/**
 * Created by Jaxlying on 2016/8/3.
 */
$(document).ready(function () {
    var img1 = Math.ceil(Math.random()*5);
    var img2 = Math.ceil(Math.random()*5);
    var img3 = Math.ceil(Math.random()*5);
    $("body").css({"background-image":"url(img/" + img1 + ".png),url(img/" + img2 + ".png),url(img/" + img3 + ".png)","background-repeat":"no-repeat","background-position":"right top,left top,center"})
});
