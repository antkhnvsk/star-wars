import { AsyncPipe, DecimalPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { isNotUndefined } from '../utils';
import { PlanetActions, planetIdSelector, planetViewSelector } from './store';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, DecimalPipe],
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetComponent {
  planet$ = this.store.select(planetViewSelector);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(planetIdSelector)
      .pipe(filter(isNotUndefined))
      .subscribe((planetId) =>
        this.store.dispatch(PlanetActions.load({ planetId }))
      );
  }
}
