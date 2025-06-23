"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const useUpdateSearchParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateSearchParams = (
    key: string,
    value: string | undefined,
    method: "set" | "delete" | "get",
    scroll?: boolean
  ) => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(searchParams.toString());

      if (method === "get") {
        return params.get(key);
      }

      if (method === "delete") {
        params.delete(key);
      } else if (value) {
        params.set(key, value);
      }

      router.push(`${pathname}?${params.toString()}`, {
        scroll: scroll || false,
      });
    }
  };

  const updateConcurrentSearchParams = (
    updates: { [key: string]: string | undefined },
    method: "set" | "delete" | "get",
    scroll?: boolean
  ) => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (method === "get") {
          return params.get(key); // Fetching a value for a specific key
        }

        if (method === "delete") {
          params.delete(key);
        } else if (value !== undefined) {
          params.set(key, value);
        }
      });

      router.push(`${pathname}?${params.toString()}`, {
        scroll: scroll || false,
      });
    }
  };

  return { updateSearchParams, updateConcurrentSearchParams };
};

export default useUpdateSearchParams;
