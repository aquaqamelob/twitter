import { useRouter } from "next/router";

export function NavCenter() {
  const router = useRouter();

  const routes = {
    "/": "Explore",
    "/account": "Account",
    "/settings": "Settings",
  };

  return (
    <div className="sticky top-0 z-40 h-14 w-full border-b border-r bg-background/80 p-4 backdrop-blur-xl backdrop-saturate-200">
      <span className="text-xl font-bold">
        {
          // @ts-ignore
          routes[router.asPath]
        }
      </span>
    </div>
  );
}
