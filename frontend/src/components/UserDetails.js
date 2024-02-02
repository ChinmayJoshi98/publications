const UserDetails = ({user}) => {
    return ( 
        <div className="home2">
            <p>Student ID</p>
            <p>{user.id}</p>
        </div>
     );
}
 
export default UserDetails;