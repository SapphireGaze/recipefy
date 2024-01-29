import { useEffect, useState } from "react";

import { authenticate } from "@/lib/api";

const useAuth = (): boolean => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        if (
          localStorage.getItem("token") &&
          (await authenticate(localStorage.getItem("token") as string))
        ) {
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.error("Error validating user:", err);
      }
    };

    fetchData();
  }, []);

  return isLoggedIn;
};

export default useAuth;
