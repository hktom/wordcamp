import dayjs from "dayjs";
import { status } from "../src/helpers/enum";
import { filterEventByData, getEventImage, handleQueryParams, orderAndGroupEventsByDateYear } from "../src/helpers/events";
import {
  fetchEventRequest,
  fetchEventRequestByDate,
  fetchEventRequestByStatus,
} from "../src/reducers/events/api";
import { IWordCamp } from "../src/helpers/apiInterface";

test("query params", () => {
  const params: string = handleQueryParams(status.open, 1, 1);
  expect(params).toBe("status=wcpt-scheduled&per_page=1&page=1&_embed");
});

test("fetch default events", async () => {
  const { error, data } = await fetchEventRequest({ page: 1, per_page: 1 });
  expect(data).toBeDefined();
});

test("fetch events by status", async () => {
  const { error, data } = await fetchEventRequestByStatus({
    status: status.open,
    page: 1,
    per_page: 1,
  });
  let checkStatus = data?.some((event) => event.status !== status.open);
  expect(checkStatus).toBeFalsy();
});

test("fetch events by date range", async () => {
  const start = dayjs("1696032000").format("YYYY-MM-DD");
  const end = dayjs("1696032000").format("YYYY-MM-DD");

  const { error, data } = await fetchEventRequestByDate({
    start_date: start,
    end_date: end,
    page: 1,
    per_page: 1,
  });
  let checkDate = data?.some(
    (event) =>
      dayjs(event.start).isBefore(start) || dayjs(event.end).isAfter(end),
  );

  expect(checkDate).toBeFalsy();
});

test("test filterEventByData", () => {
  const data: IWordCamp[] = [
    {
      id: 1,
      status: status.open,
      type: "wcpt-event",
      link: "https://2021.asia.wordcamp.org/",
      title: "WordCamp Asia 2021",
      content: "WordCamp Asia 2021",
      start: "2021-02-27",
      end: "2021-02-28",
      timezone: "UTC+8",
      location: "Online",
      url: "https://2021.asia.wordcamp.org/",
      venueName: "Online",
      physicalAddress: "Online",
      maximumCapacity: "1000",
      availableRooms: "1",
      websiteURL: "https://2021.asia.wordcamp.org/",
      latitude: 0,
      longitude: 0,
      session_start_time: 0,
      image: ""
    },
    {
      id: 2,
      status: status.open,
      type: "wcpt-event",
      link: "https://2021.asia.wordcamp.org/",
      title: "WordCamp Asia 2021",
      content: "WordCamp Asia 2021",
      start: "2021-03-02",
      end: "2021-03-05",
      timezone: "UTC+8",
      location: "Online",
      url: "https://2021.asia.wordcamp.org/",
      venueName: "Online",
      physicalAddress: "Online",
      maximumCapacity: "1000",
      availableRooms: "1",
      websiteURL: "https://2021.asia.wordcamp.org/",
      latitude: 0,
      longitude: 0,
      session_start_time: 0,
      image: ""
    },
    {
      id: 3,
      status: status.open,
      type: "wcpt-event",
      link: "https://2021.asia.wordcamp.org/",
      title: "WordCamp Asia 2021",
      content: "WordCamp Asia 2021",
      start: "2021-02-01",
      end: "2021-03-02",
      timezone: "UTC+8",
      location: "Online",
      url: "https://2021.asia.wordcamp.org/",
      venueName: "Online",
      physicalAddress: "Online",
      maximumCapacity: "1000",
      availableRooms: "1",
      websiteURL: "https://2021.asia.wordcamp.org/",
      latitude: 0,
      longitude: 0,
      session_start_time: 0,
      image: ""
    },
  ];

  const start = "2021-03-02";
  const end = "2021-03-20";

  const result = filterEventByData(start, end, data);
  expect(result[0]?.id).toBe(2);
});

test("test getImage Event", async ()=>{
  const { error, data } = await fetchEventRequest({ page: 1, per_page: 1 });
  let image = getEventImage(data![0]);
  expect(image).toBeDefined();
})

test("orderAndGroupEventsByDateYear", async()=>{
  const { error, data } = await fetchEventRequest({ page: 1, per_page: 4 });
  let groupedData = orderAndGroupEventsByDateYear(data!);
  expect(groupedData).toBeDefined();
})