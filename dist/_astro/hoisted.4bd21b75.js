import"./hoisted.dd1fc69a.js";const f=[{heading:"Summary",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB",image:"https://cdn.vlabs.ac.in/logo/summary.png"},{heading:"IITK",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/p_ifh10ixy0c",image:"https://cdn.vlabs.ac.in/logo/iitk.png"},{heading:"IITB",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB",image:"https://cdn.vlabs.ac.in/logo/iitb.png"},{heading:"IITR",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB",image:"https://cdn.vlabs.ac.in/logo/iitr.png"},{heading:"IITG",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB",image:"https://cdn.vlabs.ac.in/logo/iitg.png"},{heading:"IIITH",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB",image:"https://cdn.vlabs.ac.in/logo/iiith.png"},{heading:"IITD",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB",image:"https://cdn.vlabs.ac.in/logo/iitd.png"},{heading:"NITK",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB",image:"https://cdn.vlabs.ac.in/logo/nitk.png"},{heading:"Amrita",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB",image:"https://cdn.vlabs.ac.in/logo/amrita.png"},{heading:"Dayalbagh",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB",image:"https://cdn.vlabs.ac.in/logo/dayalbagh.png"},{heading:"COEP",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB",image:"https://cdn.vlabs.ac.in/logo/coep.png"},{heading:"Experiments",iframe_src:"https://lookerstudio.google.com/embed/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB",image:"https://cdn.vlabs.ac.in/logo/experiments.jpg"}],h={institutes:f};var s=h.institutes;const m=document.getElementById("dropdownButton"),r=document.getElementById("dropdown-menu"),b=document.getElementById("listitems");s.forEach(e=>{var t=document.createElement("li");t.classList.add("column","is-narrow","logo");const o=document.createElement("div");o.classList.add("is-flex","is-flex-direction-column","has-text-centered","total"),o.style.border="1px solid black",o.style.borderRadius="10px";const i=document.createElement("span");i.classList.add("column","py-0"),i.textContent=e.heading;const a=document.createElement("div");a.classList.add("column","image-container"),a.style.padding="0%";const n=document.createElement("img");n.src=e.image,n.style.height="100px",n.style.width="100px",a.appendChild(n),o.appendChild(i),o.appendChild(a),t.appendChild(o),b.appendChild(t)});const u=b.querySelectorAll(".logo");let d=null;u.forEach(function(e){e.addEventListener("click",function(t){const o=e.querySelector("span");d&&(d.style.boxShadow="none"),d=e,d.style.boxShadow="0 0 10px rgba(0, 0, 0, 0.5)";let i=null;s.forEach(c=>{c.heading===o.innerHTML&&(i=c)});const a=document.querySelector("iframe"),n=i.iframe_src;n!=a.src&&(a.src=n),t.preventDefault()})});var l=document.createElement("div");l.classList.add("dropdown-menu");var g=document.createElement("div");g.classList.add("dropdown-content");s.forEach(e=>{var t=document.createElement("a");t.classList.add("dropdown-item"),t.textContent=e.heading,g.appendChild(t)});l.appendChild(g);r.appendChild(l);const v=r.querySelectorAll(".dropdown-item");m.addEventListener("click",function(e){r.classList.toggle("is-active"),e.preventDefault()});v.forEach(function(e){e.addEventListener("click",function(t){m.innerHTML=e.innerHTML+"&#9660;";const o=e;let i=null;s.forEach(c=>{c.heading===o.innerHTML&&(i=c)});const a=document.querySelector("iframe"),n=i.iframe_src;n!=a.src&&(a.src=n),r.classList.remove("is-active"),t.preventDefault()})});var p=document.querySelector("iframe");p.onload=function(){p.style.height="130vh"};
