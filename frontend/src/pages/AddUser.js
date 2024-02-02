import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');
    const nav = useNavigate();

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        const req = { id, email, firstName, lastName };
        let response = await fetch('http://localhost:5000/users/', {
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
        <div className="home">
            <form className="form" onSubmit={handleUserSubmit}>
                <p>Enter the Student/User ID</p>
                <input type="number" 
                required
                value={id}
                onChange={(e) => setId(e.target.value)}/>
                <p>Enter the Student Email</p>
                <input type="text" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <p>Enter the Student's First Name</p>
                <input type="text" 
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
                <p>Enter the Student's Last Name</p>
                <input type="text" 
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
                <button className="button">Add</button>
            </form>
            <p>{error}</p>
        </div>
     );
}
 
export default AddUser;