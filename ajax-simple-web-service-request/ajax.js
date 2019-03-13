
function loadUser(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://thatsthespir.it/api', true);

  xhr.onload = function(){
    if(this.status == 200){
      let users = JSON.parse(this.responseText);

      let output = '';
        output +=
        '<img src="'+users.photo+' "width="400" height="400";>' +
        '<ul>' +
        '<li>'+users.quote+ '</li>' +
        '<li>'+users.author+'</li>' +
        '</ul>' +
        '</div>'
        document.getElementById("text").innerHTML = output;

    }
  }
  xhr.send();
}

loadUser();
