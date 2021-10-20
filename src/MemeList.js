import React from 'react';
import {useSelector} from 'react-redux';
// import {useSelector, useDispatch} from 'react-redux';
import Meme from './Meme';
import './MemeList.css';

const MemeList = () => {
  const memes = useSelector(store => store.memes);
  // const dispatch = useDispatch();

  return (
    <div className="MemeList">
      {memes.map(meme => 
        <Meme key={meme.id} id={meme.id} url={meme.url} top={meme.top} bottom={meme.bottom}/>
      )}
    </div>
  )
}

export default MemeList;