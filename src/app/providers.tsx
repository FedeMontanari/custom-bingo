import { TRPCReactProvider } from "@/trpc/react";
import NavBar from "../components/nav-bar";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <div className="size-full py-3">
      <TRPCReactProvider>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </TRPCReactProvider>
    </div>
  );
};
