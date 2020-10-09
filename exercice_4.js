const paths = document.getElementsByTagName("path");
const legend = document.getElementById("legend");

for(let i=0;i<paths.length;i++){
    paths[i].addEventListener("click",function(){
        const clicked = document.getElementsByClassName("click");
        for(let o=0;o<clicked.length;o++){
            clicked[o].classList.remove("click");
        }

        this.classList.add("click");
        legend.innerText = this.getAttribute("id");
    });
}

