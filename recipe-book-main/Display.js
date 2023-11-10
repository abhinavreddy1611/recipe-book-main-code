cart=[];
function renders(){

    let s="";
    cart.forEach((value,index)=>{
      s=s+ ` 
        <div class="Steps">
          <p class="written-steps">
            ${cart[index]}
          </p>
          </div>
          <div class="Delete-Button">
              <button class="delete" onclick="deletes(${index}) "> Delete </button>
              </div>
        `
    
    })
    document.querySelector(".written-contents").innerHTML=s;
    }
document.querySelector(".recipe-adder").addEventListener('click',()=>{
   if(document.querySelector(".Input-Taker").value!==""){ 
cart.push(document.querySelector(".Input-Taker").value);
document.querySelector(".Input-Taker").value="";
renders();}

})
function deletes(index){
    cart.splice(index,1);
    renders();

}






