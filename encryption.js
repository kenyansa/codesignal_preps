function encryptString(text) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        
        // Check if `c` is a lowercase letter and not 'z'
        if (/^[a-yA-Y]$/.test(c)) {
        // alternatively:
        // if(c >= 'a' && c <= 'y'){
            encrypted += String.fromCharCode(c.charCodeAt(0) + 1);
        }
        // Check if `c` is 'z', and change it to 'a'
        else if (c === 'z') {
            encrypted += 'a';
        }
        // Check if `c` is an uppercase letter and not 'Z'
        // else if (/^[A-Y]$/.test(c)) {
        // // alternatively:
        // // if(c >= 'A' && c <= 'Y'){
        //     encrypted += String.fromCharCode(c.charCodeAt(0) + 1);
        // }
        // Check if `c` is 'Z', and change it to 'A'
        else if (c === 'Z') {
            encrypted += 'A';
        }
        // If it's not a letter, append it unchanged
        else {
            encrypted += c;
        }
    }
    return encrypted;
}

console.log("The encrypted text is: " + encryptString("Hello, Java!")); // Should print out "Ifmmp, Kbwb!"
