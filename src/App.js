import { useEffect, useState } from 'react';
import './App.css';
import Desh from './components/Countrys-app/Desh';
import Search from './components/Countrys-app/Search';


const url = "https://jsonplaceholder.typicode.com/posts";


function App() {

  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);
  const [filterPosts, setFilterPosts] = useState(posts);


  const fetchData = async (url) => {
    setIsLoding(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
      setFilterPosts(data);
      setIsLoding(false);
      setError(null);
    } catch (error) {
      setIsLoding(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const onRemovehandle = (title) => {
    const filtered = filterPosts.filter((filter) => filter.title !== title);
    setFilterPosts(filtered);
  }

  const handleSearchvalue = (searchValue) => {
   
    let value = searchValue.toLowerCase();
    const newPosts = posts.filter((post) => {
      const postTitle = post.title.toLowerCase();
      return  postTitle.startsWith(value);
    });
    setFilterPosts(newPosts);
  };

  return (
    <div>

      <h1>Fake Data</h1>
      <Search onSearch={handleSearchvalue}/>

      {isLoding && <p style={{ color: 'blue' }}>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      {posts && <Desh posts={filterPosts} onRemovehandle={onRemovehandle} />}


    </div>
  );
}

export default App;
