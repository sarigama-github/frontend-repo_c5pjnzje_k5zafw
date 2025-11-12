export default function Settings() {
  return (
    <div className="pb-20 max-w-md mx-auto">
      <div className="p-4 space-y-4">
        <h1 className="text-lg font-semibold text-gray-900">Settings</h1>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-3">
          <div>
            <p className="text-sm text-gray-700">Theme</p>
            <p className="text-xs text-gray-500">Light</p>
          </div>
          <div className="pt-3 border-t">
            <p className="text-sm text-gray-700">Notifications</p>
            <p className="text-xs text-gray-500">Enabled</p>
          </div>
        </div>
      </div>
    </div>
  )
}
