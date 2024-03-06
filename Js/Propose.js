var i = 0;

var txt1 =

  "Hi  Kuttiii....!  <<               Now I wan't to say something special to you. <<                So , Please read everything carefully...!                                                                           > On this special day < I want to thank you for everything. << I just want to let you know < how much I appreciate your presence in my life...!  <<                 > You are much much more than what i deserve, << you are just too good for me...! <<                           I am glad that you were born, << I am glad that i got the chance to meet you.                                                > l may not tell you this everyday, << But i am really thankful to have you << And There is a secret message for you. << Click next to See the message...";
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
  }else {
    // Create "Next" button using anchor tag
    var nextButton = document.createElement("a");
    nextButton.textContent = "Next";
    nextButton.href = "/com/Html/Pw.html"; // Set href attribute to "#" for now
    nextButton.classList.add("next-button"); // Add class to style as button
    document.getElementById("nextButtonContainer").appendChild(nextButton);
  }
  
}

