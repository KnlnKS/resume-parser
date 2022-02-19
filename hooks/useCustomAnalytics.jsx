import { useEffect } from "react";

import { ANALYTICS_URL } from "../constants";

const useCustomAnalytics = (event) => {
  useEffect(() => {
    fetch(ANALYTICS_URL, { method: "POST", body: event });
  }, []);
};

export default useCustomAnalytics;
