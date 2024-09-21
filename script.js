function search() {
    let searchTerm = document.getElementById("sterm").value
    let googleUrl = "https://www.google.com/search?q=" + searchTerm
    let duckduckgoUrl = "https://www.duckduckgo.com/?q=" + searchTerm
    window.open(duckduckgoUrl, "_blank")
    window.open(googleUrl, "_blank")
}

