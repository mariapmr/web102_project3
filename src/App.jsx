import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  var cardPairs = [
    {name: 'Toy Freddy', image: 'https://www.pngkey.com/png/full/190-1902025_toy-freddy-freddy-png-toy-freddy.png'},
    {name: 'Toy Bonnie', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c31484fc-c65a-4c39-9eea-caa545f5bcde/dgjqbuf-55e5106d-4f41-4150-b01a-fd0c330b6e3d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzMTQ4NGZjLWM2NWEtNGMzOS05ZWVhLWNhYTU0NWY1YmNkZVwvZGdqcWJ1Zi01NWU1MTA2ZC00ZjQxLTQxNTAtYjAxYS1mZDBjMzMwYjZlM2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oIFEBBXmPiQk-TDrLvpPUr_RZctTcGSizBxnk1JU_yk'},
    {name: 'Toy Chica', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa300d45-dc10-455f-9669-82b42ce2bb59/demx3dh-5d66951b-58bd-4f9a-8278-305cac52fe15.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhMzAwZDQ1LWRjMTAtNDU1Zi05NjY5LTgyYjQyY2UyYmI1OVwvZGVteDNkaC01ZDY2OTUxYi01OGJkLTRmOWEtODI3OC0zMDVjYWM1MmZlMTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wmGWW__cBjUBCGdK0o0CVv0CgEYeZ2_GD6Z9cxS_0uw'},
    {name: 'Mangle', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12e9aefc-b502-422f-99ce-580ba78a7f7b/ddqwpi7-ec0a5fdd-b6c1-44c9-b464-42a00b7ee28d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyZTlhZWZjLWI1MDItNDIyZi05OWNlLTU4MGJhNzhhN2Y3YlwvZGRxd3BpNy1lYzBhNWZkZC1iNmMxLTQ0YzktYjQ2NC00MmEwMGI3ZWUyOGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CB1Fsu3GaoAXlNiiFo_BWIjqe_fyvoHoShWC3hUJsVw'},
    {name: 'Balloon Boy', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/52671c08-c1d4-443a-871c-2bbc036d9dbe/dejkt6i-5c5038af-6753-4e4f-905f-0a4edac9d2a5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyNjcxYzA4LWMxZDQtNDQzYS04NzFjLTJiYmMwMzZkOWRiZVwvZGVqa3Q2aS01YzUwMzhhZi02NzUzLTRlNGYtOTA1Zi0wYTRlZGFjOWQyYTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Kt_WiEW-T6_ZnqZcdDK2x7DCKvg837EATTuPUze9nK4'},
    {name: 'Marionette', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/52671c08-c1d4-443a-871c-2bbc036d9dbe/dejp7lx-f3b41122-a5f5-4658-994c-cbe0f1bfee98.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyNjcxYzA4LWMxZDQtNDQzYS04NzFjLTJiYmMwMzZkOWRiZVwvZGVqcDdseC1mM2I0MTEyMi1hNWY1LTQ2NTgtOTk0Yy1jYmUwZjFiZmVlOTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GkBh7x6ILqucWJ8TnBrLiBuolNRyVq82z2V-qg2lMfc'},
    {name: 'Withered Freddy', image: 'https://i.redd.it/12md1nnn8jd51.png'},
    {name: 'Withered Bonnie', image: 'https://i.redd.it/cmjitzy9bm8z.png'},
    {name: 'Withered Chica', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12e9aefc-b502-422f-99ce-580ba78a7f7b/ddtfzq1-84aaa0d2-d9e6-4a40-b636-9c85214267cf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyZTlhZWZjLWI1MDItNDIyZi05OWNlLTU4MGJhNzhhN2Y3YlwvZGR0ZnpxMS04NGFhYTBkMi1kOWU2LTRhNDAtYjYzNi05Yzg1MjE0MjY3Y2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.e8hdPcTHeNYVQsLrd2VRhKjuRH_UhyCpN0ZJpOxTL_s'},
    {name: 'Withered Foxy', image: 'https://i.redd.it/the-withered-animatronics-five-nights-at-freddys-2-v0-9al28kj1r7ye1.png?width=1080&format=png&auto=webp&s=aa57d9f51ec3a833dca490f005c1b265a1722466'},
    {name: 'Withered Golden Freddy', image: 'https://preview.redd.it/golden-freddy-merch-render-encyclopedia-v0-u52qu418ywfa1.png?auto=webp&s=ee797c20a672dd81e89a24d5c9e7c11bf6862fda'},
    {name: 'JJ', image: 'https://m.gjcdn.net/fireside-post-image/400/18651148-5mf4guqy-v4.webp'},
    {name: 'Endo-02', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1aa5d-0ed9-4be7-a792-891ac78b7464/dckvznp-7d9c2f9e-cb9b-4ae4-a389-2d033380dc2f.png/v1/fill/w_894,h_894,strp/endo_02_by_slime_led_dckvznp-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2FiYTFhYTVkLTBlZDktNGJlNy1hNzkyLTg5MWFjNzhiNzQ2NFwvZGNrdnpucC03ZDljMmY5ZS1jYjliLTRhZTQtYTM4OS0yZDAzMzM4MGRjMmYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.awCfA6c9VblDWoe1X35I9LpLiOcbRFFJgwWakWym2gE'},
    {name: 'Shadow Freddy', image: 'https://i.redd.it/f7ly6eec95d81.png'},
    {name: 'RWQFSFASXC or Shadow Bonnie', image: 'https://i.redd.it/x7123r2g9nf71.png'},
  ]

  const [input, setInput] = useState('');

  const [streakCount, setStreakCount] = useState(0);

  const [longestStreak, setLongestStreak] = useState(0);

  const [correctName, setCorrectName] = useState('');

  const [currentCard, setCurrentCard] = useState(-1);

  const [cardOrder, setCardOrder] = useState([...Array(cardPairs.length).keys()]);

  const [cardSide, setCardSide] = useState(0);

  const [cardColor, setCardColor] = useState('default');

  const [guessedStatus, setGuessedStatus] = useState(Array(cardPairs.length).fill(false));

  const trueName = currentCard >= 0 ? cardPairs[cardOrder[currentCard]].name : '';

  const [correctCount, setCorrectCount] = useState(0);

  const [wrongCount, setWrongCount] = useState(0);

  const [revealedCount, setRevealedCount] = useState(0);

  const [masteredCards, setMasteredCards] = useState([]);

  const [congratsShown, setCongratsShown] = useState(false);

  const markGuessed = (index) => {
    setGuessedStatus(prev => {
      const updated = [...prev];

      updated[index] = true;

      return updated;
    })
  }
  
  const handleNextClick = () => {
    setCurrentCard(currentCard + 1);

    setCardSide(0);

    setCorrectName('');

    setInput('');
  }

  const handleBackClick = () => {
    setCurrentCard(currentCard - 1);

    setCorrectName('');

    setInput('');

    setCardSide(0);
  }

  const handleShuffle = () => {
    const remainingCards = cardPairs.map((_, i) => i).filter(i => !masteredCards.includes(i));

    setCardOrder(remainingCards.sort(() => Math.random() - 0.5));

    setGuessedStatus(Array(cardPairs.length).fill(false));

    setCurrentCard(0);

    setCorrectName('');

    setInput('');

    setStreakCount(0);

    setCorrectCount(0);

    setWrongCount(0);

    setRevealedCount(0);

    setCardSide(0);
  }

  const handleMarkMastered = () => {
    const currentIndex = cardOrder[currentCard];

    if (!masteredCards.includes(currentIndex)) {
      const newMastered = [...masteredCards, currentIndex];

      setMasteredCards(newMastered);

      const newCardOrder = cardOrder.filter(i => i !== currentIndex);

      setCardOrder(newCardOrder);

      setCurrentCard(prev => Math.min(prev, newCardOrder.length - 1));

    setCorrectName('');

    setInput('');
    
    setCardSide(0);

      if (newMastered.length === cardPairs.length) {
        setCongratsShown(true);

        setCurrentCard(-1);
      }
    }
  }

  const handleResetMastered = () => {
    setMasteredCards([]);

    setCardOrder([...Array(cardPairs.length).keys()].sort(() => Math.random() - 0.5));

    setCurrentCard(0);

    setCongratsShown(false);
  }

  const updateCardSide = () => {    
    if (guessedStatus[cardOrder[currentCard]] == false) {
      setStreakCount(0);

      setRevealedCount(revealedCount + 1);
    }
    
    markGuessed(cardOrder[currentCard]);

    setCardSide((cardSide === 1) || (currentCard === -2) ? 0 : 1);
  }

  const handleSubmit = () => {    
    markGuessed(cardOrder[currentCard]);
    
    if (((cardOrder[currentCard] == 14) && (('RWQFSFASXC'.localeCompare(input, 'en', { sensitivity : 'base',  ignorePunctuation : true }) == 0) || ('Shadow Bonnie'.localeCompare(input, 'en', { sensitivity : 'base',  ignorePunctuation : true }) == 0)))
      || (trueName.localeCompare(input, 'en', { sensitivity : 'base',  ignorePunctuation : true }) == 0)) {
      setCorrectName('correct');

      setCorrectCount(correctCount + 1);

      setStreakCount(prevStreak => {
        const newStreak = prevStreak + 1;

        setLongestStreak(prevLongest => Math.max(prevLongest, newStreak));

        return newStreak;
      });
    } else {
      setCorrectName('wrong');

      setWrongCount(wrongCount + 1);

      setStreakCount(0);
    }
  }

  useEffect (() => {
    if (cardOrder[currentCard] >= 0 && cardOrder[currentCard] <=5) {
      setCardColor('toy')
    } else if (cardOrder[currentCard] >= 6 && cardOrder[currentCard] <= 10) {
      setCardColor('withered')
    } else if (cardOrder[currentCard] >= 11) {
      setCardColor('secret')
    } else {
      setCardColor('default')
    }
  }, [cardOrder, currentCard]);

  return (
    <div className="App">
      <div className='title'>
        <img src='https://dx35vtwkllhj9.cloudfront.net/universalstudios/five-nights-at-freddys-2/images/regions/us/tt.png'></img>
        <h2>Animatronics Quiz</h2>
      </div>

      <h4>With the FNAF 2 movie fast approaching, use these flashcards to learn all of the animatronics' names and faces!</h4>
    
      <p>Submit your guess for which animatronic matches the image and flip over the card to see the answer.</p>

      <div className='flashcard-container'>
        <h4>Card {(currentCard === -1) ? '-' : currentCard + 1}/{cardOrder.length}</h4>

        <div className='container'>
          <div key={currentCard} onClick={updateCardSide} className={`Card ${cardColor}${cardSide === 1 ? ' flipped' : ''}`}>
            <div className='card-inner'>
              <div className='card-front'>
                {currentCard !== -1 ?
                    <img src={cardPairs[cardOrder[currentCard]].image} />: congratsShown ?
                    <h2>Congratulations! You've mastered all the cards!</h2> :
                    <h2>Submit your guess for which animatronic matches the image below. Click on the card to flip it over and see the answer. When you've mastered a card, click the mastered button to remove it from the deck.</h2>            
                }
              </div>

              <div className='card-back'>
                {currentCard === -1 ?
                  (<h2>Click on the right arrow to move to the next card!</h2>) :
                  (<h2>{cardPairs[cardOrder[currentCard]].name}</h2>)
                }
              </div>
            </div>
          </div>

          <div className='mini-container'>
            <p>Guess the answer here: </p>

            <input
                type='text'
                name='animatronic-name'
                id={correctName}
                value={input}
                placeholder='Guess the animatronic'
                onChange={(e) => setInput(e.target.value)}
                className='textbox'
            />

            <button onClick={handleSubmit} id='submit-button' disabled={(currentCard === -1) || (guessedStatus[cardOrder[currentCard]]) ? true : false}>Submit Answer</button>

            <button onClick={handleMarkMastered} id='mastered-button' disabled={currentCard === -1}>Mark as Mastered</button>
          </div>
        </div>
                        
        <div className='button-container'>
          <button onClick={handleBackClick} id='back-button' disabled={(currentCard === -1) || (currentCard === 0) ? true : false}>←</button>

          <button onClick={handleNextClick} id='forward-button' disabled={currentCard === cardOrder.length - 1 ? true : false}>→</button>

          <button onClick={handleShuffle} id='shuffle-button' disabled={congratsShown ? true : false}>Shuffle Cards</button>

          <button onClick={handleResetMastered} id='reset-button' disabled={masteredCards.length === 0}>Reset Mastered Cards</button>
        </div>
      </div>

      <div className='deck-statistics'>
        <h3>Deck Statistics</h3>

        <div className='stats-container'>
          <div className='counters'>
            <h4>Current Streak:</h4>

            <p>{streakCount}</p>

            <h4>Longest Streak:</h4>

            <p>{longestStreak}</p>
          </div>

          <div className='counters'>
            <h4>Correct Answers:</h4>

            <p>{correctCount}</p>

            <h4>Incorrect Answers:</h4>

            <p>{wrongCount}</p>

            <h4>Cards Revealed:</h4>

            <p>{revealedCount}</p>
          </div>
          
          <div className='counters' id='mastered-display'>
            <h4>Mastered Cards:</h4>
          
            <ul>
              {masteredCards.map(index => (
                <li key={index}>{cardPairs[index].name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
