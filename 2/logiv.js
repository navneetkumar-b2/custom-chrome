const motivationalQuotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The future depends on what you do today. – Mahatma Gandhi",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "The best revenge is massive success. – Frank Sinatra",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "I have not failed. I've just found 10,000 ways that won't work. – Thomas A. Edison",
    "The successful warrior is the average man, with laser-like focus. – Bruce Lee",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",

    "The only way to do great work is to love what you do. – Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The future depends on what you do today. – Mahatma Gandhi",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "The best revenge is massive success. – Frank Sinatra",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "I have not failed. I've just found 10,000 ways that won't work. – Thomas A. Edison",
    "The successful warrior is the average man, with laser-like focus. – Bruce Lee",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "The only thing standing between you and your dream is the will to try and the belief that it is actually possible. – Joel Brown",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "The harder the conflict, the greater the triumph. – George Washington",
    "I attribute my success to this: I never gave or took any excuse. – Florence Nightingale",
    "The starting point of all achievement is desire. – Napoleon Hill",
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this. – Chantal Sutherland",
    "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. – Vince Lombardi",
    "You don't have to be great to start, but you have to start to be great. – Zig Ziglar",
    "Success is stumbling from failure to failure with no loss of enthusiasm. – Winston S. Churchill",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
    "Success is not just about making money. It's about making a difference. – Unknown",
    "The only thing standing between you and your dream is the will to try and the belief that it is actually possible. – Joel Brown",
    "The harder the conflict, the greater the triumph. – George Washington",
    "I attribute my success to this: I never gave or took any excuse. – Florence Nightingale",
    "The starting point of all achievement is desire. – Napoleon Hill",
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this. – Chantal Sutherland",
    "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. – Vince Lombardi",
    "You don't have to be great to start, but you have to start to be great. – Zig Ziglar",
    "Success is stumbling from failure to failure with no loss of enthusiasm. – Winston S. Churchill",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
    "Success is not just about making money. It's about making a difference. – Unknown",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "The best way to predict your future is to create it. – Peter Drucker",
    "A goal is a dream with a deadline. – Napoleon Hill",
    "Success is not the result of spontaneous combustion. You must set yourself on fire. – Arnold H. Glasow",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. – Joel Brown",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. – Thomas A. Edison",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "Success is not about being better than someone else. It's about being better than you used to be. – Wayne Dyer",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
    "There is no elevator to success, you have to take the stairs. – Zig Ziglar",
    "You don't have to be rich, famous, or perfect to enjoy your life. You just have to be grateful. – Unknown",
    "The only thing standing between you and your dream is the will to try and the belief that it is actually possible. – Joel Brown",
    "The harder the conflict, the greater the triumph. – George Washington"

];
let index = Math.floor(Math.random() * (motivationalQuotes.length - 1))
// console.log(index)
// console.log(motivationalQuotes[index])

let elem = document.body.querySelector(".motivation")
elem.innerHTML = motivationalQuotes[index] // 

//clock 
// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;

//     hour.style.transform = `rotate(${hrotation}deg)`;
//     minute.style.transform = `rotate(${mrotation}deg)`;
//     second.style.transform = `rotate(${srotation}deg)`;
// }, 1000);

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
// console.log(`time is ${htime} : ${mtime} : ${stime}`);
r=document.body.querySelector("#prnt-tme");
 r.innerHTML =  ` ${htime} : ${mtime} : ${stime}` 
},900);

// google search


const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(googleSearchUrl, '_blank');
  }
});


