setTimeout(function(){ window.location.href = 'main.html'; }, 13000);

var data = [
    {
      AboutDevTypeText: "<span>Launching Portfolio.exe...<br/>Click anywhere to skip.<br/><br/>Hello, my name is Fernando Bohorquez and I'm a software developer building towards a better world. Do you want to learn more?</span><br/><br/><span><br/> Y / N</span><br/>"
    }
  ];
  
  var allElements = document.getElementsByClassName("typeing");
  for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var devTypeText = currentElementIdContent;
  
    // type code
    var i = 0, isTag, text;
    (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 80);
    })();
  }

  document.onclick = inputChange;

  function inputChange(e) {
    window.location.href = 'main.html'
  }
  
  document.addEventListener('keydown', function(event) {
    if(event.code == 'KeyY') {
        document.querySelector('#AboutDevTypeText').innerHTML += 'Y'
        window.location.href = 'index.html'
    }
    else if(event.code == 'KeyN') {
        document.querySelector('#AboutDevTypeText').innerHTML += 'N'
    }
});

//   let bg = document.getElementById('container');
//   let count = 20
//   for (let index = 0; index < count; index++) {
//       let glitchBox = document.createElement('div')
//       glitchBox.className = 'box';
//       bg.appendChild(glitchBox)      
//   }

//   setInterval(function(){
//       let glitch = document.getElementsByClassName('box');
//       for (let i  = 0; i < glitch.length; i++){
//           glitch[i].style.left = Math.floor(Math.random()*100) + 'vw'
//           glitch[i].style.top = Math.floor(Math.random()*100) + 'vh'
//           glitch[i].style.width = Math.floor(Math.random()*100) + 'px'
//           glitch[i].style.height = Math.floor(Math.random()*100) + 'px'
//           glitch[i].style.background = Math.floor(Math.random()*50) + 'px'

//       }
//   }, 200)


  