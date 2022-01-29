function attachEvents() {
    $('.button').click(function(){
        $('.button.selected').not(this).removeClass('selected');
        $(this).toggleClass('selected');
    });
}
   