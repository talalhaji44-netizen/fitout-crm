import { OrganizationList } from "@clerk/nextjs";

export default function OrgSelectPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
      <h1 className="text-2xl font-semibold text-accent">
        Select or Create an Organisation
      </h1>
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
      />
    </main>
  );
}
