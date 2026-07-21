const messages = [

    "Initializing BankBugs|FX...",

    "Loading Trading systems...",

    "Preparing Starter Dashboard...",

    "Loading Elite Experience...",

    "Syncing Platform...",

    "Ready..."

];

const loadingText = document.getElementById("loading-text");

let index = 0;

const interval = setInterval(() => {

    index++;

    if(index < messages.length){

        loadingText.textContent = messages[index];

    }

},500);

setTimeout(()=>{

    clearInterval(interval);

    document.body.style.opacity="0";

    document.body.style.transition="opacity .9s";

    setTimeout(()=>{

        window.location.href="home.html";

    },100);

},5000);

setTimeout(() => {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "home.html";
  }, 800);
}, 3000);
