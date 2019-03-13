
$.ajax({
  method: 'GET',
  url: 'https://thatsthespir.it/api',
  dataType: 'json'
}).done(function(data){
  console.log(data);

    $('#result').append('<p>'+data.author+'</p>') +
    $('#result').append('<p>'+data.quote+'</p>') +
    $('#result').append('<img src="'+data.photo+' "width="400" height="400";>')

})
