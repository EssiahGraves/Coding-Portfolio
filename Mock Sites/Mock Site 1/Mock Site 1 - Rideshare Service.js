var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}



var footerColl = document.getElementsByClassName("footer-collapsible");
var footerI;

for (footerI = 0; footerI < footerColl.length; footerI++) {
  footerColl[footerI].addEventListener("click", function() {
    this.classList.toggle("active");
    var footerContent = this.nextElementSibling;
    if (footerContent.style.maxHeight){
      footerContent.style.maxHeight = null;
    } else {
      footerContent.style.maxHeight = footerContent.scrollHeight + "px";
    } 
  });
}