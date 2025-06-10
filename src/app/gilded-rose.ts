export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
}

export class GildedRose {
  constructor(public items: Array<Item> = []) {}

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.name == "Aged Brie") {
        if (item.quality < 50) {
          if (item.sellIn > 0) {
            item.quality = item.quality + 1;
          }
        }
        item.sellIn = item.sellIn - 1;
        if (item.sellIn < 0) {
          item.quality = item.quality + 2;
        }
      }
      if (item.name == "+5 Dexterity Vest") {
        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
        item.sellIn = item.sellIn - 1;
        if (item.sellIn < 0 && item.quality > 0) {
          item.quality = item.quality - 1;
        }
      }
      if (item.name == "Elixir of the Mongoose") {
        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
        item.sellIn = item.sellIn - 1;
        if (item.sellIn < 0 && item.quality > 0) {
          item.quality = item.quality - 1;
        }
      }
      // if (item.name == "Sulfuras, Hand of Ragnaros") {
      //   item.quality = 80;
      // }
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
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
        item.sellIn = item.sellIn - 1;
        if ((item.sellIn = 0)) {
          item.quality = item.quality - item.quality;
        }
      }
      if (item.name == "Conjured Mana Cake") {
        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
        item.sellIn = item.sellIn - 1;
        if (item.sellIn < 0 && item.quality > 0) {
          item.quality = item.quality - 1;
        }
      }
    }
    return this.items;
  }
}
// if (item.sellIn < 0) {
//   if (item.name != "Aged Brie") {
//     if (
//       item.name != "Backstage passes to a TAFKAL80ETC concert"
//     ) {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       item.quality =
//         item.quality - item.quality;
//     }
//   }

//   if (
//     item.name != "Aged Brie" &&
//     item.name != "Backstage passes to a TAFKAL80ETC concert"
//   ) {
//     if (item.quality > 0) {
//       if (item.name != "Sulfuras, Hand of Ragnaros") {
//         item.quality = item.quality - 1;
//       }
//     }
//   } else {
//     if (item.quality < 50) {
//       item.quality = item.quality + 1;
//       if (
//         item.name == "Backstage passes to a TAFKAL80ETC concert"
//       ) {
//         if (item.sellIn < 11) {
//           if (item.quality < 50) {
//             item.quality = item.quality + 1;
//           }
//         }
//         if (item.sellIn < 6) {
//           if (item.quality < 50) {
//             item.quality = item.quality + 1;
//           }
//         }
//       }
//     }
//   }
//   if (item.name != "Sulfuras, Hand of Ragnaros") {
//     item.sellIn = item.sellIn - 1;
//   }
//   if (item.sellIn < 0) {
//     if (item.name != "Aged Brie") {
//       if (
//         item.name != "Backstage passes to a TAFKAL80ETC concert"
//       ) {
//         if (item.quality > 0) {
//           if (item.name != "Sulfuras, Hand of Ragnaros") {
//             item.quality = item.quality - 1;
//           }
//         }
//       } else {
//         item.quality =
//           item.quality - item.quality;
//       }
//     } else {
//       if (item.quality < 50) {
//         item.quality = item.quality + 1;
//       }
//     }
//   }
