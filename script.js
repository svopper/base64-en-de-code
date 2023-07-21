const input = document.getElementById('input');
const output = document.getElementById('output');
const encode = document.getElementById('encode');
const decode = document.getElementById('decode');
const copyToClipboardButton = document.getElementById('copy-to-clipboard');
const copyPrompt = document.getElementById("copyPrompt");

function encodeData() {
    output.value = btoa(input.value);
}

function decodeData() {
    output.value = atob(input.value);
}

input.addEventListener('input', () => {
    if (encode.checked) {
        encodeData();
    } else {
        decodeData();
    }
});

encode.addEventListener('change', () => {
    encodeData();
});

decode.addEventListener('change', () => {
    decodeData();
});

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);

    copyPrompt.style.display = "block";

    // Add animation class for feedback
    copyButton.classList.add("copyAnimation");
    setTimeout(() => copyButton.classList.remove("copyAnimation"), 1000);

    // Hide the prompt message after a short delay
    setTimeout(() => {
        copyPrompt.style.display = "none";
    }, 1000);
});