$("#travel").click (function (){
    $("#icons").toggle();
   });
   $("#card").click (function(){
    $("#pay").toggle();
   });
   $("#pesa").click (function(){
    $("#safaricom").toggle();
   });
   
   $("button#btn").click( function (e) {
       e.preventDefault();
       $("#pay").hide();
     alert("You card payment is currently being processed")
   })

   $("button#stk").click( function (e){
       e.preventDefault();
       $("#safaricom").hide();
    alert("An STK popup will be sent to your phone shortly")
  });


 $("#instl1").click( function (e) {
    e.preventDefault();
    alert("Kindly  choose  your preferred payment plan. ") 
     $("#install").hide();
    
    //  $("#card").click (function(){
    //     $("#pay").toggle();
    //    });
    //    $("#pesa").click (function(){
    //     $("#safaricom").toggle();
    //    });
 })