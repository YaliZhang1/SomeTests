function search(){
    
    var num = 0;
    $('#towns li').each(function(){
       var $li = $(this);       
       if ($li.text().indexOf($('#searchText').val()) >= 0 && $('#searchText').val() != "") 
       {   
            $li.css('font-weight','bold');
            num++;
       }else
       {
        $li.css('font-weight','normal');
       }
    });

    $('#result').text(num + " matches found.");
}
