import  FoodItem  from "./Models/FoodItem.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  items = [new FoodItem({name: "Skittles", price: 1.50, quantity: 10, img: "https://mma.prnewswire.com/media/1635927/Mars_Wrigley__SKITTLES.jpg?p=twitter"}), new FoodItem({name: "KFC", price: 3.50, quantity: 3, img: "https://images.ctfassets.net/1nucuk3qd958/pC6Tc3rjYOZNf9b3YbF3J/b649d48d1f0ececc323a4f72a8c03500/JOHN_FRIED-CHICKEN_THUMB-1?w=660&h=744&q=60&fit=fill&fm=jpg"})]

  money = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
