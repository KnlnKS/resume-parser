import { useEffect } from "react";
import { firebase } from "../constants";

const useFirebaseAnalytics = (message) => {
  const { analytics } = firebase;

  useEffect(() => {
    if (message) analytics().logEvent(message);
  }, []);
};

export default useFirebaseAnalytics;
