import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const stories = [
      {
   title:'React',
   url: 'https://react.js.org/',
   author: 'Jordan Walke',
   num_comments: 3,
   points: 4,
   objectID:0,
    },
     {
   title:'Redux',
   url: 'https://react.js.org/',
   author: 'Dan Abramov, Andrew Clark',
   num_comments: 2,
   points: 5,
   objectID:1,
    },
  ];
  
  return (
    <div>
     <header>My Hacker Stories</header>

     <Search />

      <hr/>
      <List  list={stories}/>
      
      
    </div>
  );
}

function List(props) {
  return(
<ul>
        {props.list.map(function(item) {
          return ( <li key= {item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>  
            </li> );
        })}
      </ul>
  );
}

function Search() {
   const [searchItem, setSearchTerm] = React.useState('');

  const handleChange =(event) =>{
    setSearchTerm(event.target.value);
  }
  return  (
    <div>
      <label htmFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
      <p> 
        Searching for <strong>{searchItem}</strong>.
      </p>
    </div>
  );
}

export default App;
