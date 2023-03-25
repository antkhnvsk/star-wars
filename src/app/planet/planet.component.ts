import { AsyncPipe, DecimalPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { SwapiService } from '../api';
import { PlanetResult } from '../models';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, DecimalPipe],
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetComponent {
  planetId$!: Observable<number>;
  planetResult$!: Observable<PlanetResult>;

  constructor(
    private swapiService: SwapiService,
    private ativatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.planetId$ = this.ativatedRoute.params.pipe(
      map((params) => +params['planetId'])
    );

    this.planetResult$ = this.planetId$.pipe(
      switchMap((planetId) => this.swapiService.getPlanet(planetId))
    );
  }
}
