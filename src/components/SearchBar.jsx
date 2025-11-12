import { Search } from "lucide-react";

export default function SearchBar({ placeholder = "Search", value, onChange }) {
  return (
    <div className="bg-white rounded-full shadow-sm border border-gray-100 px-4 py-2 flex items-center gap-2">
      <Search size={18} className="text-gray-400" />
      <input
        value={value}
        onChange={e => onChange?.(e.target.value)}
        className="w-full bg-transparent outline-none text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}
