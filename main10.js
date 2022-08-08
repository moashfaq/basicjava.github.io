console.log("Connected with external js");
console.log(document);
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.all);
console.log(document.all[7]);


document.title=12345;
document.all[7].textContent='tittleeee';


var age=prompt("please enter your age");
if(age>20){
    alert("Great you are valid user");
}
else{
    alert("Sorry you are not valid user");
}

