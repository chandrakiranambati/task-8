var main = new XMLHttpRequest();
main.open('GET','https://restcountries.com/v2/all',true);
main.send();
main.onload = function() {
    if(main.status == 200){
        var data = JSON.parse(main.responseText);
        let result = data
        .filter((country)=>country.currencies[0]['code'] ==='USD')
        .map((country)=> country.name)
        console.log(result);
    }
}