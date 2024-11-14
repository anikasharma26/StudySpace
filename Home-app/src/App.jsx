import React from 'react';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Youtube from "./Youtube.jsx"
import VideoPlayer from './VideoPlayer.jsx';
import Todo from './Todo.jsx';

function App() {

  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Youtube/>} />
        <Route path="/video/:videoUrl" element={<VideoPlayer/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
