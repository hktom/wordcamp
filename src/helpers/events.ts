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

  query += `&per_page=${per_page || 100}`;

  query += `&page=${page || 1}`;

  query += "&_embed";

  return query;
};

export const formatApiData = (res: any[]): IWordCamp[] => {
  const data: IWordCamp[] = res.map((event: any) => {
    return {
      id: event.id,
      status: event.status,
      type: event.type,
      link: event.link,
      title: event.title.rendered,
      content: event.content.rendered,
      start: dayjs(event["Start Date (YYYY-mm-dd)"] * 1000).format(
        "YYYY-MM-DD",
      ),
      end: dayjs(event["End Date (YYYY-mm-dd)"] * 1000).format("YYYY-MM-DD"),
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
      image: getEventImage(event),
    };
  });
  return data;
};

export const getEventImage = (event: any): string => {
  if (
    event["_embedded"] &&
    event._embedded["wp:featuredmedia"] &&
    event._embedded["wp:featuredmedia"].length > 0 &&
    event._embedded["wp:featuredmedia"][0].source_url
  ) {
    return event._embedded["wp:featuredmedia"][0].source_url;
  }

  return "https://central.wordcamp.org/wp-content/themes/wordcamp-central-2012/images/wordcamp-placeholder-thumb.png";
};

export const filterEventByData = (
  start_date: string,
  end_date: string,
  data: IWordCamp[],
) => {
  const start = dayjs(start_date);
  const end = dayjs(end_date);
  return data.filter((event: IWordCamp) => {
    const eventStartDate = dayjs(event.start);
    const eventEndDate = dayjs(event.end);
    return (
      (eventStartDate.isAfter(start) || eventStartDate.isSame(start)) &&
      (eventEndDate.isBefore(end) || eventEndDate.isSame(end))
    );
  });
};

export interface IOrderAndGroupEventsByDateYear {
  [key: string]: IWordCamp[];
}

export const orderAndGroupEventsByDateYear = (
  data: IWordCamp[],
): IOrderAndGroupEventsByDateYear => {
  let events: any = {};

  data.forEach((event: IWordCamp) => {
    const year = dayjs(event.start).format("YYYY");
    if (!events[year]) {
      events[year] = [];
    }
    events[year].push(event);
  });

  return events;
};
