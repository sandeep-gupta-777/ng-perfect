import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../projects/http/src/lib/http.service';

@Component({
  selector: 'ngp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-perfect';

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.makeGetReq('https://jsonplaceholder.typicode.com/posts')
      .subscribe((val) => {
        console.log(val);
      });
  }
}
