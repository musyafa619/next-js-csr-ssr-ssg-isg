import { useEffect, useState } from "react";

export default function SSR({ state }) {
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

export async function getServerSideProps() {
  const res = await fetch("https://621b2f6cfaa12ee450077519.mockapi.io/users");
  const data = await res.json();

  return {
    props: {
      state: data,
    },
  };
}
