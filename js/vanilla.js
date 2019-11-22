
var emailArr = ['spiderman@soopersticky.com','drstrange@soopermagic.com','hulk@sooperlabs.com' , 'loki@sooperenemy.com'];

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
}


$(document).ready(function(){
    
    for(i=0; i < emailArr.length;i++){
        var newdata = "<tr><td class='text-center'><input type='checkbox' class='checkme' /></td><td>"+ emailArr[i] + "</td><td class='text-center'><i class='fa fa-trash delete'></i></td></tr>";
                $('#myemaildata').append(newdata);
    }
   
    $('#addemailtotab').click(function(){
        var email = $('#emailaddress').val();
            if( !validateEmail(email)) { 
                alert('Enter Valid Email ID')
            }
            else{
                
               
            //    alert(emailArr);
                if(emailArr.indexOf(email) >=0){
                    alert('Email already added');
                    $('#emailaddress').val('')
                    return;
                }
                else{
                    emailArr.push(email);
                    var newdata = "<tr><td class='text-center'><input type='checkbox' class='checkme' /></td><td>"+ email + "</td><td class='text-center'><i class='fa fa-trash delete'></i></td></tr>";
                    $('#myemaildata').append(newdata);
                    $('#emailaddress').val('')
                } 
            }
 
    });
    $('#enableme').click(function(){
        if($(this).prop("checked") == true){
            $('.checkme:checkbox:not(:checked)').parents('tr').css('display','none');
        }
        else if($(this).prop("checked") == false){
            $('.checkme:checkbox:not(:checked)').parent('tr').css('display','block');
        }
    });
    
    $('.mytable').on('click','.delete', function() {
        emailArr.pop(this);
        $(this).parents('tr').remove(); 
    });
    $("#searchme").on("click", function() {
        var value = $('.search').val().toLowerCase();
        $("#myemaildata tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
      $(".search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myemaildata tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

      

});

