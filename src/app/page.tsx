import { columns } from "@/data-table/columns";
import { DataTable } from "@/data-table/table";
import { payments } from "@/data/payments.data";

async function fetchData() {
  return payments;
}

export default async function HomePage() {
  const data = await fetchData();
  return (
    <div className="container mx-auto py-10">
      <h1>Data table</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
