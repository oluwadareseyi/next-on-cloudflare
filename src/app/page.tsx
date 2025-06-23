import Image from "next/image";
import Link from "next/link";
import Cloudflare from "./NET.png";
import Nextjs from "./next.png";

export default function Component() {
  return (
    <div className="flex flex-col bg-background bg-white text-black">
      <nav className="flex items-center justify-between p-4 bg-gray-100 text-gray-800 shadow-md">
        <div className="text-xl font-bold">Next.js on Cloudflare</div>
        <div className="flex text-md space-x-6">
          <Link
            href="https://git.new/Arindam"
            className="hover:text-primary hover:underline transition-colors duration-200 font-medium"
          >
            GitHub
          </Link>
          <Link
            href="https://dub.sh/arindam"
            className="hover:text-primary hover:underline transition-colors duration-200 font-medium"
          >
            Portfolio
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="relative w-24 h-20">
                  <Image
                    src={Nextjs}
                    alt="Next.js Logo"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
                <span className="text-4xl font-bold">x</span>
                <div className="relative w-28 h-20 -mt-3">
                  <Image
                    src={Cloudflare}
                    alt="Cloudflare Logo"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Next.js on Cloudflare branch
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  This is a sample UI that I will deploy on Cloudflare Pages.
                  Experience the power of Next.js with global distribution.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="https://dub.sh/arindam-devto"
                  className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-5 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-sm text-center text-muted-foreground">
          Created by Arindam Majumder
        </p>
      </footer>
    </div>
  );
}
