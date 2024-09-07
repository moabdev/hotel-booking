import { Header } from "../components/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black w-full flex flex-col min-h-screen">
      <Header />
      {children}
    </div>
  );
};
