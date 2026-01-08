import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"


interface ProfileMenuProps {

    handleLogout: () => void
}

const ProfileMenu = ({ handleLogout }: ProfileMenuProps) => {
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
                <div className="absolute -right-18 mt-3 w-44 bg-white/10 backdrop-blur-xl border rounded-lg shadow-lg z-50">


                    <button
                        onClick={handleLogout}
                        className="w-full  px-4 py-2 font-medium text-center hover:cursor-pointer "
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProfileMenu
