import { TailwindIndicator } from "~/components/tailwind-indicator";
import { ThemeProvider } from "~/components/theme-provider";
import Head from "next/head";
import { SideNav } from "~/components/side-nav";
import { siteConfig, SiteConfig } from "~/config/site";
import { AnnouncementBar } from "~/components/announcement-bar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="A clone of Twitter" />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="container relative mx-auto flex h-screen min-h-screen flex-row ">
          {/* <SiteHeader /> */}
          <SideNav items={siteConfig.mainNav} />
          {children}
        </div>
        <AnnouncementBar />
        <TailwindIndicator />
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
