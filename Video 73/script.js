function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish This Function
    let div = document.createElement("div")
    div.setAttribute("class", "card")
    document.querySelector(".container").append(div)
    
    let thumbnailContainer = document.createElement("div")
    thumbnailContainer.setAttribute("class", "thumbnail")
    div.append(thumbnailContainer)
    let img = document.createElement("img")
    img.setAttribute("src", thumbnail)
    thumbnailContainer.append(img)


    let time = document.createElement("div")
    let timep = document.createElement("p")
    timep.innerHTML = duration
    time.setAttribute("class", "time")
    time.append(timep)
    thumbnailContainer.append(time)

    let details = document.createElement("div")
    details.setAttribute("class", "details")
    div.append(details)

    let p = document.createElement("p")
    p.innerHTML = title
    details.append(p)

    let info = document.createElement("div")
    let viewStr
    if (views >= 1000000) {
        viewStr = `${views / 1000000}M views`
    }
    else if (views >= 1000) {
        viewStr = `${views / 1000}K views`
    }
    else {
        viewStr = views
    }
    info.innerHTML = `${cName} · ${viewStr} · ${monthsOld} mo ago`
    info.setAttribute("class", "info")
    details.append(info)

}

createCard("Creating Our First Website | Sigma Web Dev Video #2", "CodeWithHarry", 560000, 7, "31:13", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBN31a8sOnPAnEuvlpME-PMXo_01w"
)

createCard("Netflix Clone using HTML and CSS | Sigma Web Dev Video #53", "CodeWithHarry", 1530000, 24, "1:53:23", "https://i.ytimg.com/vi/ovKVqo-L2EM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5kY65z416DkXwBToGol0gulfEEw"
)

createCard("Spotify Clone using HTML, CSS and JavaScript | Sigma Web Dev Video #84", "CodeWithHarry", 1270000, 24, "5:35:39", "https://i.ytimg.com/vi/CYwEq1GdU4E/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDCXcXhdLH4kAutkkvJ-TyviYzloA"
)