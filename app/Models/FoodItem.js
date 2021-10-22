export default class FoodItem{
  constructor(data){
  this.name = data.name,
  this.price= data.price,
  this.quantity = data.quantity,
  this.img = data.img
  }

// NOTE button below is a conditional ternary for disabling the button if the quantity is Zero
// NOTE the empty " " is just for nothing to be applied 
  get Template(){
    return /*html*/`
    <div class="card col-3">
        <h4 class="card-title">${this.name} x ${this.quantity}</h4>
        <p class="card-text">$${this.price}0</p>
        <img src="${this.img}" class="img-fluid my-3" alt="">
        <button class="btn btn-success foodButton my-3 ${this.price > 2 ? 'text-light' : 'text-danger'}" ${this.quantity > 0 ? " ": 'btn-dark'} onclick="app.vendingController.buyItem('${this.name}')">Buy now</button>
      </div>
    </div>
    
    `
  }
}