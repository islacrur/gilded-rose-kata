import { Item } from "./gilded-rose";


export class ItemBrie extends Item {

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality); // llama al constructor de Item
  }

  updateQualityForItem() {

    let qualityIncrease = 0;

    let qualityCurrent = this.quality;

    this.sellIn--;

    qualityIncrease = (this.sellIn < 0) ? 2 : 1;

    if (qualityCurrent < 50) {
      this.quality = qualityCurrent + qualityIncrease;
    }
  }
}
