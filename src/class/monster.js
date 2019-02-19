import { Actor } from "./Actor.js";

class monster extends Actor {
  constructor(name, image) {
    super(name, image);
  }

  fight() {
    super.fight();
    console.log("Spicy meat");
  }
}
