memes = [
 'https://us-tuna-sounds-images.voicemod.net/88727c62-3d3e-4b43-982c-4e0332287ba1-1721417596236.jpg',
    'https://i1.sndcdn.com/artworks-JJOu6dvb4Swg3f5K-bl6o5g-t500x500.jpg',
    'https://cdn-images.dzcdn.net/images/cover/173ba7fc2bbf9e902b61a5636a3b6dc7/0x1900-000000-80-0-0.jpg',
    'https://media1.tenor.com/m/2hO1qFdswTcAAAAd/adrian-adrian-explain-our-friend-group.gif',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1SZrkCViLLUFVSK0dsxEEirzrMYWGlwIUUn9rK_Mw9chUXgGjN564m2uGkTkJdNB44g&usqp=CAU',
    'https://i.redd.it/mcrnke8jc50e1.jpeg',
    'https://preview.redd.it/67m-rate-my-looks-v0-zwvnlpu0ayhf1.jpeg?width=640&crop=smart&auto=webp&s=3e3517c372fcbbab5072d3f082ebdc55c053f708',
    'https://preview.redd.it/why-is-this-in-my-recommended-v0-9t6or3qp67fe1.jpeg?width=640&crop=smart&auto=webp&s=d97421cc7e484881f9ece8d684069fb04997e1c2',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwtlYZuMSBALPJIR5RblVT2UL2D5SrLuxU52ppsBkmoWgjHQ1L',
    'https://content.imageresizer.com/images/memes/Sigma-Cat-meme-7p2ecu.jpg',
    'https://imageproxy.ifunny.co/resize:640x,quality:90x75/images/138918d716ce66c110365b9c6248b20e45959dda4109459fbc195e8fde9f52a0_3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rU2B0NROBotA7f2cAapEfd2OqQu-wUqJSJsgw6yRcmRRYmccsjfdX9Ugm5JitKSK5D4&usqp=CAU',
    'https://i.ytimg.com/vi/QwFjci1zPho/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGE8gZShhMA8=&rs=AOn4CLDw_oN7E2bQFBiKkGMhEYK4-HXQhQ',
    'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1raLyw.img?w=690&h=388&m=6',
    'https://preview.redd.it/the-kendrick-mustard-of-duty-meme-is-huge-right-now-v0-evovdf5yrnve1.jpeg?auto=webp&s=0428c2e728bf7d41cd67829ed996b8e7918a99e8',
    'https://pbs.twimg.com/media/EXDk0oYWkAEBe7D.jpg',
    'https://preview.redd.it/on-this-day-three-years-ago-u-lavameteor-posted-they-sus-v0-zr8cfaqja50c1.jpg?width=640&crop=smart&auto=webp&s=79340572b4618438ee98d910ecaa996812872e76',
    'https://media1.tenor.com/m/4eALS2xDONAAAAAd/oi-oi-oi-baka.gif',
    'https://i.ytimg.com/vi/NhHb9usKy6Q/maxresdefault.jpg',
    'https://media1.tenor.com/m/2ndcvKu-928AAAAd/bring-out-the-fine-china.gif',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qUan4GWRBJyJtlKPr5lDEwLBZw37tQ2rKQ&s',
]

quotes = [
    'boom boom boom boom boomboom boom boom boom boom boom boomboomboom', // BOIIII ts (this) mysic so tuff
    'Heh ha ha hahaha ha ha', // Evil rick laugh
    'Those who know 💀', // dos uno
    'Adrian, explain our friend group',
    "Coffee spelt backwards is eeffoc. Which is crazy, because until I've had my coffee, I don't give eeffoc... about anything.",
    'Kid insults Dhar Mann, gets dragged to hell by Satan himself',
    'HEEEEEY SIX SEVENNN', // ts (this) is hella tuff boiiiii
    'Minecraft but I have carbon monoxide poisoning',
    'Put me in a lamar jackson edit',
    'Sigma cat',
    "New chinese restaurant just opened up in the hood",
    'Fortnite or PUBG',
    'Can we just talk about the political and economic state of the world right now?',
    'Eye of Rah',
    'Call of Mustard',
    'Only a spoonful',
    'When the imposter is sus',
    'baka... baakaa. oi oi oi... BAAKAA!.. BAAAKAAAA!!',
    'You are my sunshine',
    'Honey we have guests Bring out the Fine China',
    '40+ year old pluggnb rapper 🔥🙏 did unc snap?',
]

memes.forEach(function(url){
    $("<img>", {src: url, alt: "meme"}).appendTo("#gallery");
})


function searchContent(input){

}

function addContent(){
    url = $("#memeURL").val();
    $("<img>", {src: url, alt: "meme"}).appendTo("#gallery");
}

function shuffleContent(){
    let currentIndex = memes.length
    while(currentIndex !== 0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--

        [memes[currentIndex], memes[randomIndex]] = [memes[randomIndex], memes[currentIndex]]
    }
    $("#gallery").empty()
    memes.forEach(function(url){
        $("<img>", {src: url, alt: "meme"}).appendTo("#gallery");
    })
}

function randomCombo(){

}