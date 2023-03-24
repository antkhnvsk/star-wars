import { AsyncPipe, DecimalPipe, JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
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
    private httpClient: HttpClient,
    private ativatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.planetId$ = this.ativatedRoute.params.pipe(
      map((params) => +params['planetId'])
    );

    this.planetResult$ = this.planetId$.pipe(
      switchMap((planetId) =>
        this.httpClient.get<PlanetResult>(
          `https://www.swapi.tech/api/planets/${planetId}`
        )
      )
    );
  }
}
