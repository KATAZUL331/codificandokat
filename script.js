// script.js

// Declarar variables
let inputText = document.getElementById('input-text');
let encryptBtn = document.getElementById('encrypt-btn');
let decryptBtn = document.getElementById('decrypt-btn');
let copyBtn = document.getElementById('copy-btn');
let outputText = document.getElementById('output-text');

// Función para encriptar texto
function encrypt(text) {
  // Convertir texto a minúsculas
  text = text.toLowerCase();
  
  let encryptedText = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    switch (char) {
      case 'e':
        encryptedText += 'enter';
        break;
      case 'i':
        encryptedText += 'imes';
        break;
      case 'a':
        encryptedText += 'ai';
        break;
      case 'o':
        encryptedText += 'ober';
        break;
      case 'u':
        encryptedText += 'ufat';
        break;
      default:
        encryptedText += char;
    }
  }
  return encryptedText;
}

// Función para desencriptar texto
function decrypt(text) {
  let decryptedText = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    switch (char) {
      case 'enter':
        decryptedText += 'e';
        break;
      case 'imes':
        decryptedText += 'i';
        break;
      case 'ai':
        decryptedText += 'a';
        break;
      case 'ober':
        decryptedText += 'o';
        break;
      case 'ufat':
        decryptedText += 'u';
        break;
      default:
        decryptedText += char;
    }
  }
  return decryptedText;
}

// Función para validar texto
function validateText(text) {
  if (/[A-Z]/.test(text)) {
    alert("Error: Solo se admiten minúsculas.");
    return false;
  }
  return true;
}

// Eventos para los botones
encryptBtn.addEventListener('click', () => {
  let text = inputText.value;
  if (validateText(text)) {
    let encryptedText = encrypt(text);
    outputText.textContent = encryptedText;
  }
});

decryptBtn.addEventListener('click', () => {
  let text = inputText.value;
  if (validateText(text)) {
    let decryptedText = decrypt(text);
    outputText.textContent = decryptedText;
  }
});

copyBtn.addEventListener('click', () => {
  let text = outputText.textContent;
  navigator.clipboard.writeText(text);
  alert('Texto copiado al portapapeles');
});