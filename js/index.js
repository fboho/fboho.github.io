//execution
animations();

function animations() {
  nicknameAnimation();
}

function nicknameAnimation() {
  var nicknameArr = [
    "Developer",
    "Entrepreneur",
    "Designer",
    "Engineer",
    "Activist",
  ];

  textSequence(0);
  function textSequence(i) {
    if (nicknameArr.length > i) {
      setTimeout(function () {
        document.getElementById("nickname-text").innerHTML = nicknameArr[i];
        textSequence(++i);
      }, 500); // 1 second (in milliseconds)
    } else if (nicknameArr.length == i) {
      // Loop
      textSequence(0);
    }
  }
}
