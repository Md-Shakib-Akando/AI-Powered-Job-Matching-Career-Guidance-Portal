import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { Session } from "next-auth"

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
                <div className="absolute -right-18 mt-3 w-44 bg-[#124271] border border-white/20 rounded-xl shadow-lg z-50 overflow-hidden">
                    <p className="px-4 py-3 font-medium text-center text-white border-b border-white/20">
                        Name : {session?.user?.name}
                    </p>

                    <button
                        onClick={handleLogout}
                        className="
                w-full
                px-4
                py-2.5
                bg-red-500
                text-white
                font-semibold
                rounded-b-xl
                hover:bg-red-600
                active:scale-95
                transition-all
                duration-200
                focus:outline-none
                focus:ring-2
                focus:ring-red-400
            "
                    >
                        Logout
                    </button>
                </div>
            )}

        </div>
    )
}

export default ProfileMenu
