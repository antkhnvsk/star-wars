import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleResults, PersonResult, PlanetResult } from '../models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SwapiService {
  constructor(private httpClient: HttpClient) {}

  getPeople(page: number, limit = 10): Observable<PeopleResults> {
    return this.httpClient.get<PeopleResults>(
      'https://www.swapi.tech/api/people',
      { params: { page, limit } }
    );
  }

  getPerson(personId: number): Observable<PersonResult> {
    return this.httpClient.get<PersonResult>(
      `https://www.swapi.tech/api/people/${personId}`
    );
  }

  getPlanet(planetId: number): Observable<PlanetResult> {
    return this.httpClient.get<PlanetResult>(
      `https://www.swapi.tech/api/planets/${planetId}`
    );
  }
}
