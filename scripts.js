class Tank {
    el = null;
    x = 0;
    y = 0;
    orientation = 0;
    constructor() {
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
    }

    move (x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
        this.el.style.left = `${this.x}px`;
        this.el.style.top = `${this.y}px`;
        return this.el;
      }
        setOrientation (degrees) {
          this.orientation = degrees;
          this.el.style.transform =
            `rotate (${degrees}deg)`;
          return this.el;
        }
}



const movementSpeed = 15;
const chris = new Tank();

document.addEventListener("keydown",(event) => {
  if (event.key === "ArrowUp") {
    chris.setOrientation(0);
    chris.move(0, -movementSpeed);
  } else if (event.key === "ArrowDown")
{
  chris.setOrientation(180);
  chris.move(0, movementSpeed);
} else if (event.key === "ArrowLeft")
  {
  chris.setOrientation(270);
  chris.move(-movementSpeed, 0);
} else if (event.key === "ArrowRight")
  {
  chris.setOrientation(90);
  chris.move(movementSpeed, 0);
}
                          });


