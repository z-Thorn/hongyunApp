// //无限加载
function checkImg(){
    var oCont = document.getElementsByClassName("include")[0];
    var oP = document.createElement("div");
    oP.className="variety";
    var oEm1 = document.createElement("div");
    oEm1.innerHTML="勃更第酒红";
    oEm1.className="kind1";
    var oEm2 = document.createElement("div");
    oEm2.className="red1";
    var oEm3 = document.createElement("div");
    oEm3.innerHTML="锈红";
    oEm3.className="kind2";
    var oEm4 = document.createElement("div");
    oEm4.className="red2";
    oP.appendChild(oEm1);
    oP.appendChild(oEm2);
    oP.appendChild(oEm3);
    oP.appendChild(oEm4);
    oCont.appendChild(oP);
}

 function scrollBottomTest(){
    $(".details").scroll(function(){
        var $this =$(this),
            viewH =$(this).height(),//可见高度
            contentH =$(this).get(0).scrollHeight,//内容高度
            scrollTop =$(this).scrollTop();//滚动高度
        if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容
        // if(scrollTop/(contentH -viewH)>=0.95){ //到达底部100px时,加载新内容
            // 这里加载数据..
            checkImg();
        }
    });
}


