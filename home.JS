const slider = document.getElementById('slider');
const percentDisplay = document.getElementById('percent-display');
const statusTitle = document.getElementById('status-title');
const nextStepBtn = document.getElementById('next-step-btn');
const catImg = document.getElementById('cat-img');

const catSad = "https://api.iconify.design/fluent-emoji:crying-cat.svg";
const catNeutral = "https://api.iconify.design/fluent-emoji:pouting-cat.svg";
const catHappy = "https://api.iconify.design/fluent-emoji:grinning-cat-with-smiling-eyes.svg";
const catLove = "https://api.iconify.design/fluent-emoji:smiling-cat-with-heart-eyes.svg";

const reasons = [
  {
    title: "Because you make me feel understood. 🫶🏻",
    text: "You don't just listen to me; you actually try to understand what's behind my words. 💗"
  },
  {
    title: "Because you can change my mood. 🌷",
    text: "Even when I'm having a bad day, talking to you can make me feel better and smile. ☺️"
  },
  {
    title: "Because you remember the little things. 🎀",
    text: "You notice the tiny details that other people might simply overlook. 🥹"
  },
  {
    title: "Because you reassure me without me having to ask. 🤍",
    text: "And that's one of the things that makes me feel safe and comfortable with you. 🫂"
  },
  {
    title: "Because you've seen different sides of me and you're still here. 🌸",
    text: "You don't only love the perfect version of me; you accept me as I am. 🩷"
  },
  {
    title: "Because you let me be myself. 🦋",
    text: "I never feel like I have to pretend or change who I am just to be enough for you. 💞"
  },
  {
    title: "Because you know how to deal with me, even when I'm difficult. 😭",
    text: "I'm not always easy to understand or deal with, but somehow, you still know how to handle me. 🫶🏻"
  },
  {
    title: "Because you make me feel like what I say matters. 💌",
    text: "Even the things I think are silly, you listen to and take seriously. 🥺"
  },
  {
    title: "Because you've become part of my everyday life. 🌙",
    text: "You're one of those people whose presence or absence can genuinely change my day. 🤍"
  },
  {
    title: "Because you're simply you. ♡",
    text: "It's not because of one quality, one moment, or one reason I can put into words. I love you for who you are, in all your little details, and that's probably the one thing I'm sure of even when I can't explain it. 🫀"
  }
];

let currentReasonIndex = 0;

slider.addEventListener('input', function() {
  let val = parseInt(this.value);

  if (val < 25) {
    percentDisplay.innerText = val + '%';
    statusTitle.innerText = "Only that much?";
    catImg.src = catSad;
    nextStepBtn.classList.add('hidden');
  } else if (val < 60) {
    percentDisplay.innerText = val + '%';
    statusTitle.innerText = "That hurts...";
    catImg.src = catNeutral;
    nextStepBtn.classList.add('hidden');
  } else if (val < 90) {
    percentDisplay.innerText = val + '%';
    statusTitle.innerText = "Half? Seriously?";
    catImg.src = catHappy;
    nextStepBtn.classList.add('hidden');
  } else if (val < 100) {
    percentDisplay.innerText = val + '%';
    statusTitle.innerText = "Aww, that's more like it!";
    catImg.src = catLove;
    nextStepBtn.classList.add('hidden');
  } else {
    percentDisplay.innerText = "1000%";
    statusTitle.innerText = "Correct answer!";
    catImg.src = catLove;
    nextStepBtn.classList.remove('hidden');
  }
});

function hideAllSections() {
  document.getElementById('step-1').classList.add('hidden');
  document.getElementById('step-2').classList.add('hidden');
  document.getElementById('surprise-bouquet').classList.add('hidden');
  document.getElementById('surprise-reasons').classList.add('hidden');
  document.getElementById('surprise-letter').classList.add('hidden');
}

function showStep(stepNum) {
  hideAllSections();
  document.getElementById('step-' + stepNum).classList.remove('hidden');
}

function showSurprise(type) {
  hideAllSections();
  document.getElementById('surprise-' + type).classList.remove('hidden');
}

function nextReason() {
  currentReasonIndex = (currentReasonIndex + 1) % reasons.length;
  document.getElementById('reason-num').innerText = "Reason #" + (currentReasonIndex + 1);
  document.getElementById('reason-head').innerText = reasons[currentReasonIndex].title;
  document.getElementById('reason-content').innerText = reasons[currentReasonIndex].text;
}
