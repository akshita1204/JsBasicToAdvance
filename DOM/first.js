
const newele=document.createElement("h2");
newele.textContent="Stay tuned for more updates!!!";
newele.id="second";

const ele=document.getElementById("first");
ele.after(newele);
ele.style.backgroundColor="brown";

const newele2=document.createElement("h3");
newele2.textContent="There is a Diwali Offer going on...";
newele2.id="third";
newele2.className="diwali";
newele.after(newele2);
newele2.style.color="yellow";


const list=document.createElement("li");
list.textContent="Web Development Course";
const ulele=document.getElementById("listing");
ulele.append(list);