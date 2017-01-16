$.fn.collapsable = function(){
    var that = this;

    var region = $('.collapsable-region',this);
    var hitarea = $('.collapsable-hitarea',this);

    $(hitarea).click(function(){
        $(that).toggleClass('collapsed');
    })
}