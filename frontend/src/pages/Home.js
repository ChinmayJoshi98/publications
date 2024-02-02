import { useEffect, useState } from "react";
import genPublications from "../functions/genPublications";
import { useNavigate } from "react-router-dom";
import useFetchUsers from "../hooks/useFetchUsers";
import AddPublication from "./AddPublication";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('def');
    const [publications, setPublications] = useState([]);
    const [pubId, setPubId] = useState('def');
    const [userSelected, setUserSelected] = useState(false);
    const [publicationSelected, setPublicationSelected] = useState(false);
    const [addPub, setAddPub] = useState(false);
    const nav = useNavigate();

    // useEffect(() => {
    //   const fetchUsers = async () => {
    //     let response = await fetch('http://localhost:5000/users/');
    //     let json = await response.json();
    //     if(response.ok)
    //     {
    //         setUsers(json);
    //     }
    //     else{
    //         console.log('No Users');
    //     }
    //   }

    //   fetchUsers();
    
    //   return () => {
    //     console.log('Cleanup function run')
    //   }
    // }, [])

    useFetchUsers(setUsers);

    const handleUser = (e, setPublications) => {
        console.log(e.target.value);
        setUserId(e.target.value);
        setUserSelected(true);
        genPublications(e, setPublications);
    }

    const handlePublication = (e) => {
        setPubId(e.target.value);
        setPublicationSelected(true);
    }

    const handlePublicationUpdate = (pid) => {
        console.log(pid);
        nav(`/updatePublication/${pid}`);
    }

    const handlePublicationDelete = async (pid) => {
        console.log("pid is: " + pid);
        let temp = publications.filter((item, index) => {return item.id != pid});
        let response = await fetch('http://localhost:5000/publications/' + pid, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        let json = await response.json();
        console.log(temp);
        if(response.ok){
            console.log(json);
            setPublications(temp);
            setPubId('def');
            setPublicationSelected(false);
        }
    }

    return ( 
        <div className="home">
            <h3>Select a User to view their Publications</h3>
            <select value={userId} onChange={(e) => handleUser(e, setPublications)}>
                <option value="def" disabled>Select a User</option>
                {users && users.map((item, index) => {return <option value={item.id} key={item._id}>{item.firstName} {item.lastName}</option>})}
            </select>
            {userSelected && publications && <select value={pubId} onChange={(e) => handlePublication(e)}>
                <option value="def" disabled>Select a Publication</option>
                {publications && publications.map((item, index) => {return <option value={item.id} key={item._id}>{item.title}</option>})}
            </select>}
            {publicationSelected && <div className="buttons">
                    <button className="button" onClick={() => handlePublicationDelete(pubId)}>Remove Publication</button>
                    <button className="button" onClick={() => handlePublicationUpdate(pubId)}>Update Publication</button>
                </div>}

            <button className="buttonAdd" onClick={() => setAddPub(true)}>Add a Publication</button>
            {addPub && <AddPublication users={users}/>}
        </div>
     );
}
 
export default Home;