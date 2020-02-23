document.addEventListener('DOMContentLoaded', function() {
  url = "https://quote-garden.herokuapp.com/quotes/random"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let quote = ""
      quote += '<div class="display-quote">"';
      quote += json["quoteText"];
      quote += '"</div><div class="display-author">- '
      quote += json["quoteAuthor"]+'</div>';

      document.getElementById("display-quote").innerHTML = quote;
    });
}, false);

document.getElementById('RonS').addEventListener("click", function(event) {
  event.preventDefault();
  url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let quote = ""
      quote += '<div class="display-quote">"';
      quote += json[0];
      quote += '"</div><div class="display-author">- Ron Swanson</div>';

      document.getElementById("display-quote").innerHTML = quote;
    });
});

document.getElementById('SW').addEventListener("click", function(event) {
  event.preventDefault();
  url = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      // if ((json["starWarsQuote"].match('-') || []).length > 1) {
      //   let quote = ""
      //   quote += '<div class="display-quote">" ';
      //   quote += json["starWarsQuote"];
      //   quote += '"</div>'
      //   document.getElementById("display-quote").innerHTML = quote;
      // } else {
      //   json["starWarsQuote"] = json["starWarsQuote"].replace(/\u2013|\u2014/g, "-");
      //   let quote = ""
      //   quote += '<div class="display-quote">" ';
      //   quote += json["starWarsQuote"].split('-')[0];
      //   quote += '"</div><div class="display-author">-'
      //   quote += json["starWarsQuote"].split('-').slice(1) + '</div>';
      //   document.getElementById("display-quote").innerHTML = quote;
      // }
      let quote = ""
      quote += '<div class="display-quote">" ';
      quote += json["starWarsQuote"];
      quote += '"</div>'
      document.getElementById("display-quote").innerHTML = quote;
    });
});

document.getElementById('BBad').addEventListener("click", function(event) {
  event.preventDefault();
  url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let quote = ""
      quote += '<div class="display-quote">"';
      quote += json[0]["quote"];
      quote += '"</div><div class="display-author">- '
      quote += json[0]["author"] + '</div>';

      document.getElementById("display-quote").innerHTML = quote;
    });
});

document.getElementById('Trump').addEventListener("click", function(event) {
  event.preventDefault();
  url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let quote = ""
      quote += '<div class="display-quote">"';
      quote += json["message"];
      quote += '"</div><div class="display-author">- Trump</div>';

      document.getElementById("display-quote").innerHTML = quote;
    });
});

document.getElementById('Jane').addEventListener("click", function(event) {
  event.preventDefault();
  url = "https://goodquotesapi.herokuapp.com/author/Jane+Austen"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let int = Math.floor(Math.random() * json["quotes"].length);
      let quote = ""
      quote += '<div class="display-quote">"';
      quote += json["quotes"][int]['quote'];
      quote += '"</div><div class="display-author">-Jane Austen</div>';
      document.getElementById("display-quote").innerHTML = quote;
    });
});

document.getElementById('Kanye').addEventListener("click", function(event) {
  event.preventDefault();
  url = "https://api.kanye.rest"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let quote = ""
      quote += '<div class="display-quote">"';
      quote += json["quote"];
      quote += '"</div><div class="display-author">- Kanye</div>';

      document.getElementById("display-quote").innerHTML = quote;
    });
});

document.getElementById('Abe').addEventListener("click", function(event) {
  event.preventDefault();
  url = "https://quote-garden.herokuapp.com/quotes/author/Abraham Lincoln"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let int = Math.floor(Math.random() * json["count"]);
      let quote = ""
      quote += '<div class="display-quote">"';
      quote += json["results"][int]["quoteText"];
      quote += '"</div><div class="display-author">- Abraham Lincoln</div>';

      document.getElementById("display-quote").innerHTML = quote;
    });
});

document.getElementById('Simpsons').addEventListener("click", function(event) {
  event.preventDefault();
  url = "https://thesimpsonsquoteapi.glitch.me/quotes"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let quote = ""
      quote += '<div class="display-quote">"';
      quote += json[0]["quote"];
      quote += '"</div><div class="display-author">- '
      quote += json[0]["character"] + '</div>';

      document.getElementById("display-quote").innerHTML = quote;
    });
});

document.getElementById('GoT').addEventListener("click", function(event) {
  event.preventDefault();
  url = "https://got-quotes.herokuapp.com/quotes"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let quote = ""
      quote += '<div class="display-quote">"';
      quote += json["quote"];
      quote += '"</div><div class="display-author">- '
      quote += json["character"] + '</div>';

      document.getElementById("display-quote").innerHTML = quote;
    });
});
