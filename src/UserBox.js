import { useState, useEffect } from "react";
import './UserBox.css';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export default function UserBox() {
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
    },
    {
      name: 'joe',
      pic: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600'   
    }
  ];
  return (
    <div className="user-box">
      {users.map( user => <UserGrid name={user.name} pic={user.pic}/> )}
    </div>
   );
}

export function Counter(){
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);
  
  return(
    <div>
      <IconButton className='like' color="success" onClick={()=>setLike(like+1)} aria-label="delete">
        <Badge badgeContent={like} color="primary">👍 </Badge>
      </IconButton>
      <IconButton className='dislike' color="primary" onClick={()=>setDisLike(dislike+1)} aria-label="delete">
        <Badge badgeContent={dislike} color="error">👎 </Badge>
      </IconButton>
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

