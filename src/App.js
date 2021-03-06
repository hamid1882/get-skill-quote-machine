import React, {useState, useEffect} from 'react';
import './App.scss';

let quoteDBUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function App() {
  const[quote, setQuote] = useState('Happiness is not what you will achieve, its all about what you already have!');
  const[author, setAuthor] = useState("hussain hafeez");
  const[, setRandomNumber] = useState(0);
  const[quotesArray, setQuotesArray] = useState(null);

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
    }
  
  useEffect(() => {
    fetchQuotes(quoteDBUrl)
  }, [])

  const getRandomQuote = () =>{
    let randomInteger = Math.floor(quotesArray.length*Math.random())
    setRandomNumber(randomInteger)
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <p id="text">
            <span>
            <img src="https://img.icons8.com/material-rounded/24/000000/quote-left.png"/>
            </span>
            {quote}"
          </p>
          <p id="author">
            ~ {author}
          </p>
          <div id="clickable-box">
          <a href="twitter.com/intent/tweet" id="tweet-quote" >
            <img src="https://img.icons8.com/fluency/48/000000/twitter.png" id="tweet-quote-img" alt="twitter icon"/>
            </a>
            <button id="new-quote" onClick={()=>getRandomQuote()}>Next Quote</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
