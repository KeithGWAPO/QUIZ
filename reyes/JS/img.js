
const img = (image) => {
    let div = document.createElement("div")
    div.className = "Rightclass"
    div.innerHTML = `<img class="rimg"src="./images/${image}">`

    return div
}

export {img}