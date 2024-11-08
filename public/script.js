document.getElementById("generate").addEventListener("click", async () => {
    const tone = document.getElementById("tone").value;
  
    try {
      // Send a POST request to GenKit's complimentFlow endpoint on port 4000
      const response = await fetch(`http://localhost:3400/complimentFlow`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            tone
          }
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        document.getElementById("compliment").textContent = data.result;  // Display the generated compliment
      } else {
        document.getElementById("compliment").textContent = `Error generating compliment: ${response.status}`;
      }
    } catch (error) {
      console.error("Fetch error:", error);
      document.getElementById("compliment").textContent = "Network error: " + error.message;
    }
  });
  