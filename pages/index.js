import DataDisplay from "../components/DataDisplay";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import { useAnalytics } from "../hooks";

export default function Home() {
  useAnalytics("Page View");
  return (
    <>
      <Header />
      <TopBar />
      <DataDisplay />
    </>
  );
}
