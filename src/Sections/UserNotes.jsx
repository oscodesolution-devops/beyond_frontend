import { useState, useEffect } from 'react';

const UserNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Simulated data (Replace with actual API call)
        const fetchedNotes = [
            { id: 1, title: 'React Basics', link: 'https://example.com/react-basics.pdf', course: 'React' },
            { id: 2, title: 'Node.js Guide', link: 'https://example.com/nodejs-guide.pdf', course: 'Node.js' },
            { id: 3, title: 'Python Essentials', link: 'https://example.com/python-essentials.pdf', course: 'Python' },
        ];
        setNotes(fetchedNotes);
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Course Notes</h2>
            {notes.length === 0 ? (
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
            )}
        </div>
    );
};

export default UserNotes;
