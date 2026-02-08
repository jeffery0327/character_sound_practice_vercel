"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return <Button onClick={logout} size="sm" variant={"default"}>登出</Button>;
}
