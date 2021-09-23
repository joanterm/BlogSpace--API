const url = "https://apis.scrimba.com/jsonplaceholder/posts"
const titleArea = document.querySelector(".title-area")
const formCollector = document.querySelector("#form-collector")
const postTitle = document.querySelector("#post-title")
const postBody = document.querySelector("#post-body")


//FETCH ALL DATA FROM THE SERVER (GET)
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
    titleArea.innerHTML = displayedText
    console.log(selectedData)
})




const submitForm = (event) => {
    console.log("click")
    event.preventDefault();
    // let formInformation = new FormData(event.target)
    // let postTitle = formInformation.get("post-title")
    const postTitleInfo = postTitle.value
    const postBodyInfo = postBody.value
    const data = {
        title: postTitleInfo,
        body: postBodyInfo
    }
    //FETCH DATA INTO THE SERVER (POST)
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        // let newPost = "" 
        // let newTitle = data.title
        // titleArea.innerHTML = newTitle
    })
    


    console.log(postTitleInfo)
    console.log(postBodyInfo)
}

formCollector.addEventListener("submit", submitForm)



