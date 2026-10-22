
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type AuthContextValue = {
  readerName: string | null;
  signIn: (name: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export function AuthProvider({
  children
}: {
  children: ReactNode;
}) {
  const [readerName, setReaderName] = useState<string | null>(null);

  function signIn(name: string) {
    setReaderName(name);
  }

  function signOut() {
    setReaderName(null);
  }

  return (
    <AuthContext.Provider value={{ readerName, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
