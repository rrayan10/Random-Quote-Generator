let quotesArray = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch"
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    },
    {
        quote: "“We accept the love we think we deserve.”",
        author: "― Stephen Chbosky"
    },
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        author: "― Elbert Hubbard"
    },
    {
        quote: "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”",
        author: "― Marilyn Monroe"
    },
    {
        quote: "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        author: "― Mark Twain"
    },
    {
        quote: "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",
        author: "― John Green"
    },
    {
        quote: "“We are all in the gutter, but some of us are looking at the stars.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
        author: "― William Shakespeare"
    },
    {
        quote: "“Life is what happens to us while we are making other plans.”",
        author: "― Allen Saunders"
    },
]


let randomNumber;
let currentNumber;


function showQuote() {
    randomNumber = Math.floor(Math.random() * (6 - 0 + 1));

    if (currentNumber == randomNumber) {
        if (randomNumber >= 0 && randomNumber < 6) {
            randomNumber = randomNumber + 1;
        }
        else if (randomNumber > 0 && randomNumber <= 6) {
            randomNumber = randomNumber - 1;
        }
    }

    document.getElementById('quote').innerHTML = quote[randomNumber];
    document.getElementById('quote-author').innerHTML = quoteAuthor[randomNumber];

    currentNumber = randomNumber;
};