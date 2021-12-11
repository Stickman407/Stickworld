class Tank {
  el = null;
  x = 0;
  y = 0;
  orientation = 0;
  constructor() {
    this.el = document.createElement("span");
    this.el.style.position = "absolute";
    this.el.style.transition = "0.3s linear all";
    this.el.style.background =
      "url('https://www.kindpng.com/picc/m/759-7593655_tank-commando-2-shape-commando-2-tank-sprites.png') center center / contain no-repeat";
    this.el.style.height = "60px";
    this.el.style.width = "60px";
    document.body.appendChild(this.el);
  }

  move(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
    return this.el;
  }
  setOrientation(degrees) {
    this.orientation = degrees;
    this.el.style.transform = `rotate (${degrees}deg)`;
    return this.el;
  }
}

const movementSpeed = 15;
const chris = new Tank();

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    chris.setOrientation(0);
    chris.move(0, -movementSpeed);
  } else if (event.key === "ArrowDown") {
    chris.setOrientation(180);
    chris.move(0, movementSpeed);
  } else if (event.key === "ArrowLeft") {
    chris.setOrientation(270);
    chris.move(-movementSpeed, 0);
  } else if (event.key === "ArrowRight") {
    chris.setOrientation(90);
    chris.move(movementSpeed, 0);
  }
});

class Map {
  el = null;
  tileSet = [];
  name = "My Map";
  constructor() {
    this.el = document.createElement("div");
    const editorEL = document.querySelector("#editor");
    editorEL.appendChild(this.el);
  }

  setName(name) {
    this.name = name;
  }
}
class Tile {
  el = null;
  terrain = "grass";
  terrains = ["grass", "land", "water"];
  destructible = false;

  constructor() {
    this.el = document.createElement("span");
    const editorEl = document.querySelector("#editor");
    editorEl.appendChild(this.el);

    this.el.addEventListener("click", (event) => {
      console.log(event);
      // Cycle through terrain classes on click
      const currentTerrainClass = event.target.classList[0];
      const currentIndex = this.terrains.indexOf(currentTerrainClass);
      const nextIndex =
        currentIndex + 1 >= this.terrains.length ? 0 : currentIndex + 1;
      const newTerrain = this.terrains[nextIndex];
      event.target.classList.add(newTerrain);
      event.target.classList.remove(currentTerrainClass);
    });
  }

  setTerrain(terrain) {
    this.terrain = terrain;
    this.el.classList.add(terrain);
  }
}
class Bullet {
  el = null;
  color = "yellow";

  constructor() {
    this.el = document.createElement("div");
    this.el.style.position = "absolute";
    this.el.style.height = "10px";
    this.el.style.width = "25px";
    this.el.style.background = "yellow";
    this.el.style.transition = "2s linear";
    document.body.appendChild(this.el);
  }
  setColor(color) {
    this.color = color;
    this.el.classList.add(newColor);
  }
}
new Bullet();
console.log(Bullet);
