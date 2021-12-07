const movementSpeed = 15;
const tank = {
  el: null,
  x: 0,
  y: 0,
  orientation: 0,
  create: function() {
    this.el =
      document.createElement ("span");
    this.el.style.position =
      "absolute";
    this.el.style.transition = "0.3s linear all";
    this.el.style.background = "url('https://www.kindpng.com/picc/m/759-7593655_tank-commando-2-shape-commando-2-tank-sprites.png') center center / contain no-repeat";
  this.el.style.height = "60px";
  this.el.style.width = "60px";
  document.body.appendChild(this.el);
   return this.el;
},
move: function(x,y) {
  this.x = this.x + x;
  this.y = this.y + y;
  this.el.style.left = `${this.x}px`;
  this.el.style.top = `${this.y}px`;
  return this.el;
},
  setOrientation: function(degrees) {
    this.orientation = degrees;
    this.el.style.transform =
      `rotate (${degrees}deg)`;
    return this.el;
  }
};
document.addEventListener("keydown",(event) => {
  if (event.key === "ArrowUp") {
    tank.setOrientation(0);
    tank.move(0, -
movementSpeed);
  } else if (event.key === "ArrowDown")
{
  tank.setOrientation(180);
  tank.move(0, movementSpeed);
} else if (event.key === "ArrowLeft")
  {
  tank.setOrientation(270);
  tank.move(-movementSpeed, 0);
} else if (event.key === "ArrowRight")
  {
  tank.setOrientation(90);
  tank.move(movementSpeed, 0);
}
                          });
const chris = tank.create();

