document.addEventListener('click', (event) => {
    const messages = [
        "I love you",
        "You're so pretty",
        "You're gorgeous",
        "I love you so much",
        "My Cutie",
        "My cute Ivana",
        "My love",
        "My Everything",
        "My Heart",
        "My Soul",
        "My Sunshine",
        "My bright Star",
        "My Sun",
        "My Moon",
        "My Baby",
        "My Happiness",
        "I fucking love you",
        "You shine brighter than a Star",
        "My beautiful Girl",
        "My gorgeous Girl",
        "How can someone be as pretty as you? Impossible.",
        "Have you looked in the mirror, cause god damn you're so gorgeous I can't even comprehend it.",
        "Mwah Mwah Mwah Mwah Mwah Mwah 💋",
        "♥️💌💘💝💓💕💟❣️❤️🩷🫶💞💗💖"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const messageBox = document.createElement('div');
    messageBox.className = 'message-box';
    messageBox.textContent = randomMessage;
    document.body.appendChild(messageBox);

    const x = event.clientX;
    const y = event.clientY;
    messageBox.style.left = `${x}px`;
    messageBox.style.top = `${y}px`;

    setTimeout(() => {
        messageBox.style.opacity = 1;
    }, 0);

    setTimeout(() => {
        messageBox.style.opacity = 0;
    }, 4000);

    setTimeout(() => {
        document.body.removeChild(messageBox);
    }, 5000);
});
