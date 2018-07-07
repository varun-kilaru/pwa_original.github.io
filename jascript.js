
"use strict" 
function getFile(file,callback){ 
var xhr=new XMLHttpRequest(); 
xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true); 
xhr.onreadystatechange=function(){ 
if(xhr.readyState===4 && xhr.status == "200"){
 callback(xhr.responseText); } 
}; 
xhr.send(null);
 } 
getFile("JSON_file.json",function(text){ 
	var data=JSON.parse(text); career(data.person);
	 } ) 

function career(text){ console.log(text); // document.getElementById("akhil").innerHTML = text.education.inter.cname; 
document.getElementById("carobj").innerHTML="<h2>" +text.career.obj+ "</h2>" 
document.getElementById("add").innerHTML="<h4>"+text.address.h_no+"," +text.address.street+ ","+text.address.village+"</h4>" 
document.getElementById("qual").innerHTML="<li><pre>"+text.education.school.sname +"		"+text.education.school.year +"		"+text.education.school.degree +"</pre></li>"+"<li><pre>"+text.education.inter.cname+"		"+text.education.inter.year+"		"+text.education.inter.degree   +"</pre></li>"+"<li><pre>"+text.education.engineering.cname+"		"+text.education.engineering.year+"		"+text.education.engineering.degree   +"</pre></li>" }
