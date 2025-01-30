import React, { useEffect,useState } from 'react'
import { makeAuthenticatedGETRequest , makeAuthenticatedPOSTRequest } from '../Helper/ServerHelper'
import { endPoint } from '../Helper/Apis'
import {toast } from "react-toastify"
const Student = () => {
    const token = localStorage.getItem("token")
    const [user,setUser] = useState([])
    const [search,setSearch] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const [searchResult,setSearchResult] = useState([])
        const getAllCourse = async () => {
        try {
            const userRes = await makeAuthenticatedGETRequest(token,endPoint.GET_ALL_USERS);
            const gotuser = userRes.data.user.filter((item) => item.isAdmin === false)
            setUser(gotuser)
        } catch (error) {
            console.error(error);       
        }
    }

    useEffect(() => {
      getAllCourse();
    }, [])   
    
    const searchHandle = async (e) => {
               e.preventDefault();
               try {
                const res = await makeAuthenticatedGETRequest(token , `http://localhost:4000/admin/search/${search}`);
                if(res.status === 200) {
                    const searchgot = res.data.filter((item) => item.isAdmin === false);
                    setSearchResult(searchgot);  
                    setIsLoading(true)
                }
               
               } catch (error) {
                console.error("data not found");                
               }

    }

  return (
    <>
    <div className='w-screen'>
    <div className="card shadow border-0 mb-7">
                    <div className="card-header flex justify-between">
                        <h5 className="mb-0">Applications</h5>
                        <div>
                            <form onSubmit={searchHandle}>
                            <input onChange={(e)=>setSearch(e.target.value)}   type="text" placeholder="Search..." className="form-control search"/>
                            </form>
                        </div>
                    </div>

                    {isLoading ? (
                       <div className="table-responsive">
                        <table className="table table-hover table-nowrap">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile No.</th>                      
                                </tr>
                            </thead>
                         <tbody>

  <tr >
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                           {searchResult.name}
                                        </a>
                                    </td>
                                    <td>
                                        {searchResult.last}
                                    </td>
                                    <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                            {searchResult.email}
                                        </a>
                                    </td>
                                    <td>
                                       {searchResult.number}
                                    </td>
                                   
                            </tr>
                         
                         
                         </tbody>
                        </table>
                    </div>

                    ) : (
                         <div className="table-responsive">
                        <table className="table table-hover table-nowrap">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile No.</th>                      
                                </tr>
                            </thead>
                         <tbody>

                            {user.map((item , index)=>(
  <tr key={index}>
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                           {item.name}
                                        </a>
                                    </td>
                                    <td>
                                        {item.last}
                                    </td>
                                    <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                            {item.email}
                                        </a>
                                    </td>
                                    <td>
                                       {item.number}
                                    </td>
                                   
                            </tr>
                            ))}
                         
                         
                         </tbody>
                        </table>
                    </div>
                    )}
                   
                  
                </div>

    </div>
    </>
  )
}

export default Student