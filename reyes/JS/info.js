
const info = (title, para, contactBtn) => {
    let div = document.createElement("div")
    div.className = "Leftclass"
    div.innerHTML = `<h1 class="h1t">${title}</h1>
                     <p>${para}</p>
                     <button class="btns1" >${contactBtn}</button>
                     `
                     
    return div
}

export {info}
