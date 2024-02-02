import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePublication = () => {
    const [id, setId] = useState('');
    const [student_id, setStudentId] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [error, setError] = useState('');
    const nav = useNavigate();
    const { pid } = useParams();

    const handlePublicationSubmit = async (e) => {
        e.preventDefault();
        const req = {};
        if (id) req.id = id;
        if (student_id) req.student_id = student_id;
        if (title) req.title = title;
        if (year) req.year = year;
        console.log(req);
        let response = await fetch('http://localhost:5000/publications/' + pid, {
            method: 'PATCH',
            body: JSON.stringify(req),
            headers: {'Content-Type': 'application/json'}
        });
        let json = await response.json();
        if(response.ok){
            console.log(json);
            nav('/');
        }
        else{
            setError(json);
        }
    }

    return ( 
        <div className="home">
            <form className="form" onSubmit={handlePublicationSubmit}>
                <p>Enter the new Publication ID</p>
                <input type="number" 
                value={id}
                onChange={(e) => setId(e.target.value)}/>
                <p>Enter the new Student ID</p>
                <input type="number" 
                value={student_id}
                onChange={(e) => setStudentId(e.target.value)}/>
                <p>Enter the new Publication Title</p>
                <input type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                <p>Enter the new Publication Year</p>
                <input type="number" 
                value={year}
                onChange={(e) => setYear(e.target.value)}/>
                <button className="button">Update</button>
            </form>
            <p>{error}</p>
        </div>
     );
}
 
export default UpdatePublication;