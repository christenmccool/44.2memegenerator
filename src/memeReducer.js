const memesFromStorage = JSON.parse(localStorage.getItem('memes')) || [];

// const INITIAL_STATE = {memes: 
//                         [
//                           {id: 1,
//                             url:"https://www.cheatsheet.com/wp-content/uploads/2020/05/Steve-Carell.jpg",                          
//                             top:"No God!",
//                             bottom: "No please no!"},
//                           {id: 2,
//                             url:"https://i.redd.it/4nodbxs79u311.jpg",
//                             top:"No God!",
//                             bottom: "No please no!"}
//                         ]
//                       };

const INITIAL_STATE = {memes: memesFromStorage};

const memeReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MEME": {
      localStorage.setItem('memes', JSON.stringify([...state.memes, action.payload]));
      return {...state, 
              memes: [...state.memes, action.payload]};
      }
    case "REMOVE_MEME": {
      localStorage.setItem('memes', JSON.stringify(state.memes.filter(ele => ele.id !== action.id)));
      return {...state, 
              memes: state.memes.filter(ele => ele.id !== action.id)};
      }
    default: return state;
  }
}

export default memeReducer;