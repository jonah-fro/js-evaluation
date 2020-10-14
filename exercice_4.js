/** récuperation des paths du svg et de la légende */
var paths = document.getElementsByTagName("path");
var legend = document.getElementById("legend");
/** lorsqu'un click est effectué, supprime le précédent s'il y en a un */
for(var i=0;i<paths.length;i++){
    paths[i].addEventListener("click",function(){
        var clicked = document.getElementsByClassName("click");
        for(var o=0;o<clicked.length;o++){
            clicked[o].classList.remove("click");
        }

        this.classList.add("click");
        /** affichage de la légende */
        legend.innerText = this.getAttribute("id");
    });
}

