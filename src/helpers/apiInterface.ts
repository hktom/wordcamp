import { status } from "./enum";

export interface IWordCamp {
  id: number;
  status: string;
  type: string;
  link: string;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
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
