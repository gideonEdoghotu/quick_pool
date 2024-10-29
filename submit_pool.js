async function submitPoll() {
    const form = document.getElementById('pollForm');
    const formData = new FormData(form);
    const selectedOption = formData.get('topic');
    
    if (selectedOption) {
        try {
            const response = await fetch('/.netlify/functions/submitPoll', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic: selectedOption })
            });
            const result = await response.json();
            document.getElementById('thanksMessage').style.display = 'block';
        } catch (error) {
            console.error("Error submitting poll:", error);
        }
    }
}