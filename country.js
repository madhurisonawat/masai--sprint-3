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
        var data=JSON.parse(this.response)
        console.log(data)
     
     var con=document.getElementById('con')
    con.innerHTML=data.Global.TotalConfirmed

    var newcases= document.getElementById('new')
    newcases.innerHTML=data.Global.NewConfirmed

    var death=document.getElementById('death')
    death.innerHTML=data.Global.TotalDeaths

    var america=document.getElementById('country1')
    america.innerHTML=data.Countries[177].TotalConfirmed

    var australia=document.getElementById('country2')
    australia.innerHTML=data.Countries[8].TotalConfirmed

    var india=document.getElementById('country3')
    india.innerHTML=data.Countries[76].TotalConfirmed

    var china=document.getElementById('country4')
    china.innerHTML=data.Countries[35].TotalConfirmed

    var southafrica=document.getElementById('country5')
    southafrica.innerHTML=data.Countries[154].TotalConfirmed

       }
       
})
