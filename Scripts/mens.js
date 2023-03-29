// link with mens.html and write the funtionalities

let APIURL = `https://fine-puce-vulture-garb.cyclic.app/Dfabrica/?&_limit=5`;
renderData(1);
function renderData(pageNumber)
{
    fetch(`${APIURL}&_page=${pageNumber}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        // write the function to display the data inthe DOM.
    })
}

// use the above part for fetching the api with pagination part