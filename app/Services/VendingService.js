import { ProxyState } from "../AppState.js";

 class VendingService{
  buyItem(itemName) {
    let item = ProxyState.items.find(i=>i.name == itemName)
    let money = ProxyState.money

    if(item.price <= money && item.quantity > 0){
      money -= item.price
      item.quantity--
      
      ProxyState.money = money
      let index = ProxyState.items.findIndex(i=> i.name == itemName)
      ProxyState.items[index] = item
      // ProxyState.items.splice(index,1,item)
      ProxyState.items = ProxyState.items
      console.log(item);
    }else{
      window.alert("purchase failed")
    }
  }
  addMoney() {
   let money = ProxyState.money
   money += 1
   ProxyState.money = money
  }
  constructor(){
    console.log("vending service");
  }
}

export const vendingService = new VendingService()