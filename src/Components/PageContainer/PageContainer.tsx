import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="flex bg-grey-200 flex-col min-h-screen font-mono font-bold">
      {children}
    </div>
  );
};

export default PageContainer;
