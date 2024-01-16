import { useEffect, useState } from "react";

export default function UserTest() {
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const [header, payloadEncoded] = token.split(".");
    const tokenAsJSON = JSON.parse(atob(payloadEncoded));
    const userId = tokenAsJSON.id;
    console.log(userId);
  }, []);

  return (
    <>
      <div>
        <h1>{}</h1>
      </div>
    </>
  );
}
