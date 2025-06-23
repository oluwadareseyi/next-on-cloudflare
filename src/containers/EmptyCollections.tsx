import { routes } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";
import noCollections from "../assets/noCollections.svg";

const EmptyCollections = () => {
  return (
    <section className=" flex-1 bg-white-100 rounded-b-[16px] flex flex-col items-center justify-center gap-4">
      <Image src={noCollections} alt="No collections" />
      <p className="font-geist text-[14px] text-gray-1100 font-medium">
        Collections you add from the <br />{" "}
        <Link
          href={routes.CREATE}
          className="px-1.5 py-[2px] border-1 border-gray-1300 rounded-[6px] border-dashed"
        >
          Create
        </Link>{" "}
        page will appear here.{" "}
      </p>
    </section>
  );
};

export default EmptyCollections;
