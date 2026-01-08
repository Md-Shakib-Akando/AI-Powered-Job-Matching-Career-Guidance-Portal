import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { Session } from "next-auth"
import Link from "next/link"

interface ProfileMenuProps {
    session: Session | null
    handleLogout: () => void
}

const ProfileMenu = ({ session, handleLogout }: ProfileMenuProps) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="text-3xl text-gray-700 hover:text-primary transition"
            >
                <FaUserCircle />
            </button>

            {open && (
                <div
                    className="
            absolute -right-18 mt-3 w-52
            bg-[#124271]
            border border-white/20
            rounded-xl
            shadow-2xl
            z-50
            overflow-hidden
        "
                >

                    <div className="px-4 py-3 border-b border-white/20">
                        <p className="text-lg text-white/70 text-center">Name : {session?.user?.name}</p>

                    </div>


                    <div className="py-1">
                        <Link
                            href="/dashboard"
                            className="
                    flex items-center justify-center
                    px-4 py-2.5
                    text-sm font-medium
                    text-white
                    hover:bg-white/10
                    transition
                "
                        >
                            Dashboard
                        </Link>
                    </div>


                    <div className="w-full flex items-center justify-center px-4 py-3 border-t border-white/20">
                        <button
                            onClick={handleLogout}
                            className="
                 px-5 py-2  bg-red-500  text-white  font-semibold  hover:bg-red-600  active:scale-95  transition-all  duration-200  focus:outline-none  focus:ring-2  focus:ring-red-40 rounded "
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}


        </div>
    )
}

export default ProfileMenu
