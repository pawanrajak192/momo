// PASSWORD SYSTEM
let enteredPassword = "";
// Secret Date defined here (DDMMYYYY)
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
        // Corrected syntax to change dot color on input
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

/* SCREEN CHANGE CONTROLLER (Seamless flex toggle) */
function changeScreen(oldId, newId) {
    const oldScreen = document.getElementById(oldId);
    const newScreen = document.getElementById(newId);
    
    if(oldScreen && newScreen) {
        oldScreen.classList.remove("active");
        newScreen.classList.add("active");
    }
    // Automatically scrolls to top on screen change
    window.scrollTo(0, 0);
}

/* LOADER SECTION (Screen 2) */
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
        width += 33.33; // Fixed width increments
        
        if(countElement) countElement.innerText = count;
        if(progress) progress.style.width = width + "%";

        if (count <= 0) {
            clearInterval(interval);
            changeScreen("screen2", "screen3");
        }
    }, 1000);
}

/* ENVELOPE SECTION (Screen 3) */
function openLetter() {
    changeScreen("screen3", "screen4");
    startTyping();
}

/* TYPING EFFECT SECTION (Screen 4) */
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
    index = 0; // Reset index to avoid re-run issues

    const typing = setInterval(() => {
        target.innerHTML += message.charAt(index);
        index++;
        if (index >= message.length) {
            clearInterval(typing);
        }
    }, 35);
}

/* TIMELINE SECTION (Screen 5) */
function openTimeline() {
    changeScreen("screen4", "screen5");
}

/* SHIZUKA SECTION (Screen 6) */
function openShizukaPage() {
    changeScreen("screen5", "screen6");
}

/* REPORT CARD SECTION (Screen 7) */
function openReportCard() {
    changeScreen("screen6", "screen7");
    animateStats(); // Stats animation on load
}

/* CHECKLIST SECTION (Screen 8) (NEWLY ADDED FIXED FUNCTION) */
function openChecklist() {
    // Continue from Superpowers now opens screen8 instead of dead end alert
    changeScreen("screen7", "screen8");
}

/* GRAND FINALE SECTION (Screen 9) (NEWLY ADDED FIXED FUNCTION) */
function openFinalPage() {
    changeScreen("screen8", "screen9");
    // Trigger automatically after screen load
    setTimeout(celebrateBirthday, 500); 
}

/* CIRCLE ANIMATION SECTION (Screen 7) */
function animateStats() {
    const circles = document.querySelectorAll(".circle");
    circles.forEach(circle => {
        circle.style.transform = "scale(0)"; // Initial scale hide
        setTimeout(() => {
            circle.style.transition = "1s ease";
            circle.style.transform = "scale(1)"; // Scale pop up
        }, 300);
    });
}

/* MUSIC PLAYER SECTION (Updated for local mp3.mpeg) */
const musicBtn = document.getElementById("musicBtn");
// Aapki layout ke hisab se 'song' folder ke andar 'mp3.mpeg' path map kar diya hai
const audio = new Audio("song/mp3.mpeg");
audio.loop = true; // Gana khatam hone par apne aap repeat hoga
let playing = false;

if(musicBtn) {
    musicBtn.addEventListener("click", () => {
        if (!playing) {
            audio.play().catch(err => {
                console.log("Audio play blocked by browser policies. Manual click required.");
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

/* FLOATING HEARTS SECTION */
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
// Heart floating interval
setInterval(createHeart, 1200);

/* PARTICLES SECTION */
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
// Generate background particles
for (let i = 0; i < 100; i++) {
    createParticle();
}

/* FIREWORK EFFECT SECTION */
function launchFirework() {
    for (let i = 0; i < 25; i++) {
        const spark = document.createElement("div");
        spark.style.position = "fixed";
        spark.style.width = "6px";
        spark.style.height = "6px";
        spark.style.borderRadius = "50%";
        // Random multi-colored firework hsl colors
        spark.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
        spark.style.left = "50%";
        spark.style.top = "50%";
        spark.style.zIndex = "1001"; // Always keep on top
        document.body.appendChild(spark);

        const x = (Math.random() - 0.5) * 600; // Explode width range
        const y = (Math.random() - 0.5) * 600; // Explode height range

        spark.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px,${y}px)`, opacity: 0 }
        ], {
            duration: 1500 // Spark duration
        });

        setTimeout(() => { spark.remove(); }, 1500); // Spark cleanup
    }
}

/* GRAND FINALE LOOP SECTION */
function celebrateBirthday() {
    launchFirework();
    setTimeout(launchFirework, 1000); // Second blast
    setTimeout(launchFirework, 2000); // Third blast
}