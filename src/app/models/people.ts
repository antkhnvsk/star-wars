import { RequestResults } from './request';

export interface People {
  uid: string;
  name: string;
  url: string;
}

export type PeopleResults = RequestResults<People>;
