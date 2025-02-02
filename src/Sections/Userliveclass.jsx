import { useState, useEffect } from 'react';
import axios from 'axios';
const Userliveclass = () => {
    const [liveClasses, setLiveClasses] = useState([]);
    const [copiedId, setCopiedId] = useState(null);
    // const [purchasehist,setpurchasehist] = useState(null);
    const fetchLiveSession = async () => {
        try {
            const _Data = {token:localStorage.getItem('token')};
            if (!_Data) {
                console.error("No token found");
                return;
            }
            // const res = await makeAuthenticatedGETRequest(_Data, endPoint.GET_LIVE_SESSION_OF_STUDENT);
            const res = await  axios.post("http://localhost:4000/api/auth/getliveclassofstudent", {_Data})
            if(res.status === 200) {
                setLiveClasses(res?.data?.liveSessions);
            }
        } catch (error) {console.error("Error fetching data:", error);}
    };
    
    // useEffect(() => {
    //     fetchLiveSession();
    // }, []);
    useEffect(() => {
        // const fetchedClasses = [
        //     { id: 1, title: 'React Basics', link: 'https://example.com/react', course: 'React' },
        //     { id: 2, title: 'Node.js Crash Course', link: 'https://example.com/nodejs', course: 'Node.js' },
        //     { id: 3, title: 'Python for Beginners', link: 'https://example.com/python', course: 'Python' },
        // ];
        // setLiveClasses(fetchedClasses);
        fetchLiveSession();
    }, []);

    const copyToClipboard = (link, id) => {
        navigator.clipboard.writeText(link);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };
    console.log("this is live classs to render",liveClasses)
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Live Classes</h2>
            {liveClasses.length === 0 ? (
                <p className="text-center text-gray-600">No live classes available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {liveClasses?.map((liveClass) => (
                        <div key={liveClass.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">{liveClass.title}</h3>
                            <p className="text-sm text-gray-600">Course: {liveClass?.courseId?.title}</p>
                            <div className='flex items-center justify-between gap-5 '>
                                <p className="text-gray-800 break-words ">{liveClass.link}</p>
                                <button
                                    onClick={() => copyToClipboard(liveClass.link, liveClass.id)}
                                    className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                                >
                                    {copiedId === liveClass.id ? "Copied!" : "Copy Link"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Userliveclass;
