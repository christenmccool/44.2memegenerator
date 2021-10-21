import './App.css';
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";

import {useSelector, useDispatch} from 'react-redux';


function App() {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();

  const addMeme = (meme) => {
    dispatch({ type: "ADD_MEME", payload: meme });
  };
  
  const removeMeme = (id) => {
    dispatch({type:"REMOVE_MEME", id});
  };

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <MemeForm addMeme={addMeme}/>
      <MemeList memes={memes} removeMeme={removeMeme}/>
    </div>
  );
}

export default App;
