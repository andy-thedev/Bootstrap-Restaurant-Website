$(document).ready(function(){
    $('.menu_category').click(function(){
        var category = $(this).attr('id');
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
});