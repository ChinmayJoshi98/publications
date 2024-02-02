import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPublication = ({users}) => {
    const [id, setId] = useState('');
    const [student_id, setStudentId] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [error, setError] = useState('');
    const nav = useNavigate();

    const handlePublicationSubmit = async (e) => {
        e.preventDefault();
        const req = { id, student_id, title, year };
        let response = await fetch('http://localhost:5000/publications/', {
            method: 'POST',
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
        <div className="home2">
            <form className="form" onSubmit={handlePublicationSubmit}>
                <p>Enter the Publication ID</p>
                <input type="number" 
                required
                value={id}
                onChange={(e) => setId(e.target.value)}/>
                <p>Enter the Student ID</p>
                {/* <input type="number" 
                required
                value={student_id}
                onChange={(e) => setStudentId(e.target.value)}/> */}
                <select value={student_id} onChange={(e) => setStudentId(e.target.value)}>
                    {users && users.map((item, index) => {return <option value={item.id} key={item._id}>{item.id}</option>})}
                </select>
                <p>Enter the Publication Title</p>
                <input type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                <p>Enter the Publication Year</p>
                <input type="number" 
                required
                value={year}
                onChange={(e) => setYear(e.target.value)}/>
                <button className="button">Add</button>
            </form>
            <p>{error}</p>
        </div>
     );
}
 
export default AddPublication;