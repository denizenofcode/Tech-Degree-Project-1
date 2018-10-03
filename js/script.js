// FSJS - Random Star Wars Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  { quote: "Remember…the Force will be with you, always.",
    source: "Obi Wan Kenobi",
    citation: "A New Hope",
  },
  { quote: "Traveling through hyperspace aint like dusting crops, farm boy.",
    source: "Han Solo",
    citation: "A New Hope",
    year: "0ABY"
  },
  { quote: "Fear is the path to the dark side.",
    source: "Yoda",
    citation: "The Phantom Menace",
  },
  { quote: "Be mindful of your thoughts Anakin. They’ll betray you.",
    source: "Obi-Wan",
    citation: "Attack of the Clones",
  },
  { quote: "I won’t fail you. I’m not afraid. You will be. You… will… be.",
    source: "Yoda & Luke Skywalker",
    citation: "The Empire Strikes Back",
  }
];

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
  return array[Math.floor(Math.random() * 5)];
}


// Create the printQuote funtion and name it printQuote
function printQuote() {
  var selectedQuote = getRandomQuote(quotes);
  var outputString =  "";
  var outPutString =  '<p class="quote">' + selectedQuote.quote + '</p>' +
                      '<p class="source">' + selectedQuote.source;
  if ('citation' in selectedQuote) {
    outPutString =+ '<span class="citation">' + selectedQuote.citation + '</span>'
  }
  if ('year' in selectedQuote) {
    outPutString += '<span class="year">' + selectedQuote.year + '</span>' +
    '</p>'
  };
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
