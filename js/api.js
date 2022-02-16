
// spinner function
const toggleSpinner=displayStyle=>{
    document.getElementById('spinner').style.display=displayStyle
}



// fetch data from API function

const dataLoad=()=>{
    const searchText=document.getElementById('search-field').value
    document.getElementById('search-field').value=''

    if(searchText==''){
        alert('Sorry')
    }
    else if(searchText<0){
        alert('Sorry')
    }

   else{
        // spinner function call
    toggleSpinner('block')

    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
    .then(res=>res.json())
    .then(data=>displayBook(data.docs))
   }

    
    

}

//  book display function 

const displayBook=data=>{
    const displaybook=document.getElementById('display-book')

    // remove previous data
    displaybook.textContent=''

    //  spinner function call
    toggleSpinner('none') 

    data.forEach(info=>{
        console.log(info)
        if(info.cover_i){
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="shadow-xl p-5 ">
            <div class=" bg-gray-200 py-5 mb-5">
                <img class=" mx-auto  " width="300px" height="300px" src=" https://covers.openlibrary.org/b/id/${info.cover_i ? info.cover_i:'' }-M.jpg "alt="Not available">
            </div>
            <h1 class=" text-1xl font-bold ">Title Name:${info.title}</h1>
            <h1 class=" text-1xl mt-1">Author Name:${info.author_name[0]}</h1>
            <h1 class=" text-1xl mt-1">Publisher:${info.publisher[0]}</h1>
            <h1 class=" text-1xl mt-1">Publish date:${info.publish_date[0]}</h1>
               
            <div class="flex justify-between mt-3">
                <h1 class=" text-1xl">Price</h1>
                <button class="bg-teal-600 p-1 text-white rounded-md text-1xl">Buy Name </button>
            </div>
        </div>
        `
        displaybook.appendChild(div)
        
        }   
          
    })
    
    

    toggleSearchResult('block')
}