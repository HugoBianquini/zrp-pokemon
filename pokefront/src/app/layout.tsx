import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import CustomThemeProvider from "../providers/ThemeProvider";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <CustomThemeProvider>{children}</CustomThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
