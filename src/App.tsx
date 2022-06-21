import "./styles.css";
import { HEADER, FOOTER } from "./Components/index";
import { ROUTING } from "./Routing";

export default function App() {
  return (
    <div className="app_wrapper">
      <main className="main_content">
        <HEADER />
        <ROUTING />
      </main>
      <footer className="footer">
        <FOOTER />
      </footer>
    </div>
  );
}
