import { AsyncPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { PersonResult } from '../models/person';
import { PlanetIdPipe } from '../planet-id-pipe';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterLink, PlanetIdPipe],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent implements OnInit {
  personId$!: Observable<number>;
  personResult$!: Observable<PersonResult>;

  constructor(
    private httpClient: HttpClient,
    private ativatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.personId$ = this.ativatedRoute.params.pipe(
      map((params) => +params['personId'])
    );

    this.personResult$ = this.personId$.pipe(
      switchMap((personId) =>
        this.httpClient.get<PersonResult>(
          `https://www.swapi.tech/api/people/${personId}`
        )
      )
    );
  }
}
