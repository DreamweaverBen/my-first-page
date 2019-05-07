var storedName = localStorage.getItem("name");
document.querySelector("button").onclick = setUserName;
if(!storedName){
	setUserName();
}
else{
	setHeading(storedName);
}

function setUserName(){
	var myName = prompt("请输入你的名字");
	localStorage.setItem("name", myName);
	setHeading(myName);
}

function setHeading(name){
	let oH1 = document.querySelector("h1");
	oH1.textContent = "Mozilla酷毙了，" + name + "!";
}
