var selectednull=null

let contain=document.createElement("div")
contain.setAttribute("id","contain")

let maincontain=document.createElement("div")
maincontain.setAttribute("id","maincontain")

let label=document.createElement("p")
label.innerText="Product code"
label.setAttribute("for","productcode")

let input=document.createElement("input")
input.setAttribute("type","number")
input.setAttribute("id","productcode")


let label1=document.createElement("p")
label1.innerText="Product Name"
label1.setAttribute("for","product")

let input1=document.createElement("input")
input1.setAttribute("type","text")
input1.setAttribute("id","product")


let label2=document.createElement("p")
label2.innerText="Qty"
label2.setAttribute("for","qty")

let input2=document.createElement("input")
input2.setAttribute("type","number")
input2.setAttribute("id","qty")


let label3=document.createElement("p")
label3.innerText="Price"
label3.setAttribute("for","price")

let input3=document.createElement("input")
input3.setAttribute("type","number")
input3.setAttribute("id","price")

let div1=document.createElement("div1")
div1.setAttribute("id","div1")

let btn1=document.createElement("button")
btn1.innerText="submit"

let btn2=document.createElement("button")
btn2.setAttribute("id","btn2")
btn2.innerText="Reset"

maincontain.append(label,input,label1,input1,label2,input2,label3,input3,div1)
div1.append(btn1,btn2)
document.body.append(contain)

let table1=document.createElement("div")
table1.setAttribute("id","table1")


let table=document.createElement("table")
let tr=document.createElement("tr")
let th=document.createElement("th")
th.innerText="productcode"

let th1=document.createElement("th")
th1.innerText="product Name"

let th2=document.createElement("th")
th2.innerText="qty"

let th3=document.createElement("th")
th3.innerText="price"

let th4=document.createElement("th")
th4.innerText="Action"


tr.append(th,th1,th2,th3,th4)
table.append(tr)
table1.append(table)
contain.append(maincontain,table1)



btn1.addEventListener("click",btnvalue)


function btnvalue(){
 

   if(selectednull==null){


   if(input.value=="" || input1.value==""|| input2.value==""|| input3.value=="")
   {
      alert("Please Enter a Valid Product")
   }
   else{
    let tr2=document.createElement("tr")
    let td1=document.createElement("td");
    td1.innerText=input.value;
    input.value="";
    
    let td2=document.createElement("td");
    td2.innerText=input1.value;
    input1.value=""
    
    let td3=document.createElement("td");
    td3.innerText=input2.value;
    input2.value=""
    
    let td4=document.createElement("td");
    td4.innerText=input3.value;
    input3.value="";

    // let td5=document.createElement("td")
  
    
    let ebtn=document.createElement("button")
    ebtn.innerText="Edit"
    ebtn.setAttribute("id","btn")

    let dbtn=document.createElement("button")
    dbtn.innerText="Delete"
    dbtn.setAttribute("id","btn3")
    
    // td5.append(ebtn,dbtn)
    tr2.append(td1,td2,td3,td4,ebtn,dbtn)
    table.append(tr2)

   


   dbtn.addEventListener("click",del)

   function del(){
     if(confirm("Do you sure delete the item"))
     {
      td1.parentElement.remove()
     }
   }


   ebtn.addEventListener("click",function(){
    editFunction(this)
   })

  //  ebtn.addEventListener("click",edit)
  //       function edit() {
  //           input.value=td1.innerText
  //           input1.value=td2.innerText
  //           input2.value=td3.innerText
  //           input3.value=td4.innerText
  //       }  
  }
}


else{
  updatefunction()
}


function editFunction(element)
{
   selectednull=element.parentElement.childNodes;
   input.value=selectednull[0].innerText
   input1.value=selectednull[1].innerText
   input2.value=selectednull[2].innerText
   input3.value=selectednull[3].innerText
} 

function updatefunction()
{
  selectednull[0].innerText=input.value
  selectednull[1].innerText=input1.value
  selectednull[2].innerText=input2.value
  selectednull[3].innerText=input3.value

  input.value=""
  input1.value=""
  input2.value=""
  input3.value=""

  selectednull=null
 
}


let btn=document.getElementById("btn2")

btn.addEventListener("click",reset)

function reset(){
  
  if(confirm("Do you sure to reset the value")){
   input.value=""
   input1.value=""
   input2.value=""
   input3.value=""
  }
}
}
