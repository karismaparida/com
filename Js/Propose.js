var i = 0;

var txt1 =

  "Hi  Kuttiii....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > On this special day < I want to thank you for everything. << I just want to let you know < how much I appreciate your presence in my life...!  <<                 > You are much much more than what i deserve, << you are just too good for me...! <<                           I am glad that you were born, << I am glad that i got the chance to meet you.                                               > I want you to know that you are a true gem.                     << That you deserve all the happiness in this world. <<  I wish from all my heart << that you get everything that you have ever dreamed of...!                                                  > You are perfect, << but seriously, never be afraid << To talk about your problems.                     << When you feel sad, you can come to me.                  > I'll always be here to listen << Even when you don't have the words to say...!               << Don't be afraid < you won't overshare or annoy me << I will always listen to you and try to help you...! > l may not tell you this everyday, << But i am really thankful to have you << And once again << Happy Birthday, My Princess👸 ...!";
  var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

