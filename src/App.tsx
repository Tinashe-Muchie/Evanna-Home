import "./styles.css";
import { HEADER, FOOTER } from "./Components/index";
import { ROUTING } from "./Routing";
import { ApolloProvider } from "@apollo/client";
import client from './apolloClient';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app_wrapper">
      <main className="main_content">
        <HEADER />
        <ROUTING />
      </main>
      <footer className="footer">
        <FOOTER />
      </footer>
    </div>
    </ApolloProvider>
  );
}
