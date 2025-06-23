export const runtime = "edge";

import ProtectedRoute from "@/components/layout/ProtectedRoute";

export default function Home() {
  return (
    //todo: have a layout wrapper for all protected routes
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-4">Welcome to Genie Web</h1>
        <p className="text-xl text-gray-600">
          A modern web application built with Next.js, Tailwind CSS, and
          shadcn/ui
        </p>
      </div>
    </ProtectedRoute>
  );
}
