const url = "https://apis.scrimba.com/jsonplaceholder/posts"
const titleArea = document.querySelector(".title-area")
const newTitleArea = document.querySelector(".new-title-area")
const formCollector = document.querySelector("#form-collector")
const postTitle = document.querySelector("#post-title")
const postBody = document.querySelector("#post-body")


//FETCH ALL DATA OF POSTS FROM THE SERVER (GET)
fetch(url, {
    method:"GET"
})
.then((response) => {
    return response.json()
})
.then((data) => {
    const selectedData = data.slice(0,5)

    let displayedText = ""
    selectedData.forEach((element) => {
        const title = element.title
        const body = element.body
        displayedText += `
            <h3>${title}</h3>
            <p>${body}</p>
        `
    })
    console.log(selectedData)
    titleArea.innerHTML = displayedText     
})



//SUBMIT FORM
const submitForm = (event) => {
    console.log("Form submitted")
    event.preventDefault();

    const postTitleInfo = postTitle.value
    const postBodyInfo = postBody.value
    const newPostData = {
        title: postTitleInfo,
        body: postBodyInfo
    }
    //FETCH DATA OF NEW POST INTO THE SERVER
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newPostData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        //APPENDS NEW TITLE + POST INTO DOM
        let newAddedTitle = document.createElement("h3")
        let newAddedBody = document.createElement("p")
        newAddedTitle.innerHTML = data.title
        newAddedBody.innerHTML = data.body
        newTitleArea.prepend(newAddedTitle, newAddedBody)
    })   
    console.log(postTitleInfo)
    console.log(postBodyInfo)
}

formCollector.addEventListener("submit", submitForm)



