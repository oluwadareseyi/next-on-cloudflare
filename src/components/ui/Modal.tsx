"use client";

import { setAllModalsFalse } from "@/lib/helpers/modalHandlers";
import ReactDom from "react-dom";

const BackDrop = (props: any) => {
  return (
    <div
      className="fixed inset-0 w-full h-screen z-[11] bg-black/40 cursor-auto"
      onClick={props.onClick}
    />
  );
};

const ModalOverlay = (props: any) => {
  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[12] overflow-auto bg-white m-auto animate-fade-in flex items-start justify-center rounded-[32px] box-border min-h-[10vh] min-w-[10vw] max-h-[90vh] max-w-[90vw]"
      style={props.style}
    >
      <div className="w-full h-full overflow-auto text-left box-border scrollbar-thin scrollbar-thumb-[#dcd7fe] scrollbar-track-transparent">
        {props.body}
      </div>
    </div>
  );
};

const backdropContainer =
  typeof document !== "undefined" && document.getElementById("backdrop");
const modalOverlay =
  typeof document !== "undefined" && document.getElementById("modal-overlay");

const Modal = (props: any) => {
  return (
    <div>
      {ReactDom.createPortal(
        <BackDrop
          onClick={() => {
            if (props?.setState) {
              setAllModalsFalse(props?.setState);
            }
            props?.onClick();
          }}
        />,
        backdropContainer || document.body
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          header={props.header}
          body={props.body}
          style={props.style}
        />,
        modalOverlay || document.body
      )}
    </div>
  );
};

export default Modal;
