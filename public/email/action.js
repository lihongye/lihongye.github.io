(function($){
    $(function(){
        $.get('./data/'+ GetQueryString("name") +'.html',function(res){
            $("#main").append(res);
          });
    });
})(jQuery);
