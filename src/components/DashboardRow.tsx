import type { ReactNode } from "react";
import "../styles/Dashboard.css"

interface DashboardRowProps {
    children: ReactNode;
    className?: string;
}

function DashboardRow({ children, className = "" }: DashboardRowProps) {
    return <div className={`dashboard-row ${className}`}>{children}</div>;
}

export default DashboardRow;
