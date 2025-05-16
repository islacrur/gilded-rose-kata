export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) { }
}

function updateQualityForItem(item: Item) {

  if (item.name == "Aged Brie") {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.sellIn = item.sellIn - 1;

  }
  if (item.name == "Backstage passes to a TAFKAL80ETC concert") {

    if (item.sellIn < 11 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 6) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }
}

function calculateSellig(sellIn:number, count:number): number {  
  return sellIn = sellIn + count;
}


export class GildedRose {
  constructor(public items: Array<Item> = []) { }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      const item = this.items[i];

      updateQualityForItem(item);


    }

    return this.items;
  }


  updateQualityForItemOld(item: Item) {

    //Empieza el codigo a borrar 
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (item.quality > 0) {
        if (item.name != "Sulfuras, Hand of Ragnaros") {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (
          item.name == "Backstage passes to a TAFKAL80ETC concert"
        ) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != "Aged Brie") {
        if (
          item.name != "Backstage passes to a TAFKAL80ETC concert"
        ) {
          if (item.quality > 0) {
            if (item.name != "Sulfuras, Hand of Ragnaros") {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality =
            item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
    //termina  

  }
}
