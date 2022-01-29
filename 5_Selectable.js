



    function attachEvents(){   
        $('#items li').each(function(){           
            $('#items li').click(function(){      
            $(this).toggleClass('turngray');} )
        });

        $('#showTownsButton').click(function(){
            var text = [];
            $('#items li').each(function(){
                if($(this).hasClass('turngray')) 
                {
                    text.push($(this).text());
                } 
            });
            $('#selectedTowns').text("Selected Towns: " + text.join(', '));
        });
    }
