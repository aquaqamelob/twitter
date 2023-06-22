import * as React from "react";
import Link from "next/link";
import { NavItem } from "~/types/nav";
import { cn } from "~/utils/lib";
import { Icons } from "./icons";
import { Button, buttonVariants } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { ThemeToggle } from "./theme-toggle";
import { useRouter } from "next/router";

interface SideNavProps {
  items?: NavItem[];
}

export function SideNav({ items }: SideNavProps) {
  const { data: sessionData } = useSession();
  const router = useRouter();

  const NavIcons = [
    <Icons.search
      className="h-8 w-8"
      strokeWidth={router.asPath === "/" ? 2.5 : 1.5}
    />,
    <Icons.user
      className="h-8 w-8"
      strokeWidth={router.asPath === "/account" ? 2.5 : 1.5}
    />,
    <Icons.settings
      className="h-8 w-8"
      strokeWidth={router.asPath === "/settings" ? 2.5 : 1.5}
    />,
    <Icons.login className="h-8 w-8" strokeWidth={1.5} />,
    <Icons.logout className="h-8 w-8" strokeWidth={1.5} />,
  ];

  return (
    <div className="flex gap-6 border-r border-border px-0 py-12 pr-0 md:gap-10 md:px-8 md:pr-20">
      {items?.length ? (
        <nav className="flex flex-col gap-6">
          <Link href={"/"}>
            <div
              className={buttonVariants({
                variant: "ghost",
                size: "lg",
              })}
            >
              <Icons.twitter className="h-9 w-9 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "flex items-center justify-start text-lg font-medium",
                    router.asPath === item.href && "font-bold"
                  )}
                >
                  {NavIcons[index]}
                  <span className="ml-4 hidden w-16 md:block">
                    {item.title}
                  </span>
                </Link>
              )
          )}
          <Button
            variant={"ghost"}
            size={"lg"}
            onClick={sessionData ? () => void signOut() : () => void signIn()}
            className="flex items-center justify-start text-lg font-medium"
          >
            {sessionData ? NavIcons[3] : NavIcons[4]}
            <span className="ml-6 hidden md:block">
              {sessionData ? "Logout" : "Login"}
            </span>
          </Button>
          <ThemeToggle />
        </nav>
      ) : null}
    </div>
  );
}
