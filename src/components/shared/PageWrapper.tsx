import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className = "pt-20 space-y-6"
}) => {
  return (
    <main className={className}>
      {children}
    </main>
  );
};

export default PageWrapper;
