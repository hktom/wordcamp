import { fetchEventRequest } from "../src/reducers/events/api";

test("fetch default events", async () => {
  const { error, data } = await fetchEventRequest();
  expect(data).toBeDefined();
});
