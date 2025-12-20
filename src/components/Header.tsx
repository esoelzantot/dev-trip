import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 sm:h-16 w-auto" />
        </div>

        {/* Tabs */}
        <nav className="flex gap-10">
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `
              text-lg sm:text-xl font-semibold transition
              ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : "text-slate-700 hover:text-slate-900"
              }
              `
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `
              text-lg sm:text-xl font-semibold transition
              ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : "text-slate-700 hover:text-slate-900"
              }
              `
            }
          >
            Tasks
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
