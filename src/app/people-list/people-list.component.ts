import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { PeopleResults } from '../models';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, RouterLink, PaginationComponent],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent implements OnInit {
  peopleResults$!: Observable<PeopleResults>;
  page$!: Observable<number>;

  constructor(
    private httpClient: HttpClient,
    private ativatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.page$ = this.ativatedRoute.params.pipe(
      map((params) => +params['page'])
    );

    this.peopleResults$ = this.page$.pipe(
      switchMap((page) =>
        this.httpClient.get<PeopleResults>(
          'https://www.swapi.tech/api/people',
          { params: { page, limit: 10 } }
        )
      )
    );
  }
}
