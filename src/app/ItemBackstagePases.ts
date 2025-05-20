import { Item } from "./gilded-rose";


export class ItemBackstagePases extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality); // llama al constructor de Item
  }

  updateQualityForItem() {
    let sellingCurrent = this.sellIn;
    if (sellingCurrent - 1 < 0) {
      this.quality = 0;
    }
    else {
      if (this.quality < 50) {
        this.quality++;
      }
      if (this.sellIn < 11 && this.quality < 50) {
        this.quality++;
      }
      if (this.sellIn < 6 && this.quality < 50) {
        this.quality++;
      }
      this.quality = this.quality;
    }
    this.sellIn--;
  }
}
