import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-surface min-h-screen py-8 px-10 md:px-20">
      <Head>
        <title>GetBetter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
