import React from 'react'
import EmployerDashboard from './employerDashboard/page'
import EmployerSideBar from './sideBar/employeSidebar/page'

export default function DashboardView() {
    return (
        <div>
            <div className='flex '>
                <div className=' xl:w-[20%] '>
                    <EmployerSideBar></EmployerSideBar>
                </div>
                <div className='w-full xl:w-[80%]'>
                    <EmployerDashboard></EmployerDashboard>
                </div>
            </div>
        </div>
    )
}
