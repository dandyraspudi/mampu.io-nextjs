export default function UsersPage() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <p className="text-gray-600 mb-4">Manage your users here.</p>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">User List</h2>
        <div className="space-y-4">
          <div className="border rounded p-4">
            <h3 className="font-medium">John Doe</h3>
            <p className="text-sm text-gray-500">john@example.com</p>
          </div>
          <div className="border rounded p-4">
            <h3 className="font-medium">Jane Smith</h3>
            <p className="text-sm text-gray-500">jane@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}