import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  images$: Observable<Set<string>>;

  constructor(private dataService: DataService) {
    this.images$ = this.dataService.getData();
  }
}
