
// fetch data from API function

const dataLoad=()=>{
    const searchText=document.getElementById('search-field').value
    document.getElementById('search-field').value=''

    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
    .then(res=>res.json())
    .then(data=>displayBook(data.docs))

}

//  book display function 

const displayBook=data=>{
    const displaybook=document.getElementById('display-book')
    displaybook.textContent=''
    
    data.forEach(info=>{

        console.log(info)
        const div=document.createElement('div')
        div.innerHTML=`
        <div>
        <img src="" alt="sorry to load">
        <h1>Title Name:${info.title}</h1>
        <h1>Author Name:${info.author_name}</h1>
        <h1>Publisher:${info.publisher}</h1>
        <h1>Publish date:${info.publish_date}</h1>
        


        <div class="flex">
            <h1>Price</h1>
            <button class="bg-teal-600 p-1 text-white rounded-md">Buy Name </button>
        </div>
    </div>
        `
        displaybook.appendChild(div)
    })
}