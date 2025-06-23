export const runtime = "edge";

import Dashboard from "@/components/features/create/Dashboard";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback="Loader...">
      <Dashboard />
    </Suspense>
  );
};

export default page;
