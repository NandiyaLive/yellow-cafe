import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="title" content="Yellow Café" />
        <meta name="description" content="Fresh and Delicious" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yellowcafe.lk/" />
        <meta property="og:title" content="Yellow Café" />
        <meta property="og:description" content="Fresh and Delicious" />
        <meta property="og:image" content="/logo.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yellowcafe.lk/" />
        <meta property="twitter:title" content="Yellow Café" />
        <meta property="twitter:description" content="Fresh and Delicious" />
        <meta property="twitter:image" content="/logo.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <body className="scroll-smooth bg-gray-200 text-neutral-900 dark:bg-neutral-900 dark:text-white duration-200 transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
