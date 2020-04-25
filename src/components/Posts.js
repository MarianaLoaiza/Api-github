import React,{useState, useEffect  } from 'react';
import "./styles/styles.css";




const posts = ({posts, loading}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(posts);
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };
    useEffect(() => {
        const results = posts.filter(posts => {
            return `${posts.name} `
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          });
       setSearchResults(results);

    //    return ({ query, setQuery, filteredBadges })
     }, [posts, searchTerm]);

    


    if(loading){
        return <h2>Loading..</h2>
    }


    return(
       <div>
              <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => {
            e.preventDefault();
            setSearchTerm(e.target.value);
          }}
      />

{/* {searchResults.map(posts => (
          <li>{posts.name}</li>
        ))}
       */}
           
            <table style={{margin: "auto"}} >
        <div>

        <nav style={{display: "flex"}} className="table-primary">
            <ul>Nombre</ul>
            <ul>Lenguaje</ul>
            <ul>Baranch</ul>
            <ul>Descripcion</ul>
            <ul style={{alignItems: "flex-end"}}>URL</ul>
        </nav>

        
        
        {searchResults.map(posts =>(
            

            <tbody  key={posts.id} >
                    <tr  >
                    <td > <strong>*</strong>  {posts.name} </td>
                    <td>  <strong>*</strong>  {posts.language}</td>
                    <td> <strong>*</strong> {posts.default_branch}</td>
                    <td >  <strong>*</strong> {posts.description} </td>
                    <td >  <strong>*</strong>  {posts.url }</td>
                    
                </tr>
                
                </tbody>
        
                    
                )) }

        </div>
           
        </table>
       </div>
    )
}

export default posts;