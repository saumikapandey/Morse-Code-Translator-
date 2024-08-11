const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ' ': '/'
};

function translateToMorse() {
    const input = document.getElementById('textInput').value.toUpperCase();
    let output = '';
    for (let char of input) {
        output += morseCodeMap[char] ? morseCodeMap[char] + ' ' : '';
    }
    document.getElementById('morseOutput').innerText = output.trim();
}

function translateToText() {
    const input = document.getElementById('morseInput').value.trim();
    const morseArray = input.split(' ');
    let output = '';
    for (let morseChar of morseArray) {
        const char = Object.keys(morseCodeMap).find(key => morseCodeMap[key] === morseChar);
        output += char ? char : '';
    }
    document.getElementById('textOutput').innerText = output;
}

