const text = `
Mahh Joudyyy,
on this special day of urs, I js wanna let u know From the moment u came into my life, everything started feeling lighterr, softer, and a little bit more magical even tho i dont believe in magic 😭
uuu r the first person I want to text when smth good happens and the only person I need when everything feels heavy 😔 ur text makes my worst days feel survivable frrr I want more latenytee talks,
more stupid jokes nd a lottttt cringyyy stufffff 😋, And thanks for readinggg this shyttt that i wrote 😭😭😭 I LOVEEEEEEE UUH SOMUCH and u gonna see ts in every slide hehehehehehehheheeee 
Happy Birthday, my babyyyyy💖
`;

let i = 0;

function typeText() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 40);
    }
}

typeText();


function continueNext() {
    window.location.href = "cake.html"; // change later if needed
}
