import DataDisplay from "../components/DataDisplay";
import TopBar from "../components/TopBar";
import { useAnalytics } from "../hooks";

export default function Home() {
  useAnalytics("page_view")
  return (
    <>
      <TopBar />
      <DataDisplay />
    </>
  );
}
