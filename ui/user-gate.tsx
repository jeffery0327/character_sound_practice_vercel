// ui/auth/user-gate.tsx
import { createClient } from "@/lib/supabase/server";

export async function UserGate({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? children : fallback;
}
