var isloading = false;
    function getViewportSize(w){
        //使用指定的窗口，如果不带参数则使用当前窗口
        w=w||window;
        //除了IE8及更早的版本以外，其他浏览器都能用
        if(w.innerWidth!=null)return{w:w.innerWidth,h:w.innerHeight};
        //对标准模式下的IE（或任意浏览器）
        var d=w.document;
        if(document.compatMode=="CSS1Compat")
            return{w:d.documentElement.clientWidth,
                h:d.documentElement.clientHeight};
        //对怪异模式下的浏览器
        return{w:d.body.clientWidth,h:d.body.clientHeight};
    }

    //检测滚动条是否滚动到页面底部
    function isScrollToPageBottom(){
        //文档高度
        var documentHeight=document.documentElement.offsetHeight;
        var viewPortHeight=getViewportSize().h;
        var scrollHeight=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
        return documentHeight-viewPortHeight-scrollHeight<20;
    }

    //页面滚到底部的时候加载新的图片
    function watchScroll(){
        if(!isScrollToPageBottom()){
            setTimeout(arguments.callee,900);
            return;
        }else{
            getMore();
        }
    }

    function getMore(){
        var oUl=$(".commodity").clone();
        $(".include").append(oUl);
        console.log($(".include"));
        isScrollToPageBottom();
        watchScroll();
    }
   

