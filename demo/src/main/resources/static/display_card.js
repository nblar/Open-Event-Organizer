function details_fetch() {
    
    var data="";
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        var elem=this.responseText;
        var obj=JSON.parse(elem);
        console.log(obj);

            var display = document.getElementById('id');
            Object.keys(obj).forEach(function (key) {
            let details = obj[key];
           // console.log(obj[key]);
            let eventID = details[0];
            let title = details[1];
            let eventType = details[3];
            let category = details[4];
            let venue = details[5];
            let time = details[6];
            let date = details[9];
            let description = details[11];
            var card = `<div class="card"><a href="javascript:void(0)" onclick="getCardDetails(this)"><img src="img2.png" class="card-img-top" alt="..."></a><div class="card-body"><h5 class="card-title">${title}b;a</h5><p class="card-text">${date} ${time}</p><p class="card-text">${description}</p><p class="card-text"><small class="text-muted">By Coding Club</small></p></div></div>`;
            display.innerHTML += card;
        });
        
    }
    });

    xhr.open("GET", "http://localhost:8080/returnDetails");
    xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

}