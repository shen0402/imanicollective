$(document).on('click', '.quantity-icon', function(){
    var $input = $(this).closest('.product-quantity').find('input');
    var qty = $input.val();
    if($(this).hasClass('quantity-minus')) {
        if (qty > 1) {
            qty--;
        }
    } else {
        qty++;
    }
    $input.val(qty);
});

$(document).on('click', '.hamburger-icon', function(e){
    e.preventDefault();
    $('.jc-custom-header__nav').slideToggle("slow");
    $('body').toggleClass('overflow-hidden');
});

$(document).on('click', '.has-megamenu', function(e){
    e.preventDefault();
    $(this).closest('li').find('.mega-menu').slideToggle("slow");
});

$(document).ready(function(){
    var limit_blog = 7;
    var current_show_blogs = limit_blog;
    if ($('.blog-item').length > limit_blog) {
        $('.blog-button').removeClass('hide');
        $('.blog-button').click(function(){
            current_show_blogs += limit_blog;
            $('.blog-item').each(function(index){
                if (index < current_show_blogs) {
                    $(this).removeClass('hide');
                }
                if (current_show_blogs >= $('.blog-item').length) {
                    $('.blog-button').addClass('hide');
                }
            });
        });
    }
});