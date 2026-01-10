import React from 'react'
import EmployerDashboard from './employerDashboard/page'

export default function DashboardView() {
    return (
        <div>
            <div className='flex '>
                <div className='w-[20%] h-screen bg-[rgb(84,184,171)]'>
                    <h1 className="text-3xl font-bold mb-5">Employer Dashboard</h1>
                </div>
                <div className='w-[80%]'>
                    <EmployerDashboard></EmployerDashboard>
                </div>
            </div>
        </div>
    )
}
