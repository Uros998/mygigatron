import {Injectable} from '@angular/core';
import {Product} from './product';

@Injectable()
export class ProductServices{

  private products: Product[] = [
    new Product(
      'https://www.zastavki.com/pictures/640x480/2019Computers_ASUS_Zenbook_S13_Ultrathin_Frameless_Notebook_on_a_white_background__CES_2019_131348_29.jpg',
      'ASUS Zenbook S13',
      'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. ',
      12000
    ),
    new Product(
      'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/81HPCJ42uJL._AC_SL1500_.jpg',
      'Asus ProArt  15',
      'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. ',
      14000
    ),
    new Product(
      'https://www.zastavki.com/pictures/originals/2019Computers_Gaming_laptop_Dell_G5_15_on_a_white_background_131268_.jpg',
      ' Gaming laptop Dell G5 15',
      'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. ',
      14000
    ),
    new Product(
      'https://www.notebookcheck.net/fileadmin/Notebooks/Huawei/MateBook_13_2020_i5/20200506_171542.jpg',
      'Huawei MateBook 13 ',
      'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. ',
      14000
    ),
    new Product(
      'https://images-na.ssl-images-amazon.com/images/I/81Ctda1P19L._AC_SL1500_.jpg',
      ' Huawei MateBook X ',
      'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. ',
      14000
    ),
    new Product(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkomPmvzxlJC5OmphG6xavS6U4BkBcg-v7cA&usqp=CAU',
      'Huawei Matebook 2-in-1 ',
      'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. ',
      14000
    ),
    new Product(
      'data:image/jpeg;base64,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',
      ' ASUS  StudioBook S',
      'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. ',
      14000
    ),
    new Product(
      'https://images-na.ssl-images-amazon.com/images/I/41KamvNRwTL._AC_SX466_.jpg',
      ' Lenovo ThinkPad P53',
      'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. ',
      14000
    ),
    new Product(
      'https://images-na.ssl-images-amazon.com/images/I/817THVCE5gL._AC_SL1500_.jpg',
      ' MSI WE62  15.6"',
      'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. ',
      24000
    ),
    new Product(
      'https://www.notebookcheck-cn.com/uploads/tx_nbc2/0_mbp15_4_3.jpg',
      'Apple MacBook Pro 15 ',
      'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. ',
      12999
    ),
  ];
  getProducts(){
    return this.products;
  }
}


