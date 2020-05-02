import { Component, OnInit } from '@angular/core';
import { single } from '../data';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  single: any[];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';

  ngOnInit(): void {
  }

  constructor() {
    Object.assign(this, { single });
  }
}
