import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { SwapiService } from '../api';
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
    private swapiService: SwapiService,
    private ativatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.page$ = this.ativatedRoute.params.pipe(
      map((params) => +params['page'])
    );

    this.peopleResults$ = this.page$.pipe(
      switchMap((page) => this.swapiService.getPeople(page))
    );
  }
}
