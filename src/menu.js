export default function menu(){
    const mainContentDiv = document.querySelector("#content");
    const menuHeading = document.createElement("h1");
    
    
    
    
    

    menuHeading.textContent = "Menu";
    //menu item1
    const menuItem1Div = document.createElement("div");
    const menuItem1Heading = document.createElement("h2");
    const itemDescription1 = document.createElement("p");
    const price1 = document.createElement("span");
    menuItem1Div.classList.add("menu-item", "menu-item1");
    menuItem1Heading.classList
    menuItem1Heading.textContent = "Al Pastor";
    itemDescription1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet"
    price1.textContent = "$15";

    
    //menu item2
    const menuItem2Div = document.createElement("div");
    const menuItem2Heading = document.createElement("h2");
    const itemDescription2 = document.createElement("p");
    const price2 = document.createElement("span");
    menuItem2Div.classList.add("menu-item", "menu-item2");
    menuItem2Heading.textContent = "Carne Asada";
    itemDescription2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet";
    price2.textContent = "$10";


    //menu item3
    const menuItem3Div = document.createElement("div");
    const menuItem3Heading = document.createElement("h2");
    const itemDescription3 = document.createElement("p");
    const price3 = document.createElement("span");
    menuItem3Div.classList.add("menu-item", "menu-item3")

    
    menuItem3Heading.textContent = "Carnitas";
    itemDescription3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet";
    price3.textContent = "$20";
    
   
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");

    menuItem1Div.append(menuItem1Heading, itemDescription1, price1);
    menuItem2Div.append(menuItem2Heading, itemDescription2, price2 );
    menuItem3Div.append(menuItem3Heading, itemDescription3, price3);
    menuDiv.append(menuItem1Div, menuItem2Div, menuItem3Div)

    mainContentDiv.replaceChildren(menuDiv);
}