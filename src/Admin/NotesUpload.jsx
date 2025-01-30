import React, { useState, useEffect } from 'react';
import { makeUnauthenticatedGETRequest,makeAuthenticatedPOSTRequest } from '../Helper/ServerHelper';
import { endPoint } from '../Helper/Apis';
import {adminPoint} from '../Helper/Apis';
const NotesUpload = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [error, setError] = useState('');
  const [course, setCourse] = useState([]);
  const token = localStorage.getItem("token");

  const getAllCourse = async () => {
    try {
      const response = await makeUnauthenticatedGETRequest(endPoint.ALLCOURSE_API);
      if (response.status === 200) {
        setCourse(response.data.course);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type !== 'application/pdf') {
      setError('Only PDF files are allowed');
      setFile(null);
    } else {
      setError('');
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !file || !selectedCourse) {
      setError('All fields are required');
      return;
    }

    const formData = new FormData();
    formData.append('pdfFile', file);
    formData.append('title', title);
    formData.append('course', selectedCourse);
    try {
      const res = await makeAuthenticatedPOSTRequest(token,adminPoint.UPLOAD_NOTES,formData);
      if (res.status === 201) {
        alert('PDF uploaded successfully!');
      }
      setError('');
      setTitle('');
      setFile(null);
      setSelectedCourse('');
    } catch (error) {
      setError('Upload failed. ' + (error.response?.data || error.message));
    }
  };

  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <div className='container flex items-center justify-center h-screen w-full'>
      <div className='h-[60%] p-12 bg-gray-200 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Upload Course Notes</h2>
        {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className='mb-4'>
            <label htmlFor='title' className='block text-sm font-medium text-gray-700'>Title</label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              placeholder='Enter the title of the notes'
            />
          </div>
          
          {/* File Input */}
          <div className='mb-4'>
            <label htmlFor='file' className='block text-sm font-medium text-gray-700'>Upload PDF</label>
            <input
              type='file'
              id='file'
              accept='application/pdf'
              onChange={handleFileChange}
              className='mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-gray-700 file:bg-gray-100 hover:file:bg-gray-200'
            />
          </div>

          {/* Course Selection */}
          <div className='mb-6'>
            <label htmlFor='course' className='block text-sm font-medium text-gray-700'>Course</label>
            <select
              id='course'
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            >
              <option value=''>Select a course</option>
              {course.map((course) => (
                <option key={course._id} value={course._id}>{course.title}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotesUpload;
