var app = document.getElementById('app');

var typewriter = new typewriter(app, {
  loop: true,
});

typewriter //
  .typeString('Hello World !') //
  .pauseFor(2500) //
  .deleteAll() //
  .start();
