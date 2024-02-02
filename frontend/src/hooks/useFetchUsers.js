import { useEffect } from "react";

const useFetchUsers = (setUsers) => {
    useEffect(() => {
        const fetchUsers = async () => {
          let response = await fetch('http://localhost:5000/users/');
          let json = await response.json();
          if(response.ok)
          {
              setUsers(json);
          }
          else{
              console.log('No Users');
          }
        }
  
        fetchUsers();
      
        return () => {
          console.log('Cleanup function run')
        }
      }, [])
}
 
export default useFetchUsers;