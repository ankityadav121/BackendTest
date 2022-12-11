const fetch = require("node-fetch");
const cheerio = require("cheerio");
const fs = require("fs");
// function to get the raw data
const getRawData = (URL) => {
   return fetch(URL)
      .then((response) => response.text())
      .then((data) => {
         return data;
      });
};
// URL for data
const URL = "https://ful.io/";
// start of the program
const scrapeData = async () => {
   const rawData = await getRawData(URL);
   // parsing the data
   const parsedData = cheerio.load(rawData);
   // console.log(parsedData);
   //parsing social links
   const worldCupsDataTable = parsedData("footer div.container div.w-64 div.flex a")[0].attributes;
   const worldCupsDataTable1 = parsedData("footer div.container div.w-64 div.flex a")[1].attributes;

   console.log("Social Links: ")
   worldCupsDataTable.filter(anc => {
      if(anc.name==='href')
      console.log(anc.value)
   });
   worldCupsDataTable1.filter(anc => {
      if(anc.name==='href')
      console.log(anc.value)
   });
   
 //parsing emails
 console.log("Email: ")

 const worldCupsDataTable2 = parsedData("footer div.container div.flex-grow div.px-4 div a")[0].attributes;
 worldCupsDataTable2.filter(anc => {
   if(anc.name==='href')
   console.log(anc.value)
});

// parsing contact number
console.log("Contact: ")

const worldCupsDataTable3 = parsedData("footer div.container div.flex-grow div.px-4 div p a")[0].attributes;
 worldCupsDataTable3.filter(anc => {
   if(anc.name==='href')
   console.log(anc.value)
});

};
// invoking the main function
scrapeData();