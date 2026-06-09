import { auth, currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";

export default async function HomePage() {
  const { userId, orgId, orgSlug } = await auth();
  const user = await currentUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-8">
      <h1 className="text-3xl font-bold text-accent">Fitout CRM</h1>
      <div className="rounded-lg border border-accent/30 bg-white/60 p-6 shadow-sm w-full max-w-md">
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">User</p>
        <p className="font-medium">{user?.emailAddresses[0]?.emailAddress ?? "—"}</p>
        <p className="text-xs text-gray-400 font-mono">{userId}</p>

        <hr className="my-4 border-accent/20" />

        <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Organisation</p>
        <p className="font-medium">{orgSlug ?? "—"}</p>
        <p className="text-xs text-gray-400 font-mono">{orgId ?? "—"}</p>
      </div>
      <SignOutButton>
        <button className="rounded bg-accent px-4 py-2 text-sm text-white hover:opacity-90 cursor-pointer">
          Sign out
        </button>
      </SignOutButton>
    </main>
  );
}
