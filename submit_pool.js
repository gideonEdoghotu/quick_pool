function submitPoll() {
            const form = document.getElementById('pollForm');
            const formData = new FormData(form);
            const selectedOption = formData.get('topic');
            if (selectedOption) {
                // Log response to console (this could be sent to a server or stored locally for tracking)
                console.log(`Selected topic: ${selectedOption}`);
                document.getElementById('thanksMessage').style.display = 'block';
                
                // Here you could store the data in local storage
                let responses = JSON.parse(localStorage.getItem('pollResponses')) || [];
                responses.push(selectedOption);
                localStorage.setItem('pollResponses', JSON.stringify(responses));

                // Reset the form and hide the form after submission
                form.reset();
            }
        }