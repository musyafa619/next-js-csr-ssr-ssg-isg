import { useEffect, useState } from "react";

export default function CSR() {
  const [state, setState] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "https://621b2f6cfaa12ee450077519.mockapi.io/users"
    );
    const data = await res.json();
    setState(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {state.map((user) => (
        <h2>
          {user.name} {user.id}
        </h2>
      ))}
    </div>
  );
}
