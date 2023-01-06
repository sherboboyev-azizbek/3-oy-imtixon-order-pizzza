const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const phone = document.querySelector("#phone");
const jps = document.querySelector("#jps");
const elCard = document.querySelector(".cards");
const elSelect = document.querySelector("#js-select");
const elRadius = document.querySelector("#radius");






// dough thickness
const thinPizza = 10;
const mediumPizza = 12;
const thickPizza = 15;
// Size
const onePizza = 10;
const twoPizza = 12;
const thirdPizza = 15;

// subtotal  size ishlatildi
let subtotal = 0;
let selectTotal = 0;

const data = [];

form.addEventListener("submit", (e) => {
   e.preventDefault();

   // Dought thickness
   const elSelect = document.querySelector("#js-select");
   let elSelectArr = [];
   for (i = 0; i < elSelect.length; i++) {
      if(elSelect[i].value){
         
         elSelectArr.push(elSelect[i].value)
      }
      if (elSelect.value === "Thin"){
         selectTotal = 10;
      }
      if (elSelect.value === "Medium"){
         selectTotal = 12;
      }
      if (elSelect.value === "Thick"){
         selectTotal = 15;
      }
   }
   //-------------------- size
   let cheese = document.getElementsByName("cheese");
   let size = [] ;
   for (i = 0; i < cheese.length; i++) {
      
      if (cheese[i].checked) {
         size.push(cheese[i].value)
      }
      // console.log(cheese[0].checked);
      if(cheese[0].checked){
         subtotal = 10;
      }
      if(cheese[1].checked){
         subtotal = 12;
      }
      if(cheese[2].checked){
         subtotal = 15;
      }
      

   }
   // On pizza
   let avt = document.getElementsByClassName("on-pizza"); 
   let pizza = [] ;
   for (i = 0; i < avt.length; i++) {
      if (avt[i].checked){
         pizza.push(avt[i].value);
      }
   }
   let res = pizza.length *5;
   
   //-------------------- Add pizza
   let adp = document.getElementsByClassName("add-pizza")
   let add = [];
   for (i = 0; i < adp.length; i++) {
      if (adp[i].checked) {
         add.push(adp[i].value)
      }  
   }
   let addSum =add.length*3;
   
   const user = {
      id: data.length + 1,
      name: userName.value,
      phone: phone.value,
      jps: jps.value,
      thickness:elSelect.value,
      size: size,
      pizza: pizza,
      add:add,
      total: subtotal + res +addSum + selectTotal,
      
  
   }
   data.push(user);
   render();
   
   
})

function render() {
   
   elCard.innerHTML = ""
   
   for(let i = 0; i < data.length; i++){
      
      const card = `
      <div class=" cards border border-dark row col-12 d-flex mb-3">
      <div class="card" style="width: 40rem;">
      <div class="card-body">
      <h3 class="card-title"><strong>Order: </strong> ${data[i].id}</h3>
      <h3 class="card-title"><strong>Name: </strong>${data[i].name}</h3>
      <h3 class="card-title"><strong>Phone: </strong>${data[i].phone}</h3>
      <h3 class="card-title pb-2 lines "><strong>Addres: </strong>${data[i].jps}</h3>
      <h3 class="card-title"><strong>Dought thickness: </strong>${data[i].thickness}</h3>
      <h3 class="card-title"><strong> Size: </strong>${data[i].size} sm</h3>
      <h3 class="card-title"><strong> On pizza: </strong>${data[i].pizza}</h3>
      <h3 class="card-title pb-4 lines "><strong> Add: </strong>${data[i].add}</h3>
      <h3 class="card-title"><strong><span class="me-3">Total :  $</span></strong>${data[i].total}</h3>
      </div>
      </div>
      </div>
      `
      elCard.innerHTML += card;
   }
   
}
