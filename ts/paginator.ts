import { PaginatorInfo } from "./types";

type PaginatorFields = keyof PaginatorInfo;
export interface Paginator<T, I extends PaginatorFields> {
  data: T,
  paginatorInfo: { [K in I]: PaginatorInfo[I] },
}
export class Paginator<T, I> {
  async next() {
    
  }
}