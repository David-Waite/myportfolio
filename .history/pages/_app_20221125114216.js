import "../styles/globals.css";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";
import Index from ".";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
      <Analytics />
    </Layout>
  );
}

export default MyApp;
