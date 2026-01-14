import EmployerSideBar from "../Components/dashboardView/sideBar/employeSidebar/page"


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="xl:w-[20%]">
                <EmployerSideBar />
            </div>

            {/* Main Content */}
            <div className="w-full xl:w-[80%]">
                {children}
            </div>
        </div>
    )
}
