import React from 'react';
import {useDispatch} from 'react-redux';
import './Meme.css';

const Meme = ({id, url, top, bottom}) => {
  const dispatch = useDispatch();
  const handleClick = (evt) => {
    dispatch({type:"REMOVE_MEME", id})
  }

  return (
    <div className="Meme">
      <img className="Meme-img" src={url} alt="meme" />
      {/* <button className="Meme-btn" onClick={handleClick}>X</button>  */}
      <div className="Meme-top-caption">{top}</div>
      <div className="Meme-bottom-caption">{bottom}</div>
      <div className="Meme-remove-div" onClick={handleClick}>X</div>
    </div>
  )
}

export default Meme;