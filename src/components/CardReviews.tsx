import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { ReactNode } from "react";

interface CardServicesProps {
  cardText: string;
  cardName?: string;
  className?: string;
}

export function CardReviews({
  cardText,
  cardName = "",
  className = "",
}: CardServicesProps) {
  return (
    <>
      <div className="flex justify-center items-center w-[250px] h-[250px] relative border-2 desktop:border-none  rounded-[12px] desktop:rounded-none bg-gradient-to-b from-orange_light to-orange  desktop:bg-transparent desktop:bg-none !important">
        <span className="hidden desktop:flex text-blue text-[415px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          &#x2B22;
        </span>
        <span className="hidden desktop:flex gradient-text text-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          &#x2B22;
        </span>

        <div className="relative w-200 flex flex-col items-center text-blue space-y-2">
          <div className="relative flex items-center justify-center w-10 h-10 top-[0px] ">
            <ChatBubbleLeftEllipsisIcon />
          </div>

          <span className="relative w-[220px] text-sm text-center top-[0px]">
            {cardText}
          </span>
          <span className="relative font-bold top-[0px]">{cardName}</span>
        </div>
      </div>
    </>
  );
}
