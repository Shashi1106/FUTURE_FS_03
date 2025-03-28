async function shortenUrl() {
    const urlInput = document.getElementById('urlInput').value;
    if (!urlInput) {
        alert('Please enter a valid URL');
        return;
    }

    const response = await fetch('http://localhost:5000/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl: urlInput })
    });

    const data = await response.json();
    document.getElementById('shortUrl').innerHTML = `Short URL: <a href="http://localhost:5000/${data.shortUrl}" target="_blank">http://localhost:5000/${data.shortUrl}</a>`;
}
