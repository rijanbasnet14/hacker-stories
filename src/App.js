import logo from './logo.svg';
import './App.css';

function App() {
const welcome = {
   greeting: 'Hey' ,
   title: 'React',
};
  return (
    <div>
     <header>{welcome.greeting} {welcome.title}</header>

     <label htmlFor='search'>Search: </label>
     <input id="search" type="text" />
    </div>
  );
}

export default App;
