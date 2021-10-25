import React from "react";

// CONTAINER FOR ROUTE COMPONENTS
const Layout = (props) => {
  return <div className=" w-full px-9 pt-20 sm:mt-10 bg-gray-100 sm:h-auto h-screen ">{props.children}</div>;
};

export default Layout;
