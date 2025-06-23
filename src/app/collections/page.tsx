export const runtime = "edge";

import Collections from "@/containers/Collections";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <Collections />
    </Suspense>
  );
};

export default page;
