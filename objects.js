var zahra ={
  name:"Fathimah Az-Zahra",                                 
  Age:3,                                              
  sayName: function(){
    console.log(this.name)},
  ageNumber: function (){
    console.log(this.Age)},
  showID: function(){
    console.log('My Name: ', this.sayName()," Umur: ", this.ageNumber() )
  },
}

var database = {
  userData : []
}

//How to add object to array on object
database.userData.push(zahra)

