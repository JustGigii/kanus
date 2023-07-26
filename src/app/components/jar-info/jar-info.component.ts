// import { RequestService } from './../../services/request.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { people } from 'src/app/info';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-jar-info',
  templateUrl: './jar-info.component.html',
  styleUrls: ['./jar-info.component.scss']
})
export class JarInfoComponent implements OnInit {
  person!: people;

  @Output() close = new EventEmitter();

  constructor(private requestService: RequestService) {

  }

  ngOnInit(): void {
    this.onGetPeople();
  }

  onGetPeople(): void {
    console.log("running");
    this.requestService.getPerson().subscribe(
      (response) => {
        this.person = response;
        console.log("stored person")
        console.log(response)
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
