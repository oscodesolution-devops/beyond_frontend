import { useState, useEffect } from 'react';
import { makeUnauthenticatedGETRequest, makeLiveClassLinkRequest } from '../Helper/ServerHelper'
import { endPoint, adminPoint } from '../Helper/Apis'


const Liveclass = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [error, setError] = useState('');
  const [course, setCourse] = useState([]);
  const token = localStorage.getItem("token")
  const getAllCourse = async () => {
    try {
      const response = await makeUnauthenticatedGETRequest(endPoint.ALLCOURSE_API);
      if (response.status === 200) {
        setCourse(response.data.course)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !link.trim() || !selectedCourse) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await makeLiveClassLinkRequest(token,adminPoint.CREATE_LIVE_CLASS,{ "title":title, "link":link ,"courseId":selectedCourse });
      if (response.status === 201) {
        alert("Submitted")
      }
    } catch (err) {
      setError('Please enter a valid URL.');
      return;
    }

    setError('');
    console.log('Submitted:', { title, link, selectedCourse });

    // Clear the form
    setTitle('');
    setLink('');
    setSelectedCourse('');
  };
  useEffect(() => {
    getAllCourse();

  }, [])
  console.log("8888888888888888888888888888888", course);
  console.log("title", title);
  console.log("link", link);
  console.log("selectedCourse", selectedCourse);

  return (
    <div className='container flex items-center justify-center h-screen w-full'>
      <div className="h-[60%] p-12 bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload Live Class</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the title of the live class"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Link
            </label>
            <input
              type="text"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the link to the live class"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Course
            </label>
            <select
              id="course"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a course</option>
              {course.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Liveclass;
