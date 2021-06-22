function changeContent(el) {
    let articles = document.querySelectorAll("article");
    for (let el of articles) {
        el.setAttribute("style", "display: none");
    }
    switch(el.id) {
        case "menu":
            document.querySelector(".myPic").setAttribute("style", "display: block");
            break;
        case "menuTech": 
            document.querySelector(".coding").setAttribute("style", "display: block");
            break;
        case "menuProjects": 
            document.querySelector(".projects").setAttribute("style", "display: block");
            break;
        case "menuWork": 
            document.querySelector(".experience").setAttribute("style", "display: block");
            break;
        case "menuEdu": 
            document.querySelector(".education").setAttribute("style", "display: block");
            break;
        case "menuSkills": 
            document.querySelector(".skills").setAttribute("style", "display: block");
            break;
        case "menuContact":
            document.querySelector(".contactInfo").setAttribute("style", "display: block");
            break;
    }
}

// function showWorkMenu() {
//     document.querySelector(".workMenu").
// }