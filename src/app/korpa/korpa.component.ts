import { Component, OnInit } from '@angular/core';
import { KorpaService } from './korpa.service';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.scss']
})
export class KorpaComponent implements OnInit {
items;


  constructor(private korpaService: KorpaService) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem("korpa"));
  }

}
