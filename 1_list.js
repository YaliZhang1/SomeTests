function extractText(){
    

    $('#items li').each(function()
    {
       var $li=$(this);                
       $('#result').append($li.text() + " ");
    });

    $('button').css('background-color','yellow');

}




