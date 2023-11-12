const wrapper = document.querySelector(".wrapper")

fetch("http://localhost:3000/Products")
    .then(res => res.json())
    .then(data => data.forEach(x => {
        ObjetCard(x.id, x.img_url, x.name, x.type)
    }))

function ObjetCard(id, img_url, name, type) {
    const card = document.createElement('div')
    const cardwrapper = document.createElement('div')
    const imgwrapper = document.createElement('div')
    const idcard = document.createElement('div')
    const cardimg = document.createElement('img')
    const cardname = document.createElement('div')
    const cardtype = document.createElement('div')
    const editbtn = document.createElement('button')


    idcard.textContent = id
    cardimg.src = img_url
    cardname.textContent = "Product name: " + name
    cardtype.textContent = "Product type: " + type

    cardwrapper.classList.add("cardwrapper")
    imgwrapper.classList.add("imgwrapper")
    wrapper.append(card)
    card.append(imgwrapper, cardwrapper)
    cardwrapper.append(idcard, cardname, cardtype)
    imgwrapper.append(cardimg)
    card.classList.add("card")
    card.append(editbtn)
    editbtn.textContent = "Edit"
    editbtn.classList.add("edit-btn")

    const addbtn = document.querySelector(".add-card-btn")

    addbtn.addEventListener("click", function() {
        location.href = "./createpage.html";
    })

    editbtn.addEventListener("click", function() {
        location.href = "./editobject.html";
    })

}