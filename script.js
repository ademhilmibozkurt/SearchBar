const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const search = searchWrapper.querySelector(".search-icon")

search.addEventListener("click", searchOnWeb);
inputBox.addEventListener('keypress', function(e)
{
    if(e.key === 'Enter')
        {
            searchOnWeb();
        }
});


let url = "https://www.google.com/";
function searchOnWeb()
{
    url = updateQueryStringParameter(url, "search?q", inputBox.value)
    window.open(url,'_blank');
}


function updateQueryStringParameter(url, key, value) 
{
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    //var separator = url.indexOf('?') !== -1 ? "&" : "?";
    if (url.match(re)) {
      return url.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
      return url + key + "=" + value;
    }
}

// #D8D8D8 grey