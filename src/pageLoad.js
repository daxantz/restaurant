function pageLoad() {
    const header = document.createElement("h1");
    const descriptionContainer = document.createElement("div");
    const descriptionText = document.createElement("p");
    const hoursContainer = document.createElement("div");
    const locationContainer = document.createElement("div");
    const hoursHeading = document.createElement("h3");
    const locationHeading = document.createElement("h3");
    const addressText = document.createElement("p");
    const mainContentDiv = document.querySelector("#content");
    
    
    //first div
    descriptionContainer.classList.add("first");
    header.textContent = "Dax's Taco Resaurant and Bistro";
    descriptionText.textContent = "Our traditional recipes will awaken your sense of taste with delicious flavors. We pride ourselves on serving our customers like no other taco restaurant with the freshest ingredients to make your meal a flavor bomb in your mouth."
    descriptionContainer.append(header,descriptionText);

    //second div
    hoursContainer.classList.add("hours");
    hoursHeading.textContent = "Hours";
    hoursContainer.appendChild(hoursHeading);
    const daysOfWeek = [
        "Sunday: ",
        "Monday: ",
        "Tuesday: ", 
        "Wednesday :",
        "Thursday: ",
        "Friday: ",
        "Saturday: "
    ]
    for(let i = 0; i < 7; i++){
        const paragraph = document.createElement("p");
        paragraph.textContent = daysOfWeek[i] + "12pm - 10pm";
        hoursContainer.appendChild(paragraph);
    }

    //third div
    locationContainer.classList.add("location")
    locationHeading.textContent = "Address";
    addressText.textContent = "123 Nowhere Road, long Branch, New Jersey";
    locationContainer.append(locationHeading, addressText);




    mainContentDiv.append(descriptionContainer, hoursContainer, locationContainer);

}

export {pageLoad}