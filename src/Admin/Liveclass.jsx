import { useState } from 'react';

const Liveclass = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title.trim() || !link.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    // Check if the link is a valid URL
    try {
      new URL(link); // This will throw an error if the link is invalid
    } catch (err) {
      setError('Please enter a valid URL.');
      return;
    }

    // Reset error state
    setError('');

    // Submit the form data (you can replace this with your API call)
    console.log('Submitted:', { title, link });

    // Clear the form
    setTitle('');
    setLink('');
  };

  return (
    <div className='container flex items-center justify-center h-screen w-full'>
        <div className="h-[50%] p-10 bg-gray-200 rounded-lg shadow-md">
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
        <div className="mb-6">
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Upload Live Class
        </button>
      </form>
    </div>
    </div>
  );
};

export default Liveclass;