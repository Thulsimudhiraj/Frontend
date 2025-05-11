let user = {
    name:"thulsi",
    show:()=>{
        console.log(this)//window
        console.log("hello in arrow function",this.name)
    },
    show1:function(){
        console.log(this)//user
        console.log("hello in normal function",this.name)
    }
}
user.show()//this.name is undef n arrow fun
user.show1()//this.name we get as thulsi


///there is no concept of this inside the arrow.
//show arrow fun takes this from lexical scope that is from parent.
//parent of show is window
//while creating obj,we will not use arrow function.
//difference b/w arrow fun and normal fun is concept of this.
//constructor fun we never create with the help arrow bcz arrow fun doesnot support constructor bcz of thisonly
//all the constructors we have created with the normal fun only.

