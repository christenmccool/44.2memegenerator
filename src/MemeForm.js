import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
import { v4 as uuid } from 'uuid';
import './MemeForm.css'

const MemeForm = ({addMeme}) => {
  const initialState = {
    url: "",
    top: "",
    bottom: ""
  }
  const [formData, setFormData] = useState(initialState);

  // const dispatch = useDispatch();
  // const addMeme = (meme) => dispatch({ type: "ADD_MEME", payload: meme });

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const id = uuid();
    addMeme({...formData, id});
    setFormData(initialState);
  }

  return (
    <div className="MemeForm">
      <form className="MemeForm-form" onSubmit={handleSubmit}>
        <div className="MemeForm-group">
          <label className="MemeForm-label" htmlFor="url">Url:</label>
          <input className="MemeForm-input" id="url" name="url" onChange={handleChange} value={formData.url} />
        </div>
        <div className="MemeForm-group">
          <label className="MemeForm-label" htmlFor="Top">Top:</label>
          <input className="MemeForm-input" id="top" name="top" onChange={handleChange} value={formData.top} />
        </div>
        <div className="MemeForm-group">
          <label className="MemeForm-label" htmlFor="bottom">Bottom:</label>
          <input className="MemeForm-input" id="bottom" name="bottom" onChange={handleChange} value={formData.bottom} />
        </div>
        <div className="MemeForm-group">
          <button type="submit" className="MemeForm-button">Make meme</button>
        </div>
      </form>
    </div>
  )
}

export default MemeForm;