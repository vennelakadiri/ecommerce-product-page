const main=document.getElementById("main"),
      price=document.getElementById("price"),
      qty=document.getElementById("qty"),
      msg=document.getElementById("msg");

function swap(t){main.src=t.src}
function update(){price.innerText=2999*qty.value}
function cart(){msg.innerText="Added ✔";setTimeout(()=>msg.innerText="",2000)}
