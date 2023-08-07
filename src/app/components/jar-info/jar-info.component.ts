// import { RequestService } from './../../services/request.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AccountInfo } from '@azure/msal-browser';
import { people } from 'src/app/info';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-jar-info',
  templateUrl: './jar-info.component.html',
  styleUrls: ['./jar-info.component.scss']
})
export class JarInfoComponent implements OnInit {
  people: people[] =[];
  person? : people;
  isadd: boolean = false
  @Input() user!: AccountInfo;

  @Output() close = new EventEmitter();

  constructor(private requestService: RequestService) {

  }

  ngOnInit(): void {
    this.onGetPeople();
  }
  chanechoose(item:people):void
  {
    this.person = item
  }
  onGetPeople(): void {
    console.log("running")
 
    this.requestService.getPeople().subscribe(
      (response) => {
       
        this.people = response.filter(e=> e.type == "jar");
        console.log("stored person")
        console.log(this.people)
      },
      (error: any) => {
        console.log(error)
      },
      () => {
        console.log("done getting users")
      },
    );

  }

  addcoint()
  {
    this.isadd = true
    if (this.person == undefined) return
    if(this.user.username == this.person.mail || this.user.username == "211881396@idf.il" )
    {
    this.requestService.addcoin(this.person.id).subscribe(
      (response) => {

        this.person = response
      },
      (error: any) => {
      },
      () => {
        this.isadd =false
      },
    )
  }
  else
  {
    alert("אתה לא יוכל להוסיף לבן אדם שלא אתה")
  }
}

}
