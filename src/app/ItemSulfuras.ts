import { Item } from "./gilded-rose";


export class ItemSulfuras extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality); // llama al constructor de Item
  }

  updateQualityForItem() {
    if (this.quality < 50) {
      this.quality++;
    }
  }
}
