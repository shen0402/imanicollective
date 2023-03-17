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