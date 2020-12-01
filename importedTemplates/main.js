if($('.menu-items').length){
    var defaultFilter=$('.tagsort-active').attr('data-filter');
    var $grid=$('.menu-items').isotope({itemSelector:'.menu-item',layoutMode:'fitRows',filter:defaultFilter});
    $('.menu-tags').on('click','span',function(){
        $('.menu-tags span').removeClass('tagsort-active');
        $(this).toggleClass('tagsort-active');
        var filterValue=$(this).attr('data-filter');
        $grid.isotope({filter:filterValue});
    });
}