// Get HTML elements
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const clearBtn = document.getElementById("clearBtn");

// Update character and word count
textInput.addEventListener("input", function () {
    const text = textInput.value;

    // Count characters
    charCount.textContent = text.length;

    // Count words
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    wordCount.textContent = words;
});

// Clear the textarea and reset counts
clearBtn.addEventListener("click", function () {
    textInput.value = "";

    charCount.textContent = "0";
    wordCount.textContent = "0";

    textInput.focus();
});