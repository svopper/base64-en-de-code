const input = document.getElementById('input');
const output = document.getElementById('output');
const encode = document.getElementById('encode');
const decode = document.getElementById('decode');
const copyToClipboardButton = document.getElementById('copy-to-clipboard');
const copyPrompt = document.getElementById("copy-prompt");
const errorMessage = document.getElementById("error-message");

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
    encodeData();
});

decode.addEventListener('change', () => {
    decodeData();
});

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