
export default function aboutPage() {
    const mainContentDiv = document.querySelector("#content");
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("aboutDiv");
    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "About";
    const aboutText = document.createElement("p");
    aboutText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet";


    aboutDiv.append(aboutHeading, aboutText);
    mainContentDiv.replaceChildren(aboutDiv);
}

