const input = document.getElementById('input');
const output = document.getElementById('output-area');
const encode = document.getElementById('encode');
const decode = document.getElementById('decode');
const from = document.getElementById('from');
const to = document.getElementById('to');
const copyToClipboardButton = document.getElementById('copy-to-clipboard');
const copyPrompt = document.getElementById("copy-prompt");
const errorMessage = document.getElementById("error-message");

const BASE64 = "Base64";
const PLAIN = "Plain Text";

function encodeData() {
    output.value = btoa(input.value);
}

function decodeData() {
    try {
        var decodedData = atob(input.value);
        output.value = decodedData;
        errorMessage.innerHTML = "";
    } catch (e) {
        errorMessage.innerHTML = "Invalid base64 string"
    }
}

input.addEventListener('input', () => {
    encode.checked
        ? encodeData()
        : decodeData();
});

encode.addEventListener('change', () => {
    swapInputOutput();
    encodeData();
});

decode.addEventListener('change', () => {
    swapInputOutput();
    decodeData();
});

from.innerText = BASE64;
to.innerText = PLAIN;

function swapInputOutput() {
    let temp = input.value;
    input.value = output.value;
    output.value = temp;

    let tempText = from.innerText;
    from.innerText = to.innerText;
    to.innerText = tempText;
}

const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);

    copyPrompt.style.display = "block";

    // Add animation class for feedback
    copyButton.classList.add("copy-animation");
    setTimeout(() => copyButton.classList.remove("copy-animation"), 1000);

    // Hide the prompt message after a short delay
    setTimeout(() => {
        copyPrompt.style.display = "none";
    }, 1000);
});