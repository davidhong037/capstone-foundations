$( document ).ready(function() {
    console.log( "ready!" );

  var amt = 100;

  function attack(event){
    $('.hit').on('click', function(){
      amt = amt - 10;
      $('.healthBarValue').css('width', amt + '%' )
      if(amt < 0){
        alert('You have slain The Butcher!')
      }
    });
    
    
  }

  attack();
  
  function fullHealth(event){
    $('.reset').on('click', function(){  
      amt = 100;
      $('.healthBarValue').css('width', '100%');
    })
  }
  
  fullHealth();
});

