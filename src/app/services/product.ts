export class Product{
  public imgSrc: string;
  public name: string;
  public desc: string;
  public price: number;

  constructor(imgSrc: string, name: string, desc: string, price: number) {
    this.imgSrc = imgSrc;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }


}
