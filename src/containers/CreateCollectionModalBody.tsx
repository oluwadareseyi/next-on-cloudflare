import AddUser from "@/assets/svgIcons/AddUser";
import ChevronDown from "@/assets/svgIcons/ChevronDown";
import Close from "@/assets/svgIcons/Close";
import Search from "@/assets/svgIcons/Search";
import { Button } from "@/components/ui/button";
import EmailInvite from "@/components/ui/EmailInvite";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UserDetail from "@/components/ui/UserDetail";
import { inputChangeHandler } from "@/lib/helpers/inputChangeHandler";
import { users } from "@/utils/dummyUtils";
import React, { useMemo, useState } from "react";
import NoUser from "./NoUser";

type CreateCollectionModalBodyTypes = {
  onClose: () => void;
};

const CreateCollectionModalBody = ({
  onClose,
}: CreateCollectionModalBodyTypes) => {
  // States
  const [search, setSearch] = useState("");
  const [showUserSection, setShowUserSection] = useState(false);

  const isEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isEmail = useMemo(() => {
    return isEmailRegex.test(search);
  }, [search]);

  return (
    <div className="w-[560px]">
      <div className="flex items-center justify-between p-6 border-b-1 border-b-gray-1300">
        <h4 className="font-geist font-medium text-black-800 text-base">
          Create a new collection
        </h4>
        <Close
          dimension={{ width: "16px", height: "16px" }}
          onClick={onClose}
        />
      </div>

      <form className="p-6">
        <div className="group w-full border border-[var(--color-border-light)] rounded-2xl p-3">
          <Label
            htmlFor="collectionName"
            className="block text-label text-sm font-medium mb-1 text-[var(--color-input-label)]"
          >
            Collection name
          </Label>
          <Input
            id="collectionName"
            type="email"
            variant="plain"
            placeholder="Ex. Baldur’s Collectibles"
            required
          />
        </div>

        <div
          className="mt-6 mb-8 flex items-center gap-2 cursor-pointer"
          onClick={() => setShowUserSection((prevState) => !prevState)}
        >
          <AddUser />
          <h5 className="font-geist font-geist text-black-700 text-sm">
            Invite team members (optional)
          </h5>
          <ChevronDown
            className={`ml-auto  transition-all duration-200 ease-in-out  ${
              showUserSection
                ? "transform rotate-[-90deg]"
                : "transform rotate-0"
            }`}
          />
        </div>

        <div
          style={
            showUserSection ? { maxHeight: "1000px" } : { maxHeight: "0px" }
          }
          className="transition-all duration-200 ease-in-out overflow-hidden"
        >
          <div className="group w-full border border-[var(--color-border-light)] rounded-2xl p-3 flex items-center justify-between mb-6">
            <div className="flex-1">
              <Label
                htmlFor="search"
                className="block text-label text-sm font-medium mb-1 text-[var(--color-input-label)]"
              >
                Search by name or email
              </Label>
              <Input
                id="search"
                type="text"
                variant="plain"
                placeholder="Start typing"
                required
                value={search}
                name="search"
                onChange={(e) => inputChangeHandler(e, setSearch, true)}
              />
            </div>
            <Search />
          </div>

          {/* <NoUser /> */}

          {isEmail && <EmailInvite email={search} isDoneTyping={false} />}

          {users.map((data) => {
            return <UserDetail {...data} key={data?.name} />;
          })}
        </div>

        <div className="flex py-6 justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button>Create Collection</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateCollectionModalBody;
