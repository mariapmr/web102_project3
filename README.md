# Web Development Project 3 - Five Nights at Freddy's 2 Animatronics Quiz

Submitted by: Maria Priebe Rocha

This web app: displays flashcards allowing the user to quiz themself on the names of the animatronic from Five Nights at Freddy's 2 based on their photos, where clicking the flashcard displays the answer. Users can input their guess into an input box and submit the guess to get visual feedback that their answer is correct or incorrect. The web app tracks the user's correct answer streak and longest answer streak. The user can navigate through the list of cards with the forward and back arrows, as well as click the shuffle button to go back to the start of the deck in a random order. User answers are considered correct regardless of uppercase/lowercase and punctuation discrepancies. The quiz feature also handles the special case of Shadow Bonnie so that users can input either Shadow Bonnie or RWQFSFASXC to receive a correct answer.

Time spent: 7 hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [X] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:


- [X] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [X] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [X] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 
- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards


The following **additional** features are implemented:

* [X] For the Shadow Bonnie card, a user can input either of the character's aliases (Shadow Bonnie or RWQFSFASXC) to be marked correct

* [X] A user cannot submit multiple guesses or submit a guess if they have flipped the card to see the answer

* [X] A counter tracks the user's statistics on the deck, displaying the number of guesses they got correct or incorrect, as well as the number of cards they revealed the correct answer for.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [Kap](https://getkap.co/)

## Notes

Describe any challenges encountered while building the app.

## License

    Copyright 2025 Maria Priebe Rocha

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
