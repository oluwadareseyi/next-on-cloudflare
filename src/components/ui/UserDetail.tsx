import { IMAGES } from "@/utils/images";
import Image from "next/image";

type UserDetailType = {
  email: string;
  name: string;
  avatar?: React.ReactNode | string;
};

const UserDetail = ({ email, name, avatar }: UserDetailType) => {
  return (
    <div className="flex items-center gap-2 p-2 bover:bg-gray-1400 cursor-pointer rounded-[12px] mb-1">
      <Image
        src={avatar as string}
        width={32}
        height={32}
        alt={name}
        className="rounded-full"
      />
      <div>
        <p className="text-sm font-medium text-black-700">{name}</p>
        <p className="text-xs font-medium text-gray-1100">{email}</p>
      </div>

      <input type="checkbox" className="ml-auto" />
    </div>
  );
};

export default UserDetail;
