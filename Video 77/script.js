function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewStr
    if(views>1000000){
        viewStr = views/1000000 + "M"
    }
    else if(views>1000){
        viewStr = views/1000 + "K"
    }
    else{
        viewStr = views + ""
    }

    let html = `<div class="card">

            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>

            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`

    document.querySelector(".container").innerHTML += html
}

createCard("Creating Our First Website | Sigma Web Dev Video #2", "CodeWithHarry", 560000, 7, "31:13", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBN31a8sOnPAnEuvlpME-PMXo_01w"
)

createCard("Netflix Clone using HTML and CSS | Sigma Web Dev Video #53", "CodeWithHarry", 1530000, 24, "1:53:23", "https://i.ytimg.com/vi/ovKVqo-L2EM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5kY65z416DkXwBToGol0gulfEEw"
)

createCard("Spotify Clone using HTML, CSS and JavaScript | Sigma Web Dev Video #84", "CodeWithHarry", 1270000, 24, "5:35:39", "https://i.ytimg.com/vi/CYwEq1GdU4E/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDCXcXhdLH4kAutkkvJ-TyviYzloA"
)