export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) { }
}

function updateQualityForItemOld(item: Item) {

  //Empieza el codigo a borrar 
  if (item.name != "Aged Brie" && item.name != "Backstage passes to a TAFKAL80ETC concert"
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

const AGED_BRIE = "Aged Brie";
const SULFURAS = "Sulfuras, Hand of Ragnaros";
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
const CAKE = "Conjured Mana Cake";
const ELIXIR_MONGOODR = "Elixir of the Mongoose";
const DEXTERY_VEST = "+5 Dexterity Vest";

function updateQualityForItem(item: Item) {

  let qualityIncrease = 0;

  let qualityCurrent = item.quality;

  let sellingCurrent = item.sellIn;

  let productName = item.name;

  if (productName == AGED_BRIE) {

    item.sellIn--;

    qualityIncrease = (item.sellIn < 0) ? 2 : 1;

    if (qualityCurrent < 50) {
      item.quality = qualityCurrent + qualityIncrease;
    }
  }

  if (productName == BACKSTAGE_PASSES) {

    if (sellingCurrent - 1 < 0) {
      item.quality = 0;
    }
    else {
      if (qualityCurrent < 50) {
        qualityCurrent++;
      }
      if (item.sellIn < 11 && qualityCurrent < 50) {
        qualityCurrent++;
      }
      if (item.sellIn < 6 && qualityCurrent < 50) {
        qualityCurrent++;
      }
      item.quality = qualityCurrent;
    }
    item.sellIn--;
  }

  if (item.name == SULFURAS) {
    if (qualityCurrent < 50) {
      item.quality = qualityCurrent + 1;
    }
  }

  if (item.name == CAKE || item.name == ELIXIR_MONGOODR || item.name == DEXTERY_VEST) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      if (item.quality > 0) {
        item.quality = item.quality - 1;
      }
    }

  }
}

function calculateSellig(sellIn: number, count: number): number {
  return sellIn = sellIn + count;
}

function calculateQuality(quality: number, qualityIncrease: number): number {
  let qualityNew = quality;
  // if(quality < 50){
  qualityNew = qualityNew + qualityIncrease;
  // }  
  return qualityNew;
}


export class GildedRose {
  constructor(public items: Array<Item> = []) { }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      const item = this.items[i];

      updateQualityForItem(item);
      //updateQualityForItemOld(item);
    }

    return this.items;
  }

}
