
 function initializeTable()
 {
    drawButton();  
    $('#createLink').click(function(){
        var inputCountry = $('#newCountryText').val();
        var inputCapital = $('#newCapitalText').val();
        var $trNew=$('<tr>'+
                    '<td>' + inputCountry +'</td>' +
                    '<td>' + inputCapital +'</td>' +
                    '<td></td></tr>');
        $('#countriesTable').append($trNew);
        drawButton();        
    });

    /*
    $("#countriesTable").on('click','#deleteRow',function(){ 
        $(this).closest('tr').remove();
        drawButton();  
    });
    */
    $("#countriesTable").on('click','#deleteRow',function(){ 
        
        $(this).parent().parent().parent().remove();
        drawButton();        
    });

    $("#countriesTable").on('click','#moveUp',function(){ 
        $(this).closest('tr').prev().before($(this).closest('tr'));
        drawButton(); 
    });

    $("#countriesTable").on('click','#moveDown',function(){ 
        $(this).closest('tr').next().after($(this).closest('tr'));
        drawButton(); 
    });

    function drawButton()
    {
        var rowCounter = $('#countriesTable tr').length;
        if (rowCounter == 3){
            $('#countriesTable tr:nth-child(3)').find("td:eq(2)").html(
                    '<td><a href="#" id="deleteRow">[Delete]</a></td>'
            );  
        }
        else if(rowCounter == 4){
            $('#countriesTable tr:nth-child(3)').find("td:eq(2)").html(
                '<td><a href="#" id="moveDown">[Down]</a><a href="#" id="deleteRow">[Delete]</a></td>'
            );
            $('#countriesTable tr:nth-child(4)').find("td:eq(2)").html(
                '<td><a href="#" id="moveUp">[Up]</a><a href="#" id="deleteRow">[Delete]</a></td>'
            );
        }
        else if(rowCounter > 4){
            for(var i = 3; i <= rowCounter; i++)
            {
                if(i == 3)
                {
                    $('#countriesTable tr:nth-child(' + i +')').find("td:eq(2)").html(
                        '<td><a href="#" id="moveDown">[Down]</a><a href="#" id="deleteRow">[Delete]</a></td>'
                    );
                }else if (i == rowCounter){
                    $('#countriesTable tr:nth-child(' + i +')').find("td:eq(2)").html(
                        '<td><a href="#" id="moveUp">[Up]</a><a href="#" id="deleteRow">[Delete]</a></td>'
                    );
                }else{
                    $('#countriesTable tr:nth-child(' + i +')').find("td:eq(2)").html(
                        '<td><a href="#" id="moveUp">[Up]</a><a href="#" id="moveDown">[Down]</a><a href="#" id="deleteRow">[Delete]</a></td>'
                    );
                }
            }
        }
    }    
}  



     /*let data = {
         "index": 0,
         "add": function(obj) {
             if(this.index == 1) {
                 str = '<a href=" " class="btnUp">[Up]</a> <a href="javascript:void(0);" class="btnDown">[Down]</a> <a href="javascript:void(0);" class="btnDel">[Delete]</a>';
             } else {
                 str = '<a href="javascript:void(0);" class="btnUp">[Up]</a> <a href="javascript:void(0);" class="btnDown">[Down]</a> <a href="javascript:void(0);" class="btnDel">[Delete]</a>';
             }
             node = '<tr id="'+this.index+'"><td>'+obj.country+'</td><td>'+obj.capital+'</td><td>'+str+'</td></tr>';
             $("#countriesTable").append(node);
             this.index ++;
         },
         "delete": function(obj) {
             obj.parent().parent().remove();
             this.index --;
             $("#countriesTable tbody tr:gt(1)").each(function(i,tr) {
                 $(this).attr('id',i);
             });
         },
         "up": function(obj) {
             let clone = obj.parent().parent().clone();
             $("#countriesTable tbody tr").each(function(i,tr) {
                 if( $(this).attr('id') == obj.parent().parent().attr('id') ) {
                     if(i > 2) {
                         $("#countriesTable tbody tr:eq("+(i-1)+")").before(clone);
                         obj.parent().parent().remove();
                     } else {
                         alert("It is already the first line.");
                     }
                 }
             });
         },
         "down": function(obj) {
             let clone = obj.parent().parent().clone();
             let max = $("#countriesTable tbody tr").length;
             $("#countriesTable tbody tr").each(function(i,tr) {
                 if( $(this).attr('id') == obj.parent().parent().attr('id') ) {
                     if(i < max - 1) {
                         $("#countriesTable tbody tr:eq("+(i+1)+")").after(clone);
                         obj.parent().parent().remove();
                     } else {
                         alert("It is already the last line.");
                     }
                 }
             });
         }
         
     };
 
     data.add({"country":"Sweden","capital":"Stockholm"});
     data.add({"country":"Japen","capital":"Tokyo"});
     data.add({"country":"Genmay","capital":"Berlin"});
 
     $("#createLink").click(function(){
         let country = $("#newCountryText").val();
         if( country.trim() == '') {
             alert("Country is empty");
             return false;
         } 
         let capital = $("#newCapitalText").val();
         if( capital.trim() == '') {
             alert("Capital is empty");
             return false;
         }
         $("#newCapitalText").val("");
         $("#newCountryText").val("");
         data.add({"country": country, "capital":capital});
     });
 
     $("#countriesTable").on('click','.btnDel',function(){ 
         return data.delete($(this));
     });
 
     $("#countriesTable").on('click','.btnUp',function(){ 
         return data.up($(this));
     });
 
     $("#countriesTable").on('click','.btnDown',function(){ 
         return data.down($(this));
     });
     */
