import { RequestResult } from './request';

interface PlanetProperties {
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  created: string;
  edited: string;
  name: string;
  url: string;
}

export interface Planet {
  properties: PlanetProperties;
  description: string;
  _id: string;
  uid: string;
  __v: 0;
}

export type PlanetResult = RequestResult<Planet>;
