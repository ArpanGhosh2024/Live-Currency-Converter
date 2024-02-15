const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")

window.addEventListener("load",() => {
  updateExchangeRate();
});

for(let select of dropdowns){
  for(currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.setAttribute("value",currCode);
    if(select.getAttribute("name") === "from" && currCode === "USD"){
      newOption.selected = "selected"; //USD is default option of the from select     
    } else if(select.getAttribute("name") === "to" && currCode === "INR"){
      newOption.selected = "selected"; //INR is default option of the to select     
    }
    select.append(newOption);
  }
  
  select.addEventListener("change",(event) => {
    updateFlag(event.target)
  }); //updateFlag will get called when we change the option of the select
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newURL = `https://flagsapi.com/${countryCode}/flat/64.png`
  let img = element.parentElement.querySelector("img");
  img.setAttribute("src",newURL);
};

const updateMsg = (fromAmount,toAmount,date) => {
  msg.innerText = `${fromAmount} ${fromCurr.value} = ${toAmount} ${toCurr.value} as of ${date}.`;
};

btn.addEventListener("click",(event) => {
  event.preventDefault();
  updateExchangeRate();
});

const updateExchangeRate = async() => {
  let amount = document.querySelector("form input");
  let amtVal = amount.value;
  if(amtVal === "" || amtVal < 1){
    amtVal = 1;
    amount.value = "1";
  }
  
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL); //fetch() API call returns a JSON response
  let data = await response.json(); //convert response from JSON format to usable data
  let rate = data[toCurr.value.toLowerCase()];
  let date = data["date"];
  let finalConvertedAmt = amtVal * rate;
  updateMsg(amtVal,finalConvertedAmt,date);
};