import { useAppSelector } from "../store/store";
import CalendarPage from "./calendar";
import MapPage from "./map";

function HomePage() {
  const router = useAppSelector((state) => state.router);

  if (router.page === "home") {
    return <CalendarPage />;
  }

  return <MapPage />;
}

export default HomePage;
