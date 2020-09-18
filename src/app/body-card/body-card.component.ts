import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../services/product';


@Component({
  selector: 'app-body-card',
  templateUrl: './body-card.component.html',
  styleUrls: ['./body-card.component.scss']
})
export class BodyCardComponent implements OnInit {

  @Input() card: Product;

  constructor() { }

  ngOnInit(): void {

  }

}
