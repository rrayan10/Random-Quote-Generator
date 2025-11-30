let quote = [
    `“Be yourself; everyone else is already taken.”`,
    `“So many books, so little time.”`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    `“A room without books is like a body without a soul.”`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    `“You only live once, but if you do it right, once is enough.”`
];

let quoteAuthor = [
    "― Oscar Wilde",
    "― Frank Zappa",
    "― Albert Einstein",
    "― Marcus Tullius Cicero",
    "― Bernard M. Baruch",
    "― Dr. Seuss",
    "― Mae West"
];


function showQuote() {
    let randomNumber = Math.floor(Math.random() * (6 - 0 + 1));

    document.getElementById('quote').innerHTML = quote[randomNumber];
    document.getElementById('quote-author').innerHTML = quoteAuthor[randomNumber];
};