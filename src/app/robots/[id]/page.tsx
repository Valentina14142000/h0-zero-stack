export default function RobotPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">
        Robot Details: {params.id}
      </h1>

      <p className="mt-2 text-gray-600">
        More analytics and logs will appear here.
      </p>
    </main>
  );
}