
export class KorpaService{
korpa = [];

addToCard(product){
  this.korpa.push(product);
  localStorage.setItem("korpa", JSON.stringify(this.korpa));
}

getCartProducts(){
  return this.korpa;
}
}
