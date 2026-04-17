import { ReactNode, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FlaskConical,
  Library,
  Droplet,
  Beaker,
  Boxes,
  Settings as SettingsIcon,
  BookOpen,
  LogOut,
  Bell,
  ChevronsLeft,
} from "lucide-react";
import { ChandlerDock } from "./ChandlerDock";

const navItems = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, code: "01" },
  { to: "/app/mixer", label: "Mixer", icon: FlaskConical, code: "02" },
  { to: "/app/library", label: "Library", icon: Library, code: "03" },
  { to: "/app/blends", label: "Blends", icon: Droplet, code: "04" },
  { to: "/app/batch", label: "Batch Planner", icon: Beaker, code: "05" },
  { to: "/app/inventory", label: "Inventory", icon: Boxes, code: "06" },
  { to: "/app/settings", label: "Settings", icon: SettingsIcon, code: "07" },
  { to: "/app/docs", label: "Field Manual", icon: BookOpen, code: "08" },
];

interface AppShellProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  fileId?: string;
  actions?: ReactNode;
}

export const AppShell = ({ children, title, subtitle, fileId, actions }: AppShellProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "shrink-0 border-r-2 border-ink bg-paper relative transition-all duration-300",
          collapsed ? "w-16" : "w-64"
        )}
        style={{
          backgroundImage:
            "linear-gradient(180deg, hsl(40 35% 92%), hsl(38 25% 84%))",
        }}
      >
        {/* Stamped corner */}
        <div className="absolute top-3 right-3 label-mono text-[9px] text-hazard border border-hazard/60 px-1.5 py-0.5 rotate-3">
          CLASSIFIED
        </div>

        {/* Logo */}
        <Link to="/" className="block px-4 py-6 border-b-2 border-ink/80">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl">BLNDR</span>
            {!collapsed && (
              <span className="label-mono text-[9px] text-ink-mute">v.1.0</span>
            )}
          </div>
          {!collapsed && (
            <div className="label-mono text-[9px] text-ink-mute mt-1">
              UNAUTH. EXTRACTION UNIT
            </div>
          )}
        </Link>

        {/* Nav */}
        <nav className="p-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/app"}
              className={({ isActive }) =>
                cn(
                  "group flex items-center gap-3 px-3 py-2.5 label-mono text-xs border border-transparent transition-all relative",
                  isActive
                    ? "bg-ink text-paper border-ink shadow-[3px_3px_0_hsl(var(--hazard))]"
                    : "text-ink hover:bg-paper-deep hover:border-ink/40"
                )
              }
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {!collapsed && (
                <>
                  <span className="flex-1">{item.label}</span>
                  <span className="text-[9px] opacity-60">{item.code}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t-2 border-ink/80 bg-paper-deep/40">
          {!collapsed && (
            <>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 bg-ink text-paper flex items-center justify-center label-mono text-[10px]">
                  RJ
                </div>
                <div className="flex-1 min-w-0">
                  <div className="label-mono text-[10px] truncate">OPERATIVE_RJ</div>
                  <div className="label-mono text-[8px] text-ink-mute">CLEARANCE: BETA</div>
                </div>
              </div>
              <div className="flex items-center justify-between label-mono text-[9px] text-ink-mute mb-2">
                <span>BUDGET</span>
                <span className="redact-hazard text-[9px] py-0">$200.00</span>
              </div>
              <button className="w-full label-mono text-[10px] flex items-center justify-center gap-1.5 border border-ink/60 py-1.5 hover:bg-ink hover:text-paper transition-colors">
                <LogOut className="w-3 h-3" /> SIGN OUT
              </button>
            </>
          )}
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="w-full label-mono text-[9px] text-ink-mute mt-2 flex items-center justify-center gap-1 hover:text-ink"
          >
            <ChevronsLeft className={cn("w-3 h-3 transition-transform", collapsed && "rotate-180")} />
            {!collapsed && "COLLAPSE"}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        {/* Topbar */}
        <header className="border-b-2 border-ink bg-paper/90 backdrop-blur-sm sticky top-0 z-30">
          <div className="px-8 py-5 flex items-start justify-between gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="label-mono text-[10px] text-hazard border border-hazard px-1.5 py-0.5">
                  FILE {fileId || "OPEN"}
                </span>
                <span className="label-mono text-[10px] text-ink-mute">
                  ● LIVE FEED
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl">{title}</h1>
              {subtitle && (
                <p className="scribble text-sm text-ink-soft mt-1">{subtitle}</p>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {actions}
              <button className="w-9 h-9 border-2 border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-colors">
                <Bell className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Marquee strip */}
          <div className="bg-ink text-paper/90 overflow-hidden">
            <div className="flex marquee-track whitespace-nowrap label-mono text-[10px] py-1">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex gap-8 px-8 shrink-0">
                  <span>● TRANSMISSION ACTIVE</span>
                  <span>SESSION_ID 88.X-OMEGA</span>
                  <span>BUDGET REMAINING: $200.00</span>
                  <span>HAZARD CLASS 4</span>
                  <span>DO NOT DEVIATE FROM RATIOS</span>
                  <span>● AGENT ON STANDBY</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="p-6 md:p-8 max-w-[1600px]">{children}</div>

        {/* Persistent CHANDLER-7 dock */}
        <ChandlerDock />
      </main>
    </div>
  );
};
