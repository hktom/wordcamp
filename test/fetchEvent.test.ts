import { status } from "../src/helpers/enum";
import { handleQueryParams } from "../src/helpers/events";
import { fetchEventRequest } from "../src/reducers/events/api";

test("query params", () => {
  const params: string = handleQueryParams(status.open, 1, 1);
  expect(params).toBe("status=wcpt-scheduled&per_page=1&page=1");
});

test("fetch default events", async () => {
  const { error, data } = await fetchEventRequest(1, 1);
  expect(data).toBeDefined();
});
