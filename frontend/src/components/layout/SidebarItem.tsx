import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'

type SidebarItemProps = {
    label: string
    to: string
    icon: ReactNode
}

function SidebarItem({ label, to , icon}: SidebarItemProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ${isActive
                    ? 'bg-primary/15 text-foreground shadow-[0_0_20px_rgba(201,42,69,0.08)]'
                    : 'text-muted hover:bg-primary/10 hover:text-foreground'
                }`
            }
        >
            <span className="text-base">
                {icon}
            </span>

            <span>{label}</span>
        </NavLink>
    )
}

export default SidebarItem