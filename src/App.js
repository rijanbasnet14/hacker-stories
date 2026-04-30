import logo from './logo.svg';
import './App.css';

function App() {
  const list = [
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
  ]
  return (
    <div>
     <header>My Hacker Stories</header>

     <label htmlFor='search'>Search: </label>
     <input id="search" type="text" />

      <hr/>
      <ul>
        {list.map(function(item) {
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
    </div>
  );
}

export default App;
