import { IWordCamp } from "./apiInterface";
import { status } from "./enum";
import dayjs from "dayjs";

export const handleQueryParams = (
  status?: status,
  per_page?: number,
  page?: number,
): string => {
  let query: string = "";
  if (status) {
    query += `status=${status}`;
  }

  if (per_page) {
    query += `&per_page=${per_page}`;
  }

  if (page) {
    query += `&page=${page}`;
  }

  return query;
};

export const formatApiData = (data: any[]): IWordCamp[] => {
  return data.map((event: any) => {
    return {
      id: event.id,
      status: event.status,
      type: event.type,
      link: event.link,
      title: event.title.rendered,
      content: event.content.rendered,
      startDate: event["Start Date (YYYY-mm-dd)"],
      endDate: event["End Date (YYYY-mm-dd)"],
      timezone: event["Event Timezone"],
      location: event.Location,
      url: event.URL,
      venueName: event["Venue Name"],
      physicalAddress: event["Physical Address"],
      maximumCapacity: event["Maximum Capacity"],
      availableRooms: event["Available Rooms"],
      websiteURL: event["Website URL"],
      latitude: event._venue_coordinates.latitude,
      longitude: event._venue_coordinates.longitude,
      session_start_time: event.session_start_time,
    };
  });
};

export const filterEventByData = (
  start_date: string,
  end_date: string,
  data: IWordCamp[],
) => {
  const start = dayjs(start_date);
  const end = dayjs(end_date);
  return data.filter((event: IWordCamp) => {
    const eventStartDate = dayjs(event.startDate);
    const eventEndDate = dayjs(event.endDate);
    return eventStartDate.isAfter(start) && eventEndDate.isBefore(end);
  });
};
