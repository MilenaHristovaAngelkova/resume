function startPage() {
    hideInfo();
    document.querySelector(".myPic").setAttribute("style", "display: block");
};

function hideInfo() {
    let articles = document.querySelectorAll("article");
    for (let el of articles) {
        el.setAttribute("style", "display: none");
    }
}

function changeContent(el) {
    hideInfo();
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

function showJob(elem) {
    hideInfo();
    document.querySelector(".experience").setAttribute("style", "display: block");

    switch (elem.id) {
        case "mngr":
            elem.href = "#manager";
            break;
        case "TL-dets":
            elem.href = "#TL";
            break;
        case "LRG-dets":
            elem.href = "#LRG-associate";
            break;
        case "CS-rep-dets":
            elem.href = "#CS-rep";
            break;
        case "CS-agent-dets":
            elem.href = "#CS-agent";
            break;
        case "vol":
            elem.href = "#voluntary";
            break;
    }

    elem.click();
}

function showMoreInfo(element) {   
    switch(element.id) {
        case "more-details-mngr":
            document.querySelector("#manager-more").setAttribute("style", "display: block");
            document.querySelector("#less-details-mngr").setAttribute("style", "display: block");
            break;
        case "more-details-TL":
            document.querySelector("#TL-more").setAttribute("style", "display: block");
            document.querySelector("#less-details-TL").setAttribute("style", "display: block");
            break;
        case "more-details-LRG":
            document.querySelector("#LRG-more").setAttribute("style", "display: block");
            document.querySelector("#less-details-LRG").setAttribute("style", "display: block");
            break;
    }
}

function showLessInfo(element) {   
    switch(element.id) {
        case "less-details-mngr":
            document.querySelector("#manager-more").setAttribute("style", "display: none");
            document.querySelector("#less-details-mngr").setAttribute("style", "display: none");
            break;
        case "less-details-TL":
            document.querySelector("#TL-more").setAttribute("style", "display: none");
            document.querySelector("#less-details-TL").setAttribute("style", "display: none");
            break;
        case "less-details-LRG":
            document.querySelector("#LRG-more").setAttribute("style", "display: none");
            document.querySelector("#less-details-LRG").setAttribute("style", "display: none");
            break;
    }
}