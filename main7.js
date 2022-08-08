console.log("Connected with external js");


class Fruits
{
    constructor()
    {
        console.log("parent cons");
    }
}

class Apple extends Fruits
{
    constructor()
    {
        super();
        console.log("child cons");
    }
}

