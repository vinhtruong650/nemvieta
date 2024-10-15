import Loading from "@components/items/client-items/Loading";
import Fetch from "@components/items/server-items/Fetch";
import { AuthProviders } from "@context/AuthProviders";
import { DataProviders } from "@context/DataProviders";
import { StateProvider } from "@context/StateProvider";
import "@styles/global.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-95WY25MRJS"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-95WY25MRJS');`}
        </Script>
      </head>
      <body>
        <StateProvider>
          <DataProviders>
            <AuthProviders>
              <Fetch />
              <Loading />
              <>{children}</>
            </AuthProviders>
          </DataProviders>
        </StateProvider>
      </body>
    </html>
  );
}
