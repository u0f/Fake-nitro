// server.js
const express = require('express');
const app = express();

app.get('/:id', (req, res) => {
    res.send(`
    <head>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" name="viewport">
	  <meta property="og:type" content="website">
	  <meta property="og:site_name" content="A WILD GIFT APPEARS!">
    <meta name="theme-color" content="#36393F">
	  <meta property="og:title" content="Expires in 48 hours">
	  <meta property="og:image" content="https://i.ibb.co/gPrBZTD/nitro.png">
    </head>
    
     <body style="background-color:BLACK;">

       <video autoplay loop width="100%" height="100%">

    <source src="https://shattereddisk.github.io/rickroll/rickroll.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>
      <script>
         function setTitle() {
            document.title = "Rickroll"
         }
         window.onload = setTitle;
       </script>
   </body>
   `)
});
z

app.listen(4000, () => {
  console.log(`Success! Your application is running on port 4000.`);
});