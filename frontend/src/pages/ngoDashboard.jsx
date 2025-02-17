import React, { useEffect, useState } from 'react';
import NgoHeader from '../components/NgoHeader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function NGODashboard() {
  const [student, setStudent] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    const students = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          authorization: `${token}`,
        },
      };
      try {
        const response = await axios.get('http://localhost:3000/ngo/home', config);
        console.log(response.data);
        setStudent(response.data);
        console.log(response.data);
      } catch (error) {
        alert('Error:', error);
      }
    }
    students();
  }, [])
  return (
    <div>
      <NgoHeader />
      <div className='bg-navy h-screen text-white border'>
        <div className=''>
          <div className=''>
            {student.map((student) =>
            (
              <div onClick={()=>{
                navigate(`/student/${student._id}`)
              }} key={student._id} className='bg-amber-600 text-black rounded-xl w-1/3 mb-2 mt-2 border border-black pl-2 py-2 ml-2'>
                <h1>Name:-{student.name}</h1>
                <h1>Email:-{student.email}</h1>
                <h1>Address:-{student.address}</h1>
                <h1>Contact:-{student.contact}</h1>
                <h1>Age:-{student.age}</h1>
              </div>
            )
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default NGODashboard;
