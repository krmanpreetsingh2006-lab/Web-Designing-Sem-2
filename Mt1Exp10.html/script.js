function checkCharacter() {
    let ch = document.getElementById("charInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (ch === "") {
        result.innerHTML = "Please enter a character!";
        result.className = "error";
    }
    else if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        result.innerHTML = ch + " is a Vowel";
        result.className = "vowel";
    }
    else if (ch >= 'a' && ch <= 'z') {
        result.innerHTML = ch + " is a Consonant";
        result.className = "consonant";
    }
    else {
        result.innerHTML = "Invalid input! Enter a letter only.";
        result.className = "error";
    }
}