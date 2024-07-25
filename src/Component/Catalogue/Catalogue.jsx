import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import './Catalogue.css';

export default function Catalogue() {
  const [users, setUsers] = useState([]);
  const [searchTerms, setSearchTerms] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
        let response;
        if (searchTerms.length === 0) {
          response = await axios.post(`http://localhost:3000/user/${page}`);
        } else {
          response = await axios.post(`http://localhost:3000/user/${page}`, {
          terms: searchTerms

          });
        }

        if (response.data && Array.isArray(response.data.data)) {
          if (page === 1) {
            setUsers(response.data.data);
            setCount(response.data.data.length);

          } else {
            setUsers(users.concat(response.data.data));
            setCount(count + response.data.data.length);
          }

        } else {
          if (page === 1) {
            setUsers([]);
            setCount(0);
          }
        }

        setTotalCount(response.data.count);
      
    };
    fetchData();
  }, [searchTerms, page]);

  const addSearchTerm = (term) => {
    if (term && !searchTerms.includes(term.toLowerCase())) {
      setSearchTerms([...searchTerms, term.toLowerCase()]);
      setPage(1); 
    }

  };

  const removeSearchTerm = (term) => {
    const newSearchTerms = searchTerms.filter(t => t !== term);
    setSearchTerms(newSearchTerms);
    setPage(1); 

  };

  const loadMoreUsers = () => {
    setLoadingMore(true);
    setPage(page + 1);
    setLoadingMore(false);

  };

  return (
    <div>

      <SearchBar searchTerms={searchTerms} addSearchTerm={addSearchTerm} removeSearchTerm={removeSearchTerm} />

      <div className="user-list">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <img src={user.imageUrl} alt={`${user.firstName} ${user.lastName}`} />
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.jobTitle}</p>
            <p>{user.email}</p>
          </div>
        ))}

        {count < totalCount && (
          <div className="user-card load-more" onClick={loadMoreUsers}>
            Charger plus
          </div>

        )}
      </div>

      <div className='nb-users'>
        {count} / {totalCount}
      </div>
      
    </div>
  );
}
