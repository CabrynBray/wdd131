const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

const lastModified = document.querySelector("#lastModified");

lastModified.textContent =
    `Last Modification: ${document.lastModified}`;