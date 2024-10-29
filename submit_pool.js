document.querySelector(".submit-button").addEventListener("click", async () => {
    const selectedOption = document.querySelector('input[name="topic"]:checked');

    if (!selectedOption) {
        alert("Please select an option before submitting.");
        return;
    }

    const data = { topic: selectedOption.value };
    
    try {
        const response = await fetch("/.netlify/functions/submitPoll", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            document.getElementById("thanksMessage").style.display = "block";
        } else {
            console.error("Failed to submit poll", response.status);
        }
    } catch (error) {
        console.error("Error submitting poll:", error);
    }
});
