"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import { Button } from "./button";

type EmailInviteTypes = {
  email: string;
  isDoneTyping: boolean;
};

const EmailInvite = ({ email, isDoneTyping }: EmailInviteTypes) => {
  return (
    <div className="flex items-center gap-2 p-2 bover:bg-gray-1400 cursor-pointer rounded-[12px] mb-1">
      <Image
        src={IMAGES.MAIL_INVITE}
        width={32}
        height={32}
        alt={"Mail Invite"}
        className="rounded-full"
      />
      <div>
        <p className="text-sm font-medium text-black-700">Email {email}</p>
        <p className="text-xs font-medium text-gray-1100">
          {!isDoneTyping ? "Keep typing!" : "Click to send!"}
        </p>
      </div>

      <Button variant="secondary" className="ml-auto py-1.5 px-6">
        Invite
      </Button>
    </div>
  );
};

export default EmailInvite;
