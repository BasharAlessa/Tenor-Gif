
const btn = document.querySelector("#btn")
const container = document.querySelector("#gif-container")
btn.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();
    let subject = document.querySelector("#query").value;
    console.log(subject);
    xhr.open("GET",`https://api.tenor.com/v1/search?q=${subject}&key=AIzaSyBSe5ibblVH__ZvJzUgmK05LPvVOqs0rf0`,true)

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            var newData = JSON.parse(this.responseText)

            var output ="";
            for (let i = 0; i < newData.results.length; i++) {
                output += `<div class="char">
                <img class="imgs" src="${newData.results[i].media[0].gif.url}" width="25%" height="auto">
                </div>`;
            }
            container.innerHTML = output;
        }
    };
    xhr.send();
})