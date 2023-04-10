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
    $(this).toggleClass('open');
    $('.jc-custom-header__nav').toggleClass("active");
    $('body').toggleClass('overflow-hidden');
});

$(document).on('click', '.has-megamenu', function(e){
    e.preventDefault();
    $(this).closest('li').find('.mega-menu').slideToggle("slow");
});

$(document).on('click', '.product-accordion__header', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle();
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

var scrollPos = $(document).scrollTop();

$(window).scroll(function(){
    var curentPos = $(document).scrollTop();
    if (curentPos > 40) {
        $('.jc-custom-header').addClass('statick-header');
    } else {
        $('.jc-custom-header').removeClass('statick-header');
    }

    if (curentPos > 500) {
        if (curentPos > scrollPos) {
            $('.jc-custom-header').addClass('has-scrolled');
        } else {
            $('.jc-custom-header').removeClass('has-scrolled');
        }
        $('.jc-custom-header').removeClass('not-animation');
    } else {
        $('.jc-custom-header').removeClass('has-scrolled');
        $('.jc-custom-header').addClass('not-animation');
    }
    scrollPos = curentPos;
});