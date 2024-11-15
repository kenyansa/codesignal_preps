// Simple text encryption using Caesar Cipher technique
// The Caesar Cipher for `shift = 3` cyclically shifts every letter of the word by 3 positions:
// a -> d, b -> e, c -> f, ..., x -> a, y -> b, z -> c

// Implement the encryption logic by shifting each alphabet character
function encryptText(text) {
    let encrypted = '';
    let shift = 3;  // the Caesar Cipher shift

    for (let i = 0; i < text.length; i++) {
        let c = text[i];

        if (/^[a-z]$/.test(c)) {  // lowercase letter
            encrypted += String.fromCharCode(((c.charCodeAt(0) - 97 + shift) % 26) + 97);
        } else if (/^[A-Z]$/.test(c)) {  // uppercase letter
            encrypted += String.fromCharCode(((c.charCodeAt(0) - 65 + shift) % 26) + 65);
        } else {
            encrypted += c;  // keep non-letter characters unchanged
        }
    }
    return encrypted;
}

// Example text to encrypt
let originalText = "Hello, JavaScript!";
// The encryptText function call and console.log statement should remain the same as the solution
let encryptedText = encryptText(originalText);
console.log(encryptedText);  // Correct output after TODO should be 'Khoor, MdydVfulsw!'