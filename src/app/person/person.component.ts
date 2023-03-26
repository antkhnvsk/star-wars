import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { PlanetIdPipe } from '../planet-id-pipe';
import { isNotUndefined } from '../utils';
import { PersonActions, personIdSelector, personViewSelector } from './store';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterLink, PlanetIdPipe],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent implements OnInit {
  person$ = this.store.select(personViewSelector);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(personIdSelector)
      .pipe(filter(isNotUndefined))
      .subscribe((personId) =>
        this.store.dispatch(PersonActions.load({ personId }))
      );
  }
}
