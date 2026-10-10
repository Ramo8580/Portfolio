var b=document.querySelector(".burger"),n=document.getElementById("nav");
b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
n.addEventListener("click",function(e){if(e.target.tagName==="A"){n.classList.remove("open");b.setAttribute("aria-expanded","false")}});
document.querySelectorAll(".tabs button").forEach(function(t){t.addEventListener("click",function(){
document.querySelectorAll(".tabs button").forEach(function(x){x.setAttribute("aria-pressed",x===t)});
var f=t.dataset.f;document.querySelectorAll(".prj article").forEach(function(a){a.hidden=!(f==="all"||a.dataset.c.split(" ").indexOf(f)>-1)})})});
document.getElementById("f").addEventListener("submit",function(e){e.preventDefault();
var v=document.getElementById("em").value;
location.href="mailto:rameshwarsingh0005@gmail.com?subject="+encodeURIComponent("Let's work together")+"&body="+encodeURIComponent("Hi Rameshwar,\n\nYou can reach me at: "+v)});
var els=document.querySelectorAll(".rv");
if("IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(el){io.observe(el)})}else{els.forEach(function(el){el.classList.add("in")})}
