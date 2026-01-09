document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quoteForm");
    const statusEl = document.getElementById("formStatus");
  
    if (!form) return;
  
    const WEB_APP_URL =
      "https://script.google.com/macros/s/AKfycbxbumIDbK9iYKRAie9EPXdP0NVXk1pu1bBov755QjvKKjI8T0sExQCujPbc7edIvzZnng/exec";
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      statusEl.textContent = "Sending request…";
  
      // Build URL-encoded body (avoids CORS preflight on GitHub Pages)
      const formData = new FormData(form);
      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        params.append(key, value);
      }
  
      try {
        const res = await fetch(WEB_APP_URL, {
          method: "POST",
          body: params,
        });
  
        const data = await res.json();
  
        if (!data.ok) throw new Error(data.error || "Submission failed");
  
        statusEl.textContent = `Request sent! Confirmation ID: ${data.requestId}`;
        form.reset();
      } catch (err) {
        console.error(err);
        statusEl.textContent =
          "Sorry—something went wrong. Please try again or call/text us.";
      }
    });
  });
  
  