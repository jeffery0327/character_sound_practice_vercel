import Link from "next/link";
import { Button } from "@/ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";
import { Suspense } from "react";

export async function AuthButton() {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return (
    <Suspense>
      {
        user ? (
          <div className="flex items-center justify-end gap-2">
            Hey, {user.email?.split('@')[0]}!
            <LogoutButton />
          </div>
        ) : (
          <div className="flex items-center justify-end gap-2">
            <Button asChild size="sm" variant={"default"}>
              <Link href="/auth/login">登入</Link>
            </Button>
          </div>
        )
      }
    </Suspense>
  );

}
