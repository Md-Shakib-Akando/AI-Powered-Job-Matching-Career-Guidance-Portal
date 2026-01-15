"use client";

import { useSession } from "next-auth/react";
import EmployerDashboard from "../Components/dashboardView/employerDashboard/page";
import CandidateDashboard from "./candidate/page";

export default function Dashboard() {
    const { data: session, status } = useSession();



    if (status === "loading") {
        return <p>Loading...</p>;
    }


    if (!session || !session.user) {
        return <p>Unauthorized</p>;
    }

    const role = session.user.role;

    return (
        <>
            {role === "employer" && <EmployerDashboard />}
            {role === "candidate" && <CandidateDashboard />}
        </>
    );
}
