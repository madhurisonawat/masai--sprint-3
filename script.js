window.addEventListener("load",function(){
   var xhr=new XMLHttpRequest()
  var arr1=this.localStorage.getItem("info")
 var arr=JSON.parse(arr1)
  displaypage(arr)
})

function displaypage(arr){
  

   var res=document.getElementById('res')
   res.innerHTML=""
var global1=arr
  
  console.log( global1)

    for(key in global1){
       var div=document.createElement('div')
          var div1=document.createElement('div')
     
       div.append(key+":    " +global1[key])
       div.setAttribute('style','color:blue;padding:20px;font-size:25px');
      
          div1.append(div)
         
         div1.style.border="1px dotted black"
          res.append(div1)
        
          
   
  res.setAttribute('style','border:2px solid black;width:400px;margin:auto;padding:20px;background-color:pink')
   
   
}
}
