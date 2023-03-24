import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { PeopleResults } from '../models';

@Component({
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, RouterLink],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent implements OnInit {
  peopleResults$!: Observable<PeopleResults>;

  constructor(
    private httpClient: HttpClient,
    private ativatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.peopleResults$ = this.ativatedRoute.params.pipe(
      switchMap((params) =>
        this.httpClient.get<PeopleResults>(
          'https://www.swapi.tech/api/people',
          {
            params: { page: params['page'], limit: 10 },
          }
        )
      )
    );
  }
}
