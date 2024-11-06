import React, { ReactNode } from 'react';

interface CardWhyUsLargeProps {
  title: string;
  cardText: string;
  className?: string;
}

export function CardWhyUsLarge({ 
  title, 
  cardText, 
  className = '' 
}: CardWhyUsLargeProps) {
  return (
    <>
      <div className="flex flex-col justify-start content-start w-[220px] 
      bg-gradient-to-b from-orange_light to-orange hover:bg-orange 
      rounded-xl border-[3px] border-blue gap-y-4 text-blue p-2">
          <h2 className="text-3xl  font-bold text-center h-[calc(2em+0.5rem)] ">
            <span className="inline-block leading-tight line-clamp-2">
              {title}
            </span>
          </h2>
          <p className="text-lg font-bold text-center ">{cardText}</p>
      </div>
    </>
  );
};
