"use client";

import AppLayout from "@/components/layout/AppLayout";
import Modal from "@/components/ui/Modal";
import { setAllModalsFalse } from "@/lib/helpers/modalHandlers";
import { genericObjectType } from "@/lib/types";
import React, { useState } from "react";
import CollectionsHeader from "./CollectionsHeader";
import CollectionsList from "./CollectionsList";
import CreateCollectionModalBody from "./CreateCollectionModalBody";
import EmptyCollections from "./EmptyCollections";

const Collections = () => {
  // States
  const [actions, setActions] = useState<genericObjectType>({
    search: false,
    sort: false,
    comment: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [modals, setModals] = useState<genericObjectType>({
    create: false,
  });

  return (
    <>
      {modals.create && (
        <Modal
          setState={setModals}
          body={
            <CreateCollectionModalBody
              onClose={() => setAllModalsFalse(setModals)}
            />
          }
        />
      )}

      <AppLayout className="flex flex-col">
        <CollectionsHeader
          actions={actions}
          setActions={setActions}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setModal={setModals}
        />
        {/* <EmptyCollections /> */}
        <CollectionsList />
      </AppLayout>
    </>
  );
};

export default Collections;
