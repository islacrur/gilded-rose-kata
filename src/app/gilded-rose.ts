export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) { }

  updateQualityForItem() {

    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }
    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      if (this.quality > 0) {
        this.quality = this.quality - 1;
      }
    }
  }

}

export class GildedRose {
  
  constructor(public items: Array<Item> = []) { }

  updateQuality() {
    this.items.forEach(item => item.updateQualityForItem());
    return this.items;
  }

}


