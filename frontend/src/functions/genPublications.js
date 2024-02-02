const genPublications = async (e, setPublications) => {
    let response = await fetch('http://localhost:5000/publications/'+ e.target.value);
    let json = await response.json();
    if(response.ok){
        console.log("Publications fetched");
        setPublications(json);
    }
    else{
        setPublications([]);
    }
}
 
export default genPublications;