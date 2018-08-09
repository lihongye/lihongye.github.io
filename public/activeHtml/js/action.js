(function($){
    $(function(){
        $.get('./data/'+ GetQueryString("name") +'.html',function(res){
            $("#main").append(res);
            /*判断页面中的图是否加载完成*/ 
            var imgdefereds=[];
            var tempTimer = setInterval(function(){
                if($('img').length){
                    $('img').each(function(){
                        var dfd=$.Deferred();
                        $(this).bind('load',function(){
                            dfd.resolve();
                        }).bind('error',function(){
                        //图片加载错误，加入错误处理
                        dfd.resolve();
                        })
                        if(this.complete){
                            setTimeout(function(){
                                dfd.resolve();
                            },1000);
                        } 
                        imgdefereds.push(dfd);
                    })
                    $.when.apply(null,imgdefereds).done(function(){
                        $("#loading").remove();
                    });
                    clearInterval(tempTimer);
                }
            },10);
          });
    });
})(jQuery);
