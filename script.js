memes = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBhEJ_V7oOIsyFS9S-wLni5qDafazxKDVJA&s',
    'https://external-preview.redd.it/steven-here-v0-xmpw7iV6gdrJ7OjKeH75kMPD2YoGigV3PJKqBSMFD3g.png?format=pjpg&auto=webp&s=fd88aa82b11a098afd8bc4c16cecf7326c06f772',
    'https://cdn-images.dzcdn.net/images/cover/173ba7fc2bbf9e902b61a5636a3b6dc7/0x1900-000000-80-0-0.jpg',
    'https://media1.tenor.com/m/2hO1qFdswTcAAAAd/adrian-adrian-explain-our-friend-group.gif',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1SZrkCViLLUFVSK0dsxEEirzrMYWGlwIUUn9rK_Mw9chUXgGjN564m2uGkTkJdNB44g&usqp=CAU',
    'https://i.redd.it/mcrnke8jc50e1.jpeg',
    'https://preview.redd.it/67m-rate-my-looks-v0-zwvnlpu0ayhf1.jpeg?width=640&crop=smart&auto=webp&s=3e3517c372fcbbab5072d3f082ebdc55c053f708',
    'https://preview.redd.it/alan-moore-says-your-not-sigma-v0-gt4wjlytp6ud1.jpeg?auto=webp&s=a71a78c6309cc1bbe76cc4294257d3c7b72bad36',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwtlYZuMSBALPJIR5RblVT2UL2D5SrLuxU52ppsBkmoWgjHQ1L',
    'https://content.imageresizer.com/images/memes/Sigma-Cat-meme-7p2ecu.jpg',
    'https://imageproxy.ifunny.co/resize:640x,quality:90x75/images/138918d716ce66c110365b9c6248b20e45959dda4109459fbc195e8fde9f52a0_3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rU2B0NROBotA7f2cAapEfd2OqQu-wUqJSJsgw6yRcmRRYmccsjfdX9Ugm5JitKSK5D4&usqp=CAU',
    'https://i.ytimg.com/vi/QwFjci1zPho/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGE8gZShhMA8=&rs=AOn4CLDw_oN7E2bQFBiKkGMhEYK4-HXQhQ',
    'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1raLyw.img?w=690&h=388&m=6',
    'https://preview.redd.it/the-kendrick-mustard-of-duty-meme-is-huge-right-now-v0-evovdf5yrnve1.jpeg?auto=webp&s=0428c2e728bf7d41cd67829ed996b8e7918a99e8',
    'https://i.ytimg.com/vi/bIsp1K8eJG0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDUw_GHc5K2xp752g2bBCVbI8eZ9g',
    'https://media1.tenor.com/m/88VE5S-BscUAAAAC/i-just-a-baby-baby.gif',
    'https://media1.tenor.com/m/4eALS2xDONAAAAAd/oi-oi-oi-baka.gif',
    'https://i.ytimg.com/vi/NhHb9usKy6Q/maxresdefault.jpg',
    'https://preview.redd.it/i-have-a-question-v0-kj2ox7h8f5wd1.jpeg?auto=webp&s=77e375b1c83b4abcf5ded4f2dc579abc7759de7d',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qUan4GWRBJyJtlKPr5lDEwLBZw37tQ2rKQ&s',
]

quotes = [
    'Shocked Black Guy',
    "Steven here... I'm looking for Fifi.",
    'Tuff Trollface 💀', // Dos Uno (those who know) 💀
    'Adrian, explain our friend group.',
    "Coffee spelt backwards is eeffoc. Which is crazy.",
    'Kid insults Dhar Mann, gets dragged to hell by Satan himself!',
    'HEEEEEY SIX SEVENNN!', // ts (this) is hella tuff boiiiii
    "Sorry... You're NOT a Sigma.",
    'Put me in a lamar jackson edit.', // People did hilariously terrible edits of this guy
    'Monday left me broken.',
    "It comes with eggroll.",
    'Fortnite or PUBG?',
    'Can we just talk about the political and economic state of the world right now?', // Cringy dude
    'Eye of Rah.',
    'Call of Mustard meme is going viral',
    "Does he know?",
    "I'm just a bebeh!",
    'This dude is not real.',
    'You are my sunshine, my only sunshine.',
    "Bro thinks he's the thinker",
    '40+ year old PluggnB rapper 🔥🙏 did unc snap?', // Pluggnb is a hip-hop subgenre, just so you know. 
]

function renderGallery(){
    $("#gallery").empty(); // Basically a refresh
    memes.forEach(function(url, index){
        $("<div>", {class: "meme-item"})
            .append($("<img>", {src: url, alt: "meme"})) // Adds images
            .append($("<p>").text(quotes[index])) // Adds quote
            .append(
                $("<button>", {class: "delete-btn", text: "Delete" }) // Delete button
                    .on("click", function(){
                        memes.splice(index, 1);   // remove meme
                        quotes.splice(index, 1);  // remove quote
                        renderGallery();          // re-render after deletion
                    })
            )
            .appendTo("#gallery");
    });
}
renderGallery();


function searchContent(){
    memes_and_quotes = [...memes, ...quotes]
    search = $("#search").val();
    new RegExp(search, memes_and_quotes);
}

function addContent(){
    url = $("#memeURL").val();
    quote = $("#quoteText").val();

    let imageRegex = /\.(jpg|png|gif)$/i
    let quoteRegex =  /^(\S+\s+){2,}\S+/

    if(!imageRegex.test(url)) {
        $("#memeURL")
        .val("")
        .attr("placeholder", "Must end with .jpg/.png/.gif.")
        .css("border", "2px solid red");
        return;
    }

    if(!quoteRegex.test(quote)){
        $("#quoteText")
        .val("") // clear bad input
        .attr("placeholder", "Must be at least 3 words")
        .css("border", "2px solid red");
        return;
    }

    memes.push(url)
    quotes.push(quote)
    renderGallery();

    $("#memeURL")
    .val("")
    .attr("placeholder", "Meme URL")
    .css("border", "");

    $("#quoteText")
    .val("")
    .attr("placeholder", "Quote")
    .css("border", "");
}

function shuffleArray(arr){
    let currentIndex = arr.length
    while(currentIndex !== 0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--

        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
}

function shuffleContent(){
    shuffleArray(memes)
    shuffleArray(quotes)
    renderGallery();
}

function randomCombo(){
    randomMeme = memes[Math.floor(Math.random() * memes.length)];
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    $("#randomCombination").empty(); // clear previous
    $("<img>", {src: randomMeme, alt: "meme", width: "300"}).appendTo("#randomCombination");
    $("<p>").text(randomQuote).appendTo("#randomCombination");

    $("<button>").text("Delete")
    .on("click", function(){
        $("#randomCombination").empty();
    })
    .appendTo("#randomCombination");
}
