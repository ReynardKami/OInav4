import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3300);
  }, []);

  return (
    <div className="notfound">
      <header>Ooops...</header>
      <h3>Sorry but we cant find what you're looking for.</h3>
    </div>
  );
};

export default NotFound;
