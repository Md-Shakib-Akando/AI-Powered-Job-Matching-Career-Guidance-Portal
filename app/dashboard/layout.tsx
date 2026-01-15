'use client'
import { useSession } from "next-auth/react";
import EmployerSideBar from "../Components/dashboardView/sideBar/employeSidebar/page"
import CandidateSideBar from "../Components/dashboardView/sideBar/candidateSidebar/page";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: session, status } = useSession();



    if (status === "loading") {
        return <p>Loading...</p>;
    }


    if (!session || !session.user) {
        return <p>Unauthorized</p>;
    }

    const role = session.user.role;
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="xl:w-[20%]">
                {role === "employer" && <EmployerSideBar />}
                {role === "candidate" && <CandidateSideBar></CandidateSideBar>}
            </div>

            {/* Main Content */}
            <div className="w-full xl:w-[80%]">
                {children}
            </div>
        </div>
    )
}
