"use strict";

// Global variables 
const greeting_text = document.querySelector(".greeting_text");
const hourOfTheDay = new Date().getHours();
const yt_channel = document.querySelector(".youtube_channel");
const yt_channel_dropdown = document.querySelector(".yt_channel_details_dropdown");
const yt_sub_count = document.querySelector(".channel_sub_count");


// Function to automatically check the hours and toggle text from  ["morning, afternoon, evening"]
// It is a self invoked function

(() => {
    if (hourOfTheDay >= 24 && hourOfTheDay <= 11) {
        greeting_text.innerHTML = "Hi, Good Morning!";
    } else if (hourOfTheDay >= 12 && hourOfTheDay <= 15) {
        greeting_text.innerHTML = "Hi, Good Afternoon!";
    } else {
        greeting_text.innerHTML = "Hi, Good Evening!";
    }
})();
console.log("Am a script in @bigg_aji palace");

// Function to fetch codestack youtube channel data

/**
 * @returns object - youtube channel data
 */
const data_url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&key=AIzaSyDDr11G0rgShLPEXmNpI66raLdsl83LxYM&id=UCaNTxRkQ01gMBnL1mgnM_KA";

(() => {
    fetch(data_url)
        .then(resp => {
            return resp.json();
        })
        .then(channelData => {
            // Use channel data
            yt_sub_count.innerHTML = channelData.items[0].statistics.subscriberCount + " Subscribers";
        })
        .catch(e => {
            throw new Error("An error occured while trying to fetch data from youtube. ", e);
        });
})();