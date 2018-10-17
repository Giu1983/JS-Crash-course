javascript.js
//Geolocalization
//  Agenda –To do  list App


// classes: Hairstylist, Beautyshop, Users




// This project is an agenda-to do list app with geolocalization.


// For now, the following interactions are:

//For now, the following interactions are:

  //Hairstylist – Beautyshop (with name, guests, city, comments)
                   //Weekly or montly service – offer (date, number, price)
                  //Customer (name & comments). 

             var hairStylist = class {
                 constructor (name, guest, city, comments) {
                     this.name = name
                     this.guest = guest
                     this.city = city
                     this. comments = []
                       }

                 addComment() {
                  this.comments.push(comment)
}
}
              addGuest(guest){
               this.guest.push(guest)
}
            

              addCity(city) {
             this.cities.push(city)
}

//Create an Offer class




var Offer = class {

  constructor(date, number, price) {

    this.date = date

    this.number = number

    this.price = price

  }




  sayUserName() {

    console.log('My name is', this.name)

  }




  sayShopPlace() {

    console.log('The shop is', this.place)

  }




  setPrice (offer) {

    console.log('It cost EUR', this.price)

    offer.price = this.price

    

  }

}

//Create a Seller class


var Seller = class {

    constructor(category, name, city) {
  
      this.category = category
  
      this.name = name
  
      this.city = city
  
    }


var hairStylist1 = new Seller('hairstylist1', 'name','Berlin')

var hairstylist2 = new Seller('haistylist2', 'name','Leipzig')

var haistylist3 = new Seller('haistylist3', 'name', 'Dusserldorf')


var beautyShop1 = new Seller('beautyshop1', 'name','Berlin')

var beautyShop2 = new Seller('beautyshop2','name', 'Leipzig')

var beautyShop3 = new Seller('beautyshop3', 'name','Dusserldorf')


hairStylist1.sayPlace()

 hairStylist1.set_offer-service(x)

 beautyShop1.sayName()

 beautyShop1.sayPlace()

 beautyShop1.set_offer_service(y)



// check that everything got recorded correctly
                             //Shop
 console.log(hairStylist1)
   console.log(hairStylist2)
   console.log(hairStylist3)
   console.log(beautyShop1)
   console.log(beautyShop2)
   console.log(beautyShop3)


//Offer-service

console.log(x)
console.log(y)


//User
console.log(A)
console.log(B)
console.log(C)
            


