import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import { AppLayout } from "../components/AppLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Triscuit",
  description: "Taking care of our little guy.",
  metadataBase: new URL("https://triscuit.vercel.app/"),
  icons: {
    icon: "/favicons/favicon.svg", // Default icon
    shortcut: "/favicons/favicon.ico", // for .ico formats
    apple: "/favicons/apple-touch-icon.png", // for apple-touch-icon
  },
  openGraph: {
    title: "Triscuit",
    description: "Taking care of our little guy.",
    url: "https://triscuit.vercel.app/",
    siteName: "Triscuit",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Taking care of our little guy.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
