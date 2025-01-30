import { useState, useEffect } from 'react'
import { makeAuthenticatedGETRequest, makeUnauthenticatedGETRequest } from '../Helper/ServerHelper';
import { endPoint } from '../Helper/Apis';
import { Link } from 'react-router-dom';
import "./Profile.css"
import { useNavigate } from "react-router-dom";
import NavDashboard from '../Profile/NavDashboard';
import NavCourse from '../Profile/NavCourse';
import Account from '../Pages/Account';
import Userliveclass from './Userliveclass';
import UserNotes from './userNotes';

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([])
  const [userId, setUserId] = useState([])
  const [parchaseData, setParchaseData] = useState([])
  const [course, setCourse] = useState([])
  const [toggle, setToggle] = useState(false)
  const [admin, setAdmin] = useState();
  const [navLink, setNavlink] = useState("dashboard");

  const token = localStorage.getItem("token");


  const logout = () => {
    localStorage.removeItem("token");
    window.open(`http://localhost:4000/logout`, "_self")
  }

  const userDataGet = async () => {
    try {
      const response = await makeAuthenticatedGETRequest(token, endPoint.GET_ALL_USER);
      setUserData(response?.data?.msg)
      setAdmin(response?.data?.msg?.isAdmin)
      setUserId(response?.data?.msg)
      const purchase = await makeAuthenticatedGETRequest(token, endPoint.PURCHASES);
      setParchaseData(purchase?.data)
      const course = await makeUnauthenticatedGETRequest(endPoint.ALLCOURSE_API);
      setCourse(course?.data?.course)
    }
    catch (error) {
      alert('Error in getting data')
    }
  }

  const handler = (section) => {
    setNavlink(section);
  }


  useEffect(() => {

    userDataGet().catch((error) => {
      console.error('Error in getting data:', error);
      // You can add additional error handling here if needed
    });
  }, []);

  useEffect(() => {
    if (admin) {
      navigate('/admin')
    }
  }, [admin])

  return (
    <>
      <div>
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          <div className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
            <div className="container-fluid ">
              <div>
                <ul className="navbar-nav">
                  <div className="cursor-pointer text-[#fff]  font-sans font-bold xl:text-[30px] text-[25px] px-4 py-1 flex flex-wrap items-center gap-6">
                    <span className="text-black ">Welcome</span>
                    <span className="text-theme-200 ">{userData?.name} </span>
                  </div>
                  <Link to={"/"} className="nav-item">
                    <a className="nav-link cursor-pointer" href="#">
                      <i className="bi bi-house"></i> Home
                    </a>
                  </Link>
                  <li className="nav-item cursor-pointer" onClick={() => handler("dashboard")}>
                    <a className="nav-link" href="#">
                      <i className="bi bi-house"></i> Dashboard
                    </a>
                  </li>
                  <li className="nav-item cursor-pointer" onClick={() => handler("course")}>
                    <a className="nav-link">
                      <i className="bi bi-bar-chart"></i> Course
                    </a>
                  </li>
                  <li className="nav-item cursor-pointer" onClick={() => handler("userliveclass")}>
                    <a className="nav-link">
                      <i className="bi bi-chat"></i> Live Sessions
                      {/* <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span> */}
                    </a>
                  </li>
                  <li className="nav-item cursor-pointer" onClick={() => handler("userNotes")}>
                    <a className="nav-link" href="#">
                      <i className="bi bi-bookmarks"></i>Notes
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Link className="navbar-nav" onClick={() => handler("account")}>
                  <li className="nav-item">
                    <a className="nav-link">
                      <i className="bi bi-person-square"></i> Account
                    </a>
                  </li>
                  <li className="nav-item" onClick={logout}>
                    <a className="nav-link">
                      <i className="bi bi-box-arrow-left"></i> Logout
                    </a>
                  </li>
                </Link>
              </div>
            </div>
          </div>

          {navLink === "dashboard" && (
            <NavDashboard course={course} data={parchaseData} />
          )}

          {navLink === "course" && (<NavCourse course={course} data={parchaseData} />
          )}

          {navLink === "account" && (<Account user={userId} />)}
          {navLink === "userliveclass" && (<Userliveclass />)}
          {navLink === "userNotes" && (<UserNotes />)}
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
