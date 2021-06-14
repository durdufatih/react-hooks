import { useEffect, useState } from "react";

const Github = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        setError(null);
        setUser(data.login);
        setIsLoading(false);
      } catch (err) {
        setUser(null);
        setError(err);
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [username]);

  return { user, error, isLoading };
};

export default Github;
