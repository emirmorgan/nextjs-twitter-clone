import Sidebar from "./Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-1 shrink-0 items-stretch h-full">
      <Sidebar />
      <main className="flex flex-col grow md:grow shrink basis-auto w-full h-full md:w-auto items-stretch md:items-start break-words overflow-hidden">
        <div className="flex w-full h-full md:w-[600px] lg:w-[920px] xl:w-[990px] lg:gap-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
