// FSJS - Random Star Wars Quote Generator

// Create the array of quote objects and name it quotes.

// Assign array of quote objects to quotes variable.

randomColor();

var quotes = [
  { quote: "Remember…the Force will be with you, always.",
    source: "Obi Wan Kenobi",
    citation: "A New Hope",
    movieRomanNum: "IV"
  },
  { quote: "Traveling through hyperspace ain\'t like dusting crops, farm boy.",
    source: "Han Solo",
    citation: "A New Hope",
    year: "0ABY",
    movieRomanNum: "IV"
  },
  { quote: "Fear is the path to the dark side.",
    source: "Yoda",
    citation: "The Phantom Menace",
    movieRomanNum: "I"
  },
  { quote: "Be mindful of your thoughts Anakin. They’ll betray you.",
    source: "Obi-Wan",
    citation: "Attack of the Clones",
    movieRomanNum: "II"
  },
  { quote:  'I won’t fail you. I’m not afraid.' +
            'You will be. You… will… be.',
    source: "Yoda & Luke Skywalker",
    citation: "The Empire Strikes Back",
    movieRomanNum: "V"
  }
];

// Create the getRandomQuuote function and name it getRandomQuote.
function getRandomQuote(array) {
  // Return an a random number between 0 and 4 for use as an index for selecting a quote.
  return array[Math.floor(Math.random() * 4)];
}

// Generate a Random Background color.
function randomColor(){
        //Generate a random hex value between #000000 and #ffffff.
        var hexColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = hexColor;
      }

// Create the printQuote function and name it printQuote.
function printQuote() {
  // Pick a quote from quotes array using previously generated random number.
  var selectedQuote = getRandomQuote(quotes);
  // Save the values of each key of selectedQuote by concatenating them to the outPutString var.
  var outPutString =  '<p class="quote">' + selectedQuote.quote + '</p>' +
                      '<p class="source">' + selectedQuote.source;
  // Only concat citation if present in object.
  if ('citation' in selectedQuote) {
    outPutString += '<span class="citation">' + selectedQuote.citation + '</span>';
  }
  // Only concat year if present in object.
  if ('year' in selectedQuote) {
    outPutString += '<span class="year">' + selectedQuote.year + '</span>' +
    '</p>';
  }
  // Update Contents of HTML tags with generated quote values.
  document.getElementById('quote-box').innerHTML = outPutString;

  //Change BG color
  randomColor();
}

// Repeat with the interval of 5000 milliseconds.
var timerId = setInterval(() => printQuote(), 5000);
// This event listener will respond to "Show another quote" button clicks.
// When user clicks anywhere on the button, the "printQuote" function is called.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
