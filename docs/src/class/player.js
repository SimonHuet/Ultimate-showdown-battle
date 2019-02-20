import { Actor } from './Actor.js'

class player extends Actor {
  constructor(name, image, life, strength) {
    super(name, image, life, strength)
  }

  fight() {
    super.fight()
  }
}
