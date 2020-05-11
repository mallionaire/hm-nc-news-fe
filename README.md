# Northcoders News

Northcoders News is a news and blogging site built with React, it is inspired by the functionality found on popular news sites such as [Reddit](https://www.reddit.com/).

Users can browse articles, post comments, vote on articles and comments, and delete their own comments. A more detailed selection of user stories can be found at the bottom of this README.

[You can find a fully hosted version of this application here.](https://one-in-a-mallion.netlify.app/)

## Getting Started

### Prerequisites

To host this app locally, you will need [Node](https://nodejs.org/en/download/) installed on your machine. Follow the link for more information on how to do this.

- Node requirements:
  v13.6.0

### Installing

1. Fork and clone this [repository from Github](https://github.com/mallionaire/hm-nc-news-fe)
2. cd into the repository and run `npm install` to install the required dependencies.
3. Run `npm start`
4. You will be logged in as a default user "jessJelly" feel free to explore the site as this user.

### Back-end code:

https://github.com/mallionaire/HM-nc-news-be

### Deployed Back-end version: 

https://hm-nc-news.herokuapp.com/api/articles 



## User Stories

As a user I can:

- View a list of all articles
- View a page for each topic, listing all articles associated with that topic
- View an individual article
- View comments on each individual article
- Sort articles by: date created (most recent), number of comments, and number of votes
- Sort an individual article's comments by number of votes/ when created.
- Post comments as "jessjelly" (the default user)
- Delete your own comments (jessjelly's)
- Upvote or downvote articles and see the corresponding vote change (this can be undone/ changed within +/- 1 range)
- Upvote or downvote comments and see the corresponding vote change (this can be undone/ changed within +/- 1 range)
- The site can be viewed on mobiles without loss of style or functionality
- Error messages are displayed for common errors (eg 404 for non-existent article/ path/ topic; 400 for invalid article ID) or a default error message displays for others.
