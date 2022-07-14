var main = new XMLHttpRequest();
main.open('GET','https://restcountries.com/v2/all',true)
main.send();
main.onload = function (){
    if (main.status==200){
        var data =  JSON.parse(main.responseText);
        let result = data.filter((num)=>{
            return num.population >= 200000;
        });
        console.log(result);
    }
}