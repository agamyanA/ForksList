import { SearchParams } from "./search-params";
import { SearchResult } from "./search-result";

export interface AppState {
    searchParams: SearchParams
    searchResult: SearchResult[]
    totalItems: number
    page: number
    isError: boolean
    isDataLoaded: boolean
  }