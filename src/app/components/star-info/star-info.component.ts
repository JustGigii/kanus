import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { people } from 'src/app/info';
import { RequestService } from 'src/app/services/request.service';
@Component({
  selector: 'app-star-info',
  templateUrl: './star-info.component.html',
  styleUrls: ['./star-info.component.scss']
})
export class StarInfoComponent implements OnInit {
  @Output() close = new EventEmitter();
  poeple?: people[]
  constructor(private requestService: RequestService) {

  }

  ngOnInit(): void {
    this.onGetPeople();
  }

  onGetPeople(): void {
    console.log("running");
    this.requestService.getPeople().subscribe(
      (response) => {
        this.poeple = response.filter(e=> e.type ==  "star")
        console.log("stored person")
        console.log(this.poeple)
      },
      (error: any) => {
        console.log(error)
      },
      () => {
        console.log("done getting users")
      },
    );

}
}
