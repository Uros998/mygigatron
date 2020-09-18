import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {KorpaService} from '../korpa/korpa.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private korpaService: KorpaService) { }

  ngOnInit(): void {
  }

}
