import { Home } from "./pages/home";
import { Header } from "./components/header";
import { Provider } from "./providers";

export function App() {
  return (
    <main>
      <Provider>
        <Header />
        <Home />
      </Provider>
    </main>
  );
}
