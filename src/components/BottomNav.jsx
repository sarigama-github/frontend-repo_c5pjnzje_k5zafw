import { Home, Building2, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function BottomNav() {
  const base = "flex flex-col items-center justify-center gap-1 text-xs";
  const active = "text-teal-600";
  const inactive = "text-gray-500";

  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-md bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-t border-gray-100 shadow-[0_-6px_24px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-3 py-2">
        <NavLink to="/" end className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
          <Home size={22} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/companies" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
          <Building2 size={22} />
          <span>Companies</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
          <Settings size={22} />
          <span>Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}
