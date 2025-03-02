import React, { ReactNode } from 'react';

interface PageSectionProps {
  sectionID?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function PageSection({
  sectionID = '',
  title,
  subtitle = ' ',
  children,
  className = ''
}: PageSectionProps) {
  return (
    <>
      <section className={`pt-12 pb-12 ${className}`} id={sectionID}>
        <div className="container mx-auto px-1">
          <div className="text-center mb-1">
            {title && <h2 className="desktop:text-5xl text-4xl font-bold text-blue pb-2">{title}</h2>}
            {subtitle && <h4 className="tablet:text-2xl phone:text-lg text-gray-600  pb-10">{subtitle}</h4>}
          </div>
          <div className="content">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};
