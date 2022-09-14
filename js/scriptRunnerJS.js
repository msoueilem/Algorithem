const textField = document.getElementById("word");
if(textField)
    textField.addEventListener('input', () => {
      let word = document.getElementById("word").value;
        // console.log(word);
        let count = 0;
        for(let i of word){
          if(i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90){
            count+=2;
          }else count++;
        }
        let charachters = document.getElementById("charchters");
        charachters.innerHTML = "Number of charchters is: "+count; //+"\n\nThe word is: "+textField.value;
    });

function alerting(){
  let word = document.getElementById("word").value;
  console.log(word);
  let count = 0;
  for(let i of word){
    count++;
  }
  let charachters = document.getElementById("charchters");
  charachters.innerHTML = "Number of charchters is: "+count;
  // charachters.innerHTML = "Number of charchters is: "+word;
}

$(document).ready(function(){
  let hide = false;
//   $("p").on(
//     {
//       mouseenter:function(){
//     $(this).css("background-color", "yellow");
//   },
//   mouseleave:function(){
//     $(this).css("background-color", "cyan");
//   },
//   mousedown:function(){
//     $(this).css("background-color", "red");
//   },
//   mouseup:function(){
//     $(this).css("background-color", "grey");
//   }
// });
  $('.toggle').click(function(){
    console.log("fading...");
    $('#div1').fadeIn();
    $('#div2').fadeIn(1000);
    $('#div3').fadeIn(3000);
    $('#div4').fadeIn(5000);
  });
  $('.hide').click(function(){
    if(!hide) {
      $('p').hide(1000);
      $('hide').innerHTML = "Show";
      hide = true;
    }
    else {
      $('p').show(1000);
      $('hide').innerHTML = "Hide";
      hide = false;
    }
  });
})