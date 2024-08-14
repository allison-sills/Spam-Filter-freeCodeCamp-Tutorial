// Select the input field, result display area, and button elements from the DOM
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// Regular expressions to match specific spam patterns
const helpRegex = /please help|assist me/i; // Matches phrases like "please help" or "assist me"
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i; // Matches patterns like "100 dollars" or "5 million dollars"
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i; // Matches variations of "free money", accounting for common letter substitutions
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i; // Matches variations of "stock alert", using common substitutions for letters
const dearRegex = /dear friend/i; // Matches the phrase "dear friend", often found in spam messages

// Combine the regular expressions into an array (deny list)
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// Function to check if the input message matches any of the deny list patterns
const isSpam = (msg) => denyList.some((regex) => regex.test(msg)); 
// `some()` method checks if at least one regex pattern matches the input message

// Add an event listener to the "Check Message" button
checkMessageButton.addEventListener("click", () => {
  // If the input field is empty, show an alert and exit the function
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  // Check if the input message is spam and update the result text accordingly
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message." // If spam, display this message
    : "This message does not seem to contain any spam."; // If not spam, display this message

  // Clear the input field after processing
  messageInput.value = "";
});
