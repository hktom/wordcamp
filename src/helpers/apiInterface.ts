import { status } from "./enum";

export interface IWordCamp {
  id: number;
  status: status;
  type: string;
  link: string;
  title: string;
  content: string;
  start: string;
  end: string;
  timezone: string;
  location: string;
  url: string;
  venueName: string;
  physicalAddress: string;
  maximumCapacity: string;
  availableRooms: string;
  websiteURL: string;
  latitude: number;
  longitude: number;
  session_start_time: number;
  image: string;
}

export interface IQueryParams {
  status?: status;
  per_page?: number;
  page?: number;
}

export interface IQueryDate {
  start_date: string;
  end_date: string;
}


export type IQueryParamsDate = IQueryParams & IQueryDate;
