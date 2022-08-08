console.log("Connected with external js");

function a(age)
{
    if(age<16)
    {
        try{
            throw new Error("You are under age");
        }
        catch(Error){
            console.log(Error);
        }
    }

else{
    console.log("You can vote");
}

}
a(20)


