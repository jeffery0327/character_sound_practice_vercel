// ui/auth/user-gate.tsx
import { createClient } from "@/lib/supabase/server";

export async function UserGate({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  try {
    const supabase = await createClient();
    // getUser 是目前最安全的作法，避免 JWT 偽造
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      console.log("UserGate: No user found", error);
      return <>{fallback}</>;
    }

    return <>{children}</>;
  } catch (e) {
    console.error("UserGate crashed:", e);
    return <>{fallback}</>;
  }
}
