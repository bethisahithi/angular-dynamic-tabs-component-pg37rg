import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { PeopleService } from './people/people.service';
import { IPeople } from './people/models';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular tabs</h1>
    <ngx-tabs>
      <ngx-tab tabTitle="People List">
        <app-people-list [people]="people"></app-people-list>
      </ngx-tab>
      <ngx-tab tabTitle="Tab 2"
        [template]="personEdit"
        [dataContext]="people[0]">
        Tab 2 Content
      </ngx-tab>
    </ngx-tabs>

    <ng-template #personEdit let-person="data">
      Hi, I am {{ person?.name }}
    </ng-template>

  `
})
export class AppComponent implements OnInit, AfterViewInit {
  people: IPeople[];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((data: IPeople[]) => {
      this.people = data;
    });
  }

  ngAfterViewInit(): void {
    console.log(this.personEditTemplate);
  }
}