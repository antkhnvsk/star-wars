import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { SwapiService } from '../api';
import { PersonResult } from '../models';
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
    private swapiService: SwapiService,
    private ativatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.personId$ = this.ativatedRoute.params.pipe(
      map((params) => +params['personId'])
    );

    this.personResult$ = this.personId$.pipe(
      switchMap((personId) => this.swapiService.getPerson(personId))
    );
  }
}
