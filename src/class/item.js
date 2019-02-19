export class Item {
    enumType = {
        "Arme":1,
        "Bouclier":2,
        "Armure":3,
        "Casquette":4
    }
    constructor(name,type,image,stats) {
      this.name = name;
      this.type = type;
      this.image = image;
      this.stats = stats;
    }

}
  