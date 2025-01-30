import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../Sections/Profile.css"
import { useNavigate } from "react-router-dom";
import NavDashboard from './adminDashboard';
import AdminCourse from './AdminCourse'
import AllCourses from './AllCourses'
import { makeUnauthenticatedGETRequest } from '../Helper/ServerHelper'
import { endPoint } from '../Helper/Apis'
import Student from './Student';
import Purchase from './Purchase';
import Liveclass from './Liveclass';
import NotesUpload from './NotesUpload';



const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([])
    const [userId, setUserId] = useState([])
    const [parchaseData, setParchaseData] = useState([])
    const [course, setCourse] = useState([])
    const [toggle, setToggle] = useState(false)
    const [admin, setAdmin] = useState();
    const [navLink, setNavlink] = useState("dashboard");


    const logout = () => {
        localStorage.removeItem("token");
        window.open(`http://localhost:4000/logout`, "_self")
    }




    const handler = (section) => {
        setNavlink(section);
    }


    useEffect(() => {
    }, [])

    useEffect(() => {
        if (admin) {
            navigate('/admin')
        }
    }, [admin])

    return (
        <>
            <div>
                <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                    <div className="navbar  show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                        <div className="container-fluid ">
                            <div>
                                <ul className="navbar-nav">
                                    <div className="cursor-pointer text-[#fff]  font-sans font-semibold xl:text-[30px] text-[25px] px-4 py-1 flex flex-wrap items-center gap-6">
                                        <span className="text-black -mb-4">Welcome </span><br />
                                        <span className="text-theme-200 -mr-5">{userData.name} </span>
                                    </div>
                                    <li className="nav-item" onClick={() => handler("dashboard")}>
                                        <a className="nav-link" href="#">
                                            <i className="bi bi-house"></i> Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item cursor-pointer" onClick={() => handler("course")}>
                                        <a className="nav-link">
                                            <i className="bi bi-bar-chart"></i> All Courses
                                        </a>
                                    </li>
                                    <li className="nav-item cursor-pointer" onClick={() => handler("liveclass")}>
                                        <a className="nav-link">
                                            <i className="bi bi-chat"></i> Live Classes
                                            {/* <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span> */}
                                        </a>
                                    </li>
                                    <li className="nav-item cursor-pointer  " onClick={() => handler("Addnotes")}>
                                        <a className="nav-link" href="#">
                                            <i className="bi bi-bookmarks"></i>Notes
                                        </a>
                                    </li>
                                    <li className="nav-item" onClick={() => handler("purchase")}>
                                        <a className="nav-link" href="#">
                                            <i className="bi bi-bookmarks"></i>Purchases
                                        </a>
                                    </li>
                                    <li className="nav-item" onClick={() => handler("student")}>
                                        <a className="nav-link" href="#">
                                            <i className="bi bi-people"></i> Students
                                        </a>
                                    </li>
                                    <li className="nav-item" onClick={logout}>
                                        <a className="nav-link">
                                            <i className="bi bi-box-arrow-left"></i> Logout
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <Link className="navbar-nav"  >
                                    <button onClick={() => handler("account")} className="bg-theme-200 text-white w-[70%] ml-6  rounded py-2 px-6 md:px-12 transition-colors duration-300">Add Course</button>


                                </Link>
                            </div>
                        </div>
                    </div>

                    {navLink === "dashboard" && (
                        <NavDashboard />

                    )}

                    {navLink === "course" && (<AllCourses />
                    )}

                    {navLink === "account" && (<AdminCourse />)}
                    {navLink === "student" && (<Student />)}
                    {navLink === "purchase" && (<Purchase />)}
                    {navLink === "liveclass" && (<Liveclass />)}
                    {navLink === "Addnotes" && (<NotesUpload />)}
                </div>
            </div>

            {/* Model */}
            <>
                <div className="fixed z-[999999] overflow-y-auto top-0 w-full left-0 ">
                    <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0"></div>
                </div>
            </>
        </>
    )
}

export default Profile
