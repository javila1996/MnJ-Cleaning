// Footer year (works on every page)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Quote form handler (only runs on pages with the form)
const form = document.getElementById("quoteForm");
const statusEl = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    const subject = encodeURIComponent("House Cleaning Quote Request");
    const body = encodeURIComponent(
`Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Service: ${data.service}
Home size: ${data.size || "N/A"}
Preferred date: ${data.date || "N/A"}

Details:
${data.message || "N/A"}`
    );

    // Change to your parents’ business email:
    const to = "hello@yourcleaningbusiness.com";

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    if (statusEl) statusEl.textContent = "Opening your email app…";
  });
}
