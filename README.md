# The California Beach Finder

_John Speck_

[![CALI BEACH FINDER](https://img.youtube.com/vi/NJYREiijsdY/0.jpg)](https://www.youtube.com/watch?v=NJYREiijsdY)

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/NJYREiijsdY?start=9" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<h1><a id="user-content-repository-title-goes-here" class="anchor" aria-hidden="true" href="#repository-title-goes-here"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a></h1>
<blockquote>
<p>California Beach Finder allows a user to enter a city name and locate beaches near them.  The user can create a Login and add beaches to their list of favorites.  They can also save and update reviews of particular beaches.  There is a data visualization page for the app that allows a user to see the percentage of all beaches in a pie chart that represent the following attributes: Stroller-Friendly, Restrooms, Camping, Fishing, Dog-Friendly and Bike-friendly.
Used 3 external APIs including one managed by Coastal California Commission, Google React Maps and Google Geocode to fetch data for beach locations based on a user’s preferred city and parse them against a dataset of 1500 beaches to retrieve and add markers for the nearest beaches within 11 miles of the city center according to google maps.
Implemented Rails API for the backend.  The app Used React for the Front End, implemented full C.R.U.D. for beach reviews and favorite beaches</p>
</blockquote>
<hr></hr>
  <h3><a href="https://speckworks.github.io/calibeachfinder/" >Check it out on Github Pages</a></h3>
  <h4><a href="https://mighty-ocean-78254.herokuapp.com/beaches">Backend Deployed on Heroku</a></h4>
  <h4><a href="https://github.com/speckworks/sandc-backend">Backend Source Code on GitHub</a></h4>
<hr></hr>
<p><strong>Built With:</strong></p>
<ul>
  <li>React.js</li>
  <li>Ruby on Rails</li>
  <li>Google Geocode API</li>
  <li>Google React Maps</li>
  <li>Coastal California Commission API</li>
  <li>AJAX</li>
  <li>REST Client</li>
  <li>JWT Auth</li>
  <li>CRUD</li>
</ul>
<hr>
</hr>
<h2><a id="user-content-contributing" class="anchor" aria-hidden="true" href="#contributing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>
<blockquote>
<p>To get started...</p>
</blockquote>
<h3><a id="user-content-step-1" class="anchor" aria-hidden="true" href="#step-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 1</h3>
<ul>
<li>
<p><strong>Option 1</strong></p>
<ul>
<li> Fork this repo!</li>
</ul>
</li>
<li>
<p><strong>Option 2</strong></p>
<ul>
  <li>Clone the frontend repo to your local machine using <code>https://github.com/speckworks/calibeachfinder</code></li>
  <h3>NPM Install</h3>
  <h3>NPM Start</h3>
  
  <li>BUT for best results FIRST: Clone the backend repo from <code>https://github.com/speckworks/sandc-backend</code></li>
  <h4>bundle install</h4>
    <h4>rails db:migrate</h4>
      <h4>rails db:seed</h4>
        <h4>rails s</h4>
</ul>
</li>
</ul>
<h3><a id="user-content-step-2" class="anchor" aria-hidden="true" href="#step-2"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 2</h3>
<ul>
<li><strong>Make your changes / improvements!</strong> </li>
</ul>
<h3><a id="user-content-step-3" class="anchor" aria-hidden="true" href="#step-3"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 3</h3>
<ul>
<li> Create a front end new pull request using <a href="https://github.com/speckworks/calibeachfinder"><code>https://github.com/speckworks/calibeachfinder</code></a>.</li>
 <li> Create a back end new pull request using <a href="https://github.com/speckworks/sandc-backend"><code>https://github.com/speckworks/sandc-backend</code></a>.</li>
</ul>
<hr>
</hr>
<h2><a id="user-content-support" class="anchor" aria-hidden="true" href="#support"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Support</h2>
<p>Reach out to me at one of the following places!</p>
<ul>
 <li>LinkedIn at <a href="https://www.linkedin.com/in/john-speck-7281358/" rel="nofollow"><code>John Speck</code></a></li>
<li>Medium at <a href="http://medium.com/@eltocino" rel="nofollow"><code>@eltocino</code></a></li>
</ul>
<hr></hr>
<a href="http://badges.mit-license.org" rel="nofollow"><img src="https://camo.githubusercontent.com/107590fac8cbd65071396bb4d04040f76cde5bde/687474703a2f2f696d672e736869656c64732e696f2f3a6c6963656e73652d6d69742d626c75652e7376673f7374796c653d666c61742d737175617265" alt="License" data-canonical-src="http://img.shields.io/:license-mit-blue.svg?style=flat-square" style="max-width:100%;"></a>
<ul>
<li><strong><a href="http://opensource.org/licenses/mit-license.php" rel="nofollow">MIT license</a></strong></li>
<li>Copyright 2020 © <a href="http://johnspeckmusic.com/" rel="nofollow">speckworks</a>.</li>
</ul>

