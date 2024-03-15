# Fetch API to Load Stuff

---

# Intro

This project was created in my 3rd week of coding bootcamp at General Assembly using JavavScript, HTML, and CSS. It uses the fundamentals of fetch API to allow jokes, cat facts, and memes to be loaded. 

---

# Design

The following 3 APIs were used. 
- Jokes API: https://official-joke-api.appspot.com/random_ten
- Cat Facts API: https://catfact.ninja/facts?limit=10
- Memes API: https://api.imgflip.com/get_memes

Each button on the main page once clicked will load the content from its respective API above. For example, the jokes button will load jokes. 


If the API response includes more than 100 items, use array methods to limit the display to a maximum of 100 items.
