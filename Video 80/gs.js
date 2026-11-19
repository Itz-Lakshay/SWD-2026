class User{
    constructor(name){
        //invokes the setter
        this.name = name
    }

    get name(){ //when we are consoling user.name , this func gets run(getter gets run)
        return this._name
    }

    set name(val){
        if(val.length<4){
            console.log("Name is too short!")
            return
        }
        this._name = val
    }
}

let user = new User("John")
console.log(user.name)
user.name = "Harry" //now we are setting the properpy of an exsisting object, this will run setter
console.log(user.name);
