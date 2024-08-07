import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";
import { Provider as ReduxProvider } from "react-redux";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </ReduxProvider>
  );
}
