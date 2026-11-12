function randTime() {
    return Math.ceil((Math.random() * 6000) + 1000)
}

let cont = document.createElement("div")
cont.setAttribute("class","container")
document.body.append(cont)

let heading = document.createElement("h1")
heading.innerHTML = "Hacker's Terminal"
cont.append(heading)

function msg(m) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = document.createElement("p")
            x.innerHTML = m

            for (let i = 0; i < 3; i++) {
                let dot = document.createElement("span")
                dot.innerHTML = "."
                dot.setAttribute("class","dot")
                x.append(dot)   
            }
            document.querySelector(".container").append(x)
            resolve()
        }, randTime());
    })
}

async function main(){
    await msg("Initializing Hacking")
    await msg("Reading Your Files")
    await msg("Password Files Detected")
    await msg("Sending all passwords and personal files to server")
    await msg("Cleaning Up")
}

main()