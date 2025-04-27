import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex-center justify-center flex-col space-y-5">
      <h1 className="text-3xl font-bold">OOps!</h1>
      <div className="flex-center gap-4 items-center ">

      <h2 className="text-3xl font-bold">404!</h2>
      <p>Page not Found</p>
      </div>
    </div>
  );
};

export default NotFound;
