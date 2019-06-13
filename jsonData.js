// let jsondata;    
// let url = "/New ZL/libraryData.json"
// fetch(url).then(
//         function(u){ return u.json();}
//       ).then(
//         function(json){
//           jsondata = json;
//         }
//       )

$.getJSON("libraryData.json", function (data) {
    $.each(data, function (index, value) {
       console.log(value);
    });
});