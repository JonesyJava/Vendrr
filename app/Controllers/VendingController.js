import { ProxyState } from "../AppState.js";
import {vendingService }from "../Services/VendingService.js"

function _draw(){
  let template = ""
  let items = ProxyState.items
  items.forEach(i=> template += i.Template)
  document.getElementById("items").innerHTML = template

}

function _drawMoney(){
  document.getElementById("currency").innerHTML = ProxyState.money.toString()

}

export default class VendingController{
  constructor(){
    console.log("vending contoller");
    console.log(ProxyState.items  )
    _draw()
    _drawMoney()
    ProxyState.on("money", _drawMoney)
    ProxyState.on("items", _draw)
    ProxyState.on("items", _drawMoney)

  }

  addMoney(){
    vendingService.addMoney()
  }

  buyItem(itemName){
    console.log(itemName);
    vendingService.buyItem(itemName)
  }
}