import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { PaginationComponent } from 'src/app/pagination/pagination.component';
import {
  PeopleActions,
  peoplePageSelector,
  peopleViewSelector,
} from '../store/people';
import { isNotUndefined } from '../utils';

@Component({
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, RouterLink, PaginationComponent],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent implements OnInit {
  peopleView$ = this.store.select(peopleViewSelector);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(peoplePageSelector)
      .pipe(filter(isNotUndefined))
      .subscribe((page) => this.store.dispatch(PeopleActions.load({ page })));
  }
}
