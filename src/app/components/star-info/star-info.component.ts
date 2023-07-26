import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-info',
  templateUrl: './star-info.component.html',
  styleUrls: ['./star-info.component.scss']
})
export class StarInfoComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
