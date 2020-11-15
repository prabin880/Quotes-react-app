import '../App.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { AnimateOnChange } from 'react-animation';

function Quotes() {
  const quotes = useSelector(state => state.array);
  const random = useSelector(state => state.random);
  const colour = useSelector(state => state.colour);
  const numRand = Math.floor(Math.random() * Math.floor(10));
  const colorr = { color: colour.color, transition: 'color 2s ease' };
  
  return (
    <div id="box">
      <AnimateOnChange animationIn ='fadeIn' animationOut='fadeOut' durationOut="3000">
        <p className= "quote" style= { colorr }><FontAwesomeIcon icon={ faQuoteLeft }/> { random === {} ? random.quote : quotes[numRand].quote }</p>
        <p className= "author" style= { colorr }>- { random === {} ? random.person : quotes[numRand].person }</p>  
      </AnimateOnChange>
          
    </div>
  );
}

export default Quotes;
