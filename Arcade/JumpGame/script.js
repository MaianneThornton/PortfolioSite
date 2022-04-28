var character =
  document.getElementById("character");

var block =
  document.getElementById("block");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);  //500ms = length of animation
}

var checkDead = setInterval(function () {
  var CharacterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
  if (blockLeft < 20 && blockLeft > 0 && CharacterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("You Lose");
  }
}, 10);

