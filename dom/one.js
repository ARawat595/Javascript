//Method to select elements from html

//1=> document.getElementById('title') will give see below

//<h1 id="title" class="heading">DOM learning on Chai aur code </h1>

//This is way to get attribute

// we can access title elements (document.getElementById('title').id) like this will give value of id
//(document.getElementById('title').className)// will give class name(heading)
//(document.getElementById('title').getAttribute('id')) // title 
//(document.getElementById('title').getAttribute('class'))// heading
//(document.getElementById('title').setAttribute('class', 'test')) this will always override previous class name so if you ant previous should not be overriden the write this way (document.getElementById('title').getAttribute('class', 'test heading'))

//stored in variable
//const title = document.getElementById('title')
//title.style.backgroundColor= "green"
//more styling applied 
/*title.style.padding= "20px",title.style.borderRadius= "20px" */

//This is way to get content
//title.textContent: it will print the hidden text as well

//title.innerHTML: It will give the value of html and if any html written inside it will print that as well for ex:= DOM learning on Chai aur code <span style="display: none;"> test text</span></h1>

//title.innerText: It will print text which is displayed in the browser


//************Selecting Using Query selector********

// document.querySelector('h2') this will give the first (h2) of the document
// document.querySelector('#title') // to select an id 
// document.querySelector('.heading')// to select a class
// document.querySelector('input[type ="password"]')// to select a input type

//************Applying on unordered list for an individual element*********
/*const myul = document.querySelector('ul')
myul.style.color="red" //it will change color of evry li item in ul 
//if we want only first one to change its color then we will again store in new variable

turnBlue = querySelector('li')/ this will change color of first element
turnBue.style.color="blue";
turnBlue.innerText="fourty" // we can apply more styling*/

//*************Using QuerySelectorAll*********************

//const tempLiList= document.querySelectorAll('li')
//tempLiList[0].style.color = "green" //bcz we get NodeList we can access using index 
//tempLiList.forEach(function(l) { //here we can use for each to apply stlying in nodelist
    //console.log(l)
//})

//const myH1=document.querySelectorAll('h1')//in case of h1 since it is single still we have to give index value 
//myH1[0].style.color="red"

//Note: NodeList and HTML Collection these are not pure array

//1=> In NodeList we get forEach in prototype but not any map

//2=> In HTML Collection we do not have any looping so we have to first convert it into array then access its values  see below example 

// Another way of accessing using classname(getElementsByClassNam)
//const tempLiClassName = document.getElementsByClassName("list-item")
/*Since this give (HTML collection) so in its prototype we dont have ay loop */
//const MyConArray = Array.from(tempLiClassName)// this (Array.from) will convert it into array
//MyConArray.forEach(function(li){
//li.style.color="red";
//li.style.backgroundColor="blue";
//li.style.padding="20px";
//li.innerText="Ankush"}) //like this we can apply styling

