import { useState, useEffect } from 'react';
import axios from 'axios';
const UserNotes = () => {
    const [UserNotes, setUserNotes] = useState([]);

    const fetchUsernotes = async () => {
        try {
            const _Data = {token:localStorage.getItem('token')};
            if (!_Data) {
                console.error("No token found");
                return;
            }
            // const res = await makeAuthenticatedGETRequest(_Data, endPoint.GET_LIVE_SESSION_OF_STUDENT);
            const res = await  axios.post("http://localhost:4000/api/auth/getNotesofjoinedcourse", {_Data})
            if(res.status === 200) {
                setUserNotes(res?.data);
            }
        } catch (error) {console.error("Error fetching data:", error);}
    };
    
    useEffect(() => {
        fetchUsernotes();
    }, []);
    console.log('this is the users notes',UserNotes)

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Course Notes</h2>
            {/* {notes.length === 0 ? (
                <p className="text-center text-gray-600">No notes available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note) => {
                        // Extract the filename from the link
                        const fileName = note.link.split('/').pop();

                        return (
                            <div key={note.id} className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold">{note.title}</h3>
                                <p className="text-sm text-gray-600">Course: {note.course}</p>
                                <p className="text-sm text-gray-800 mt-2">File: {fileName}</p>
                                <div className="mt-2">
                                    <a
                                        href={note.link}
                                        download
                                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )} */}
        </div>
    );
};

export default UserNotes;
