import { useEffect } from "react";

import { ANALYTICS_URL } from "../constants";

const useCustomAnalytics = (event) => {
  useEffect(() => {
    fetch(ANALYTICS_URL, { method: "POST", body: event })
      .then((response) => response.json())
      .then((data) => {
        if (data?.message) console.log(data.message);
      });
  }, []);
};

export default useCustomAnalytics;
