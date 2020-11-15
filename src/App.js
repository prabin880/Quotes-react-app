import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {next} from './actions';
import Quotes from './components/Quotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr} from '@fortawesome/free-brands-svg-icons'

function App() {
  const quotes = useSelector(state => state.array);
  const colour = useSelector(state => state.colour);
  const dispatch = useDispatch();  

  return (
    <div className= "container" style={{backgroundColor: colour.color, transition: 'background-color 2s ease'}}>
      <div className= "App">          
            <Quotes />          
        <div className= "move">
          <button className= "social-button" id="tumblr" style={{backgroundColor: colour.color, transition: 'background-color 2s ease'}}><FontAwesomeIcon icon={faTumblr}/></button>
          <button className= "social-button" style={{backgroundColor: colour.color, transition: 'background-color 2s ease'}}><FontAwesomeIcon icon={faTwitter}/></button>
          <button style={{backgroundColor: colour.color, transition: 'background-color 2s ease'}} className= "button" id= "main-button" onClick={() => dispatch(next(quotes))}>New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
