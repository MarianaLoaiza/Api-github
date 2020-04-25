import React, {useState,useEffect} from 'react';



import Pagination from './components/Pagination'
import Posts from './components/Posts'
import Form from './components/Form'
import Error from './components/Error'
import Nadvar from './components/Nadvar'
import axios from "axios";



const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [github, setGithub] = useState('');
  const [error, setError] = useState(false);

 
    

     

  const datosConsulta = datos => {
    console.log("holaa" + datos)
    if(datos.github === ''){
      console.log("Vacioooo")
      setError(true);
      return;
    }
    setGithub(datos.github);
    setError(false);
    console.log(github)
    

    
  }

  
  useEffect( () => {
   
    if(github === '') return;
    
    const fetchPosts = async () => {
      setLoading(true);
      console.log(github)
      const res = await axios.get(`https://api.github.com/users/${github}/repos`)
    setPosts(res.data);
    setLoading(false);
    }

    fetchPosts();
  }, [github])
    
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  

  let componente;
    if(error){
      componente = <Error mensaje='El usuario de Github es obligatorio ' />
    }else{
    componente = null;
      
  
  }
  

  return(
    <div>
      <p>{name}</p>
      <Nadvar posts={currentPosts} />

      <Form 
        datosConsulta={datosConsulta}
      />
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate}
        
      />
      <div>{componente}</div>

    </div>
  )

};
export default App;