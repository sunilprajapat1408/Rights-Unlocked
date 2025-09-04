function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    
    // Add user's message to chat box
    var userBubble = document.createElement("div");
    userBubble.classList.add("chat-bubble", "user");
    userBubble.textContent = userInput;
    chatBox.appendChild(userBubble);
    
    // Clear user input field
    document.getElementById("user-input").value = "";
    
    // Simulate AI response (replace with actual AI interaction)
    setTimeout(function() {
        var aiResponse = document.createElement("div");
        aiResponse.classList.add("chat-bubble", "assistant");
        aiResponse.textContent = "Hi! I'm an AI. How can I help you today?";
        chatBox.appendChild(aiResponse);
        
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500); // Simulate typing delay and AI processing time
}


const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})