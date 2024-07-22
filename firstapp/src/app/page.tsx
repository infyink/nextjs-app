import { AppLayout } from "../../components/AppLayout";
import { Dashboard } from "../../components/dashboard/Dashboard";

export default async function Home() {
  return (
    <>
      <AppLayout>
        <Dashboard></Dashboard>
      </AppLayout>
    </>
  );
}
export const dynamic = "force-dynamic";
