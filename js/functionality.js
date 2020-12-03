$(document).ready(
    function(){
        $('.menu_category').click(function(){
            var category = $(this).attr('id');
            $('.tagsort-active').removeClass('tagsort-active');
            $(this).addClass('tagsort-active');
            if (category == 'all') {
                $('.menu-item').addClass('hide');
                setTimeout(function(){
                    $('.menu-item').removeClass('hide');
                }, 300);
            } else {
                $('.menu-item').addClass('hide');
                setTimeout(function(){
                    $('.' + category).removeClass('hide');
                }, 300);
            }
        });

        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if(scroll > 500){
                $('.navbar').addClass('scrolled');
            } else{
                $('.navbar').removeClass('scrolled');
            }
        });
});