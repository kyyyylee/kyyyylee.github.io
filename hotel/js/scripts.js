// what is the path to the JSON file?
const apiURL = "hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    //loop
    for (i = 0; i < myList.length; i++) {
    //creating img tag
    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;
    
    //creating figcaption
    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;
    
    //creating figure tag
    let myFigureTag = document.createElement("figure")
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);

    //create icon tags
    let myAddressIcon = document.createElement("i");
    myAddressIcon.className = "icon ion-md-compass";

    let myPhoneIcon = document.createElement("i");
    myPhoneIcon.className = "icon ion-md-call";
    
    //create p tags
    //address line
    let myAddressTag = document.createElement("p");
    myAddressTag.textContent = myList[i].address[0];
    
    //city line
    let myCityTag = document.createElement("p");
    myCityTag.textContent = myList[i].address[1];
    
    //div for address lines 
    let addressDiv = document.createElement("div");
    addressDiv.appendChild(myAddressTag);
    addressDiv.appendChild(myCityTag);

    //phone
    let myPhoneTag = document.createElement("p");
    myPhoneTag.textContent = myList[1].phone
    
    //create spans for info
    //address span
    let addressSpanTag = document.createElement("span")
    addressSpanTag.className = "addressSpan";
    addressSpanTag.appendChild(myAddressIcon);
    addressSpanTag.appendChild(addressDiv);
    
    //phone span
    let phoneSpanTag = document.createElement("span");
    phoneSpanTag.className = "phoneSpan";
    phoneSpanTag.appendChild(myPhoneIcon);
    phoneSpanTag.appendChild(myPhoneTag);

    //make div for spans
    let infoDiv = document.createElement("div");
    infoDiv.className = "infoDiv";
    infoDiv.appendChild(addressSpanTag);
    infoDiv.appendChild(phoneSpanTag);


    //section to hold figure and info div
    let mySection = document.createElement("section");
    mySection.appendChild(myFigureTag);
    mySection.appendChild(infoDiv);

    //append everything to card
    document.getElementById('myCards').appendChild(mySection);
    
    }//end of the loop
    
}); //end of "then" fat arrow function