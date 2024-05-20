import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  const response = await fetch(`${process.env.QUERY_URL!}/hello`);

  if (!response.ok) {
    return <div>Error</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(await response.json())}</pre>
    </div>
  );
}
