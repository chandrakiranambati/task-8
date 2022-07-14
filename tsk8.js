var main = new XMLHttpRequest();
main.open('GET',"https://restcountries.com/v2/all",true);
main.send();
main.onload = function(){
    if(main.status==200){
    //let data = main.responseText;
    let data = JSON.parse(main.responseText);
    //console.log(data.name);

    let result = data.filter((j)=>{
        return  j.region==="Asia";
    });
    console.log(result);
}
}