ISS Assignment 3 Submission

Q1

The website contains all the expected relevant sections.
The links on the navbar use id based scrolling navigation, while the resume and tokenizer links takes you to respective site.

The website is responsive with hamburger menu for mobile view.

The resume is within the folder

assets/Resume.pdf

Q2

upon opening the js console on devtools, you can see all events being logged in the console with the following format

<Timestamp>, <eventType>, <elementType>, <elementIdentifier(if available)>

Q3

The tokenizer is a separate html

as tokenizer.html

You can use the tokenizer link to go there, 
It has 2 sections, the text area and results. Put the text in text area and click the analyze button

The tokenizer only considers:
 - "i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them" as pronouns
 - "in", "on", "at", "by", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "of", "off", "over", "under" as prepositions
 - "a", "an" as indefinite articles
 - anything that is not a letter, number, underscore, or whitespace is considered special character.

