"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

interface Props {
  showModel: boolean;
  setShowModel: Function;
  setAuthState: Function;
  authState: string;
}

export default function Modal({
  showModel,
  setShowModel,
  authState,
  setAuthState,
}: Props) {
  const [shouldShow, setShouldShow] = useState<boolean>(showModel);

  return (
    <>
      {shouldShow && (
        // Modal Background
        <div
          onClick={() => {
            setShouldShow(false);
            setShowModel(false);
          }}
          className="fixed z-[100] left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.3)]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
          md:w-[450px] w-[90vw] h-fit rounded-xl  bg-white mt-[20vh] mx-auto p-10 opacity-100 flex flex-col items-center
          "
          >
            {authState == "signup" ? (
              <SignUpForm
                setAuthState={setAuthState}
                setShouldShow={setShouldShow}
                setShowModel={setShowModel}
              />
            ) : (
              <SignInForm
                setAuthState={setAuthState}
                setShouldShow={setShouldShow}
                setShowModel={setShowModel}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
