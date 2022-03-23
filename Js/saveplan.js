$("#travel").click (function (){
    $("#icons").toggle();
   });
   $("#card").click (function(){
    $("#pay").toggle();
   });
   $("#pesa").click (function(){
    $("#safaricom").toggle();
   });
   
   $("button#btn").click( () => {
     alert("You card payment is currently being processed")
   })

   $("button#stk").click( () => {
    alert("An STK popup will be sent to your phone shortly")
  })