export default function Tabs({ tabs = [], current, onChange }) {
  return (
    <div className="w-full">
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => onChange?.(t)}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${current === t ? 'bg-teal-100 text-teal-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
