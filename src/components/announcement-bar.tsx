import { useSession, signOut, signIn } from "next-auth/react";
import { Button } from "./ui/button";

export function AnnouncementBar() {
  const { data: sessionData } = useSession();
  return sessionData ? null : (
    <div className="fixed bottom-0 flex h-16 w-screen items-center justify-center gap-16 bg-primary">
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-white">
          Don’t miss what’s happening
        </span>
        <span className="text-md text-white">
          People on Twitter are the first to know.
        </span>
      </div>
      <Button
        variant={"secondary"}
        onClick={sessionData ? () => void signOut() : () => void signIn()}
        className="flex items-center justify-center bg-white text-lg font-medium text-black"
      >
        {sessionData ? "Logout" : "Login"}
      </Button>
    </div>
  );
}
