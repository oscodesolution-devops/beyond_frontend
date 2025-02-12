import { useState, useEffect } from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const UpdateCourse = ({ itemdata }) => {
  const token = localStorage.getItem("token");

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');
  const [duration, setDuration] = useState('');
  const [meet, setMeet] = useState('');
  
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [week, setWeek] = useState([{ value: '' }]);
  const [classDetail, setClassDetail] = useState([{ value: '' }]);
  const [classkey, setClassKey] = useState([{ value: '' }]);

  // Load existing course data into state
  useEffect(() => {
    if (itemdata) {
      setTitle(itemdata.title || '');
      setDescription(itemdata.description || '');
      setPrice(itemdata.price || '');
      setContent(itemdata.content || '');
      setDuration(itemdata.duration || '');
      setMeet(itemdata.link || '');
      setFile(itemdata.images || null);
      setInputFields(itemdata.keypoint ? itemdata.keypoint.map(k => ({ value: k })) : [{ value: '' }]);
      setWeek(itemdata.week ? itemdata.week.map(w => ({ value: w })) : [{ value: '' }]);
      setClassDetail(itemdata.classDetails ? itemdata.classDetails.map(c => ({ value: c })) : [{ value: '' }]);
      setClassKey(itemdata.classkey ? itemdata.classkey.map(c => ({ value: c })) : [{ value: '' }]);
    }
  }, [itemdata]);

  const handleChange = (index, event, type) => {
    let values;
    switch (type) {
      case 1: values = [...inputFields]; values[index].value = event.target.value; setInputFields(values); break;
      case 2: values = [...week]; values[index].value = event.target.value; setWeek(values); break;
      case 3: values = [...classDetail]; values[index].value = event.target.value; setClassDetail(values); break;
      case 4: values = [...classkey]; values[index].value = event.target.value; setClassKey(values); break;
      default: break;
    }
  };

  const handleAddField = (type) => {
    switch (type) {
      case 1: setInputFields([...inputFields, { value: '' }]); break;
      case 2: setWeek([...week, { value: '' }]); break;
      case 3: setClassDetail([...classDetail, { value: '' }]); break;
      case 4: setClassKey([...classkey, { value: '' }]); break;
      default: break;
    }
  };

  const handleRemoveField = (index, type) => {
    let values;
    switch (type) {
      case 1: values = [...inputFields]; values.splice(index, 1); setInputFields(values); break;
      case 2: values = [...week]; values.splice(index, 1); setWeek(values); break;
      case 3: values = [...classDetail]; values.splice(index, 1); setClassDetail(values); break;
      case 4: values = [...classkey]; values.splice(index, 1); setClassKey(values); break;
      default: break;
    }
  };

  const fileHandler = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Updating Course...");
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('content', content);
    formData.append('duration', duration);
    formData.append('link', meet);
    if (file) formData.append('thumbnail', file);
    inputFields.forEach(field => formData.append('keypoint', field.value));
    week.forEach(field => formData.append('week', field.value));
    classDetail.forEach(field => formData.append('classDetails', field.value));
    classkey.forEach(field => formData.append('classkey', field.value));

    try {
      await axios.put(`http://localhost:4000/admin/courseUpdate/${itemdata._id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Course Updated Successfully");
    } catch (error) {
      console.error("Error in Updating:", error);
      toast.error("Update Failed");
    }
    toast.dismiss(toastId);
  };

  return (
    <div className="w-full h-[100vh] overflow-y-scroll">
      <h2 className="text-center text-blue-400 font-bold pt-12 text-2xl uppercase mb-10">Update Course</h2>
      <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">Course Thumbnail</label>
            <input onChange={fileHandler} type="file" className="border border-gray-300 shadow p-3 w-full rounded" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">Course Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="border border-gray-300 shadow p-3 w-full rounded" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">Description</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="border border-gray-300 shadow p-3 w-full rounded" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">Content</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className="border border-gray-300 shadow p-3 w-full rounded"></textarea>
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">Price</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="border border-gray-300 shadow p-3 w-full rounded" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">Duration (Year)</label>
            <input value={duration} onChange={(e) => setDuration(e.target.value)} type="text" className="border border-gray-300 shadow p-3 w-full rounded" />
          </div>

          {/* Dynamic Fields for Key Highlights, Week Details, Class Details, and Class Key Points */}
          {[{ label: "Key Highlights", state: inputFields, type: 1 }, { label: "Week Details", state: week, type: 2 }, { label: "Class Details", state: classDetail, type: 3 }, { label: "Class Key Points", state: classkey, type: 4 }]
            .map(({ label, state, type }) => (
              <div key={type}>
                <label className="block mb-2 font-bold text-gray-600">{label}</label>
                {state.map((field, index) => (
                  <div key={index} className="mb-2">
                    <input value={field.value} onChange={(e) => handleChange(index, e, type)} type="text" className="border border-gray-300 shadow p-3 w-[80%] rounded" />
                    <button type="button" onClick={() => handleRemoveField(index, type)}><MdOutlineRemoveCircle size={"30px"} /></button>
                  </div>
                ))}
                <button type="button" onClick={() => handleAddField(type)}><IoIosAddCircle size={"35px"} color={'#CA2953'} /></button>
              </div>
            ))}
          <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
