export class Actor {
  constructor(name, image, life, strength) {
    this.name = name
    this.image = image
    this.life = Number(life)
    this.strength = Number(strength)
  }

  fight(target) {
    target.life = target.life - this.strength
  }
}
