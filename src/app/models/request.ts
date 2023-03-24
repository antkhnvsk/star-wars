export interface RequestResult<T> {
  message: string;
  result: T;
}

export interface RequestResults<T> {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: T[];
}
