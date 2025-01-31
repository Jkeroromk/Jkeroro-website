'use client'

import dynamic from "next/dynamic";
import React from "react";

const Interact = () => {
  const VantaBackground = dynamic(
    () => import("@/components/vantaBackground"),
    { ssr: false }
  );
  return <div>
    <VantaBackground/>
  </div>;
};

export default Interact;
