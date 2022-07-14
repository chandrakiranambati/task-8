var main = new XMLHttpRequest();
main.open('GET','https://restcountries.com/v2/all',true);
main.send();
main.onload = function(){
    if(main.status==200){
        let data = JSON.parse(main.responseText);
        let result = data.reduce((acc,curr)=>{
           acc.population = acc.population + curr.population;
           return acc;
        });
        console.log(result.population);
    }
}