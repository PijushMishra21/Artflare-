document.querySelector('.hamburger-menu').addEventListener('click', function() {
 document.querySelector('.navbar').classList.toggle('active');
});



function toggleContent(contentId) {
 let contents = document.getElementsByClassName("content");
 for (var i = 0; i < contents.length; i++) {
     contents[i].style.display = "none";
 }

 let content = document.getElementById(contentId);
 if (content) {
     content.style.display = "block";
 }

 let links = document.getElementsByClassName("link");
 for (var i = 0; i < links.length; i++) {
     links[i].classList.remove("active");

 }
 document.querySelector(".link[data-content='" + contentId + "']").classList.add("active");
}

