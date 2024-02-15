# Live-Currency-Converter
A currency converter made using HTML, CSS and JavaScript.
<img src="images/1.png">
In this project, I have made a currency converter using HTML, CSS and JS. I have used the currency API with the base URL - https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies and this API fetches the live currency exchange rates of the countries sent in the API request. For example if a request is sent to the API endpoint - https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json, then it fetches the exchange rate from USD to INR for a particular date. <br>
<img src="images/2.png"> <br>
To dynamically change the country flags based on the set of countries that the user chooses, I have used flagsAPI - https://flagsapi.com/
<h1>Instructions for using the currency converter</h1>
<ol>
  <li>First, enter the amount you desire to obtain the exchanged value for, in the input box provided.
      <img src="images/3.png">
  </li>
  <li>Next, select the <b>from</b> and the <b>to</b> currencies from the currency options provided in the select boxes. For example if you desire to convert from USD to JPY, select the option "USD" in the <b>from</b> select and the option "JPY" in the <b>to</b> select.
      <img src="images/4.png">
  </li>
  <li>Next, click on the "Get Exchange Rate" button to get the converted amount.
      <img src="images/5.png">
  </li>
  <li>The final converted amount is then displayed along with the corresponding date.
      <img src="images/6.png">
  </li>
  <li>It is important to note that the date holds significance as this is a live currency converter and so the exchange rates change with time.</li>
</ol>

<h1>IDE used - Visual Studio Code (VS Code)</h1>
<ul>
  <li>index.html
      <img src="images/7.png">
  </li>
  <li>style.css
      <img src="images/8.png">
  </li>
  <li>codes.js (Has an object having <code><b>currencyCode : countryCode</b></code> pairs.)
      <img src="images/9.png">
  </li>
  <li>script.js
      <img src="images/10.png">
  </li>
</ul>
<i><b>So, I really hope that you liked this currency converter!! Thank you for spending your precious time to go throught this project of mine.😊<br>-Arpan
</b></i>
