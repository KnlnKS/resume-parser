import { useEffect } from "react";
import { FIREBASE } from "../constants";
import { getAnalytics, logEvent } from "firebase/analytics";

const useFirebaseAnalytics = (message) => {
  useEffect(() => {
    if (message) logEvent(getAnalytics(FIREBASE), message);
  }, [message]);
};

export default useFirebaseAnalytics;
