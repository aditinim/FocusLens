import SidebarItem from './SidebarItem'

function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 hidden h-screen w-64 shrink-0 border-r border-white/5 bg-surface/30 lg:flex lg:flex-col">
            {/* Logo */}
            <div className="flex items-center gap-3 px-6 py-7">
                <div className="h-2 w-2 rounded-full bg-primary-glow shadow-[0_0_12px_rgba(201,42,69,0.8)]" />

                <span className="text-sm font-semibold tracking-[0.25em] text-foreground">
                    FOCUSLENS
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-4">
                <p className="mb-3 px-3 text-[9px] font-medium uppercase tracking-[0.2em] text-muted-dark">
                    Workspace
                </p>
                <SidebarItem
                    label="Dashboard"
                    to="/dashboard"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 3.75h6.5v6.5h-6.5v-6.5ZM13.75 3.75h6.5v6.5h-6.5v-6.5ZM3.75 13.75h6.5v6.5h-6.5v-6.5ZM13.75 13.75h6.5v6.5h-6.5v-6.5Z"
                            />
                        </svg>
                    }
                />

                <SidebarItem
                    label="Live Session"
                    to="/session"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5 19.5 8.25v7.5l-3.75-2.25M4.5 6.75h8.25A2.25 2.25 0 0 1 15 9v6a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 15V9A2.25 2.25 0 0 1 4.5 6.75Z"
                            />
                        </svg>
                    }
                />

                <SidebarItem
                    label="Analytics"
                    to="/analytics"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 3v18h18M7.5 16.5l3.75-4.5 3 3 5.25-6"
                            />
                        </svg>
                    }
                />

                <div className="my-4 border-t border-white/5" />

                <p className="mb-3 px-3 text-[9px] font-medium uppercase tracking-[0.2em] text-muted-dark">
                    System
                </p>

                <SidebarItem
                    label="History"
                    to="/history"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6l4 2.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    }
                />

                <SidebarItem
                    label="Settings"
                    to="/settings"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.594 3.25a1.5 1.5 0 0 1 2.812 0l.26.77a1.5 1.5 0 0 0 2.214.76l.71-.41a1.5 1.5 0 0 1 2.12.55l.406.7a1.5 1.5 0 0 1-.548 2.05l-.71.41a1.5 1.5 0 0 0 0 2.56l.71.41a1.5 1.5 0 0 1 .548 2.05l-.406.7a1.5 1.5 0 0 1-2.12.55l-.71-.41a1.5 1.5 0 0 0-2.214.76l-.26.77a1.5 1.5 0 0 1-2.812 0l-.26-.77a1.5 1.5 0 0 0-2.214-.76l-.71.41a1.5 1.5 0 0 1-2.12-.55l-.406-.7a1.5 1.5 0 0 1 .548-2.05l.71-.41a1.5 1.5 0 0 0 0-2.56l-.71-.41a1.5 1.5 0 0 1-.548-2.05l.406-.7a1.5 1.5 0 0 1 2.12-.55l.71.41a1.5 1.5 0 0 0 2.214-.76l.26-.77Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    }
                />
            </nav>

            {/* Privacy status */}
            <div className="border-t border-white/5 p-5">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(127,207,169,0.8)]" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-success">
                        Privacy Active
                    </span>
                </div>

                <p className="mt-2 text-[10px] leading-4 text-muted-dark">
                    Vision processing stays on your device.
                </p>
            </div>
        </aside>
    )
}

export default Sidebar