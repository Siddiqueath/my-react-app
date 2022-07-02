import './App.css';
import {useState} from 'react';

export default function App() {
  let users = [
    {
      name: 'robert',
      pic: 'https://images.pexels.com/photos/5506894/pexels-photo-5506894.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'daniel',
      pic: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600'   
    },
    {
      name: 'chris',
      pic: 'https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];
  return (
    <div className="App">
      {users.map( user => <UserGrid name={user.name} pic={user.pic}/> )}
    </div>
   );
}
function Counter(){
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);
  return(
    <div>
      <button className='btn-like' onClick={()=>setLike(like+1)}>
        👍{like}
      </button>
      <button className='btn-dislike' onClick={()=>setDisLike(dislike+1)}>
        👎{dislike}
      </button>
    </div>
  );
}
function UserGrid({name, pic}){
  return(
    <div className='user-grid'>
      <img class='prof-pic' src={pic} alt={name}/>
      <h1>Hello! {name}</h1>
      <Counter/>
    </div>
  );
}