// PASSWORD SYSTEM
let enteredPassword = "";
const correctPassword = "25062006";
const dots = document.querySelectorAll(".dot");

function pressNum(num) {
    if (enteredPassword.length < 8) {
        enteredPassword += num;
        updateDots();
    }
}

function clearAll() {
    enteredPassword = "";
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        if (index < enteredPassword.length) {
            dot.style.backgroundColor = "white";
        } else {
            dot.style.backgroundColor = "transparent";
        }
    });
}

function submitPass() {
    if (enteredPassword === correctPassword) {
        openLoader();
    } else {
        alert("Wrong Password ❤️");
        clearAll();
    }
}

function changeScreen(oldId, newId) {
    const oldScreen = document.getElementById(oldId);
    const newScreen = document.getElementById(newId);
    if(oldScreen && newScreen) {
        oldScreen.classList.remove("active");
        newScreen.classList.add("active");
    }
    window.scrollTo(0, 0);
}

function openLoader() {
    changeScreen("screen1", "screen2");
    startCountdown();
}

function startCountdown() {
    let count = 3;
    const countElement = document.getElementById("count");
    const progress = document.getElementById("progress");
    let width = 0;

    const interval = setInterval(() => {
        count--;
        width += 33.33;
        if(countElement) countElement.innerText = count;
        if(progress) progress.style.width = width + "%";

        if (count <= 0) {
            clearInterval(interval);
            changeScreen("screen2", "screen3");
        }
    }, 1000);
}

function openLetter() {
    changeScreen("screen3", "screen4");
    startTyping();
}

const message = `Happy Birthday Momo ❤️

Today is all about celebrating the wonderful person you are.
Your smile has the power to brighten the darkest day.
May this year bring endless happiness, success, laughter and unforgettable memories.

Stay happy.
Stay blessed.
Stay amazing.

– Pawan ✨`;

let index = 0;
function startTyping() {
    const target = document.getElementById("typingText");
    if(!target) return;
    target.innerHTML = "";
    index = 0;

    const typing = setInterval(() => {
        target.innerHTML += message.charAt(index);
        index++;
        if (index >= message.length) {
            clearInterval(typing);
        }
    }, 35);
}

function openTimeline() {
    changeScreen("screen4", "screen5");
}

function openShizukaPage() {
    changeScreen("screen5", "screen6");
}

function openReportCard() {
    changeScreen("screen6", "screen7");
    animateStats();
}

function openChecklist() {
    changeScreen("screen7", "screen8");
}

function openFinalPage() {
    changeScreen("screen8", "screen9");
    setTimeout(celebrateBirthday, 500); 
}

function animateStats() {
    const circles = document.querySelectorAll(".circle");
    circles.forEach(circle => {
        circle.style.transform = "scale(0)";
        setTimeout(() => {
            circle.style.transition = "1s ease";
            circle.style.transform = "scale(1)";
        }, 300);
    });
}

/* MUSIC PLAYER FIXED PATH */
const musicBtn = document.getElementById("musicBtn");
const audio = new Audio("mp3.mpeg");
audio.loop = true;
let playing = false;

if(musicBtn) {
    musicBtn.addEventListener("click", () => {
        if (!playing) {
            audio.play().catch(err => {
                alert("Please click 'Play' again to start the music! ❤️");
            });
            musicBtn.innerText = "Pause";
            playing = true;
        } else {
            audio.pause();
            musicBtn.innerText = "Play";
            playing = false;
        }
    });
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    document.body.appendChild(heart);

    let pos = 100;
    const move = setInterval(() => {
        pos--;
        heart.style.top = pos + "vh";
        heart.style.opacity = pos / 100;
        if (pos < 0) {
            clearInterval(move);
            heart.remove();
        }
    }, 40);
}
setInterval(createHeart, 1200);

function createParticle() {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.borderRadius = "50%";
    particle.style.background = "white";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.opacity = ".3";
    particle.style.zIndex = "-1";
    document.body.appendChild(particle);
}
for (let i = 0; i < 100; i++) {
    createParticle();
}

function launchFirework() {
    for (let i = 0; i < 25; i++) {
        const spark = document.createElement("div");
        spark.style.position = "fixed";
        spark.style.width = "6px";
        spark.style.height = "6px";
        spark.style.borderRadius = "50%";
        spark.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
        spark.style.left = "50%";
        spark.style.top = "50%";
        spark.style.zIndex = "1001";
        document.body.appendChild(spark);

        const x = (Math.random() - 0.5) * 600;
        const y = (Math.random() - 0.5) * 600;

        spark.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px,${y}px)`, opacity: 0 }
        ], {
            duration: 1500
        });

        setTimeout(() => { spark.remove(); }, 1500);
    }
}

function celebrateBirthday() {
    launchFirework();
    setTimeout(launchFirework, 1000);
    setTimeout(launchFirework, 2000);
}
