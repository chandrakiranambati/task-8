var main = new XMLHttpRequest();
main.open('GET','https://restcountries.com/v2/all',true);
main.send();
main.onload = function (){
    if(main.status==200){
       let data = JSON.parse(main.responseText);
       data.forEach(element => {
        console.log(element);
       }); 
    }
}