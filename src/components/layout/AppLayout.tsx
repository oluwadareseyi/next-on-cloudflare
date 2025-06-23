import SideNav from "./SideNav";

type AppLayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const AppLayout = ({ children, className }: AppLayoutTypes) => {
  return (
    <main className="bg-gray-100 flex items-stretch h-[100vh]">
      <SideNav />
      <section className={`flex-1 p-2 ${className}`}>{children}</section>
    </main>
  );
};

export default AppLayout;
