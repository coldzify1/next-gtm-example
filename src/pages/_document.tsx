// import GTMBodyScript from "@/components/GTMBodyScript";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WSG9SPVK"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        /> */}
        {/* <GTMBodyScript gtmId="GTM-WSG9SPVK" /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
