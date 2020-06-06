var btn=document.getElementById('bttn')
btn.addEventListener('click',page_con)
function page_con(){
 

   window.open('country.html', '_blank')
}
window.addEventListener("change",function(){
    var xhr=new XMLHttpRequest()
   
 var url=new URL('https://api.covid19api.com/summary')

    var params=new URLSearchParams()
    url.search=params.toString()
    console.log(url.href)
    xhr.open('GET',url.href)
    xhr.send()
    xhr.onload=function(){
        var data=JSON.parse(this.response)
         var query=document.getElementById('query').value
       
       if(query=="Global"){
           var so =data.Global
           console.log(so)
       }
      
       else{

       var so=data.Countries[query]
       
     
     
    }
    localStorage.setItem('info',JSON.stringify(so))
}
})
window.addEventListener('load',function(){
    var xhr=new XMLHttpRequest()
   
    var url=new URL('https://api.covid19api.com/summary')
   
       var params=new URLSearchParams()
       url.search=params.toString()
       console.log(url.href)
       xhr.open('GET',url.href)
       xhr.send()
       xhr.onload=function(){
           var count=JSON.stringify(data.countries)
           var data=JSON.parse(this.response)
           console.log(data.Global.NewConfirmed)
     var con=document.getElementById('con')
    con.innerHTML=data.Global.TotalConfirmed
    var newcases= document.getElementById('new')
    newcases.innerHTML=data.Global.NewConfirmed
    var death=document.getElementById('death')
    death.innerHTML=data.Global.TotalDeaths
    var america=document.getElementById('country1')
    america.innerHTML=count[177]


 
       }  
})
