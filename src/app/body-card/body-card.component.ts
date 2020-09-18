import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../services/product';
import { KorpaService} from '../korpa/korpa.service';


@Component({
  selector: 'app-body-card',
  templateUrl: './body-card.component.html',
  styleUrls: ['./body-card.component.scss']
})
export class BodyCardComponent implements OnInit {

  @Input() card: Product;

  constructor(private KorpaService: KorpaService) { }

  ngOnInit(): void {

  }


  addItem(card: Product) {

    this.KorpaService.addToCard(card);

  }
}
