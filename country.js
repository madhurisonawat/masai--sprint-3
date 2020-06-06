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
