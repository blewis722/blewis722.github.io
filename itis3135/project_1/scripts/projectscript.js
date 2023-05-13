$(function() {
    console.log(location.pathname.split("/").splice(-1));
      const pathname = String(location.pathname.split("/") .splice(-1));
      const links = {
          "1": {
              "url": "index.html",
              "text": "Home",
              "alt": "Example Homepage"
          },
          "2": {
              "url": "about.html",
              "text": "About",
              "alt": "About Page" 
          },
          "3": {
              "url": "services.html",
              "text": "Services",
              "alt": "Exoerience Page"
          },
          "4": {
             "url": "portfolio.html",
             "text": "Portfolio",
             "alt": "Portfolio Page"
           },
          "5": {
            "url": "contact.html",
            "text": "Contact",
            "alt": "Contact Page"
          }
      };
 
      const linkSeperator = " | "
      let htmlString = " ";
 
          for(var id in links){
              if(pathname === links[id]['url']){
                  htmlString+= links[id]['text'];
              }else{
                  htmlString += '<a href="' + links[id]['url'] + '">' + links[id]['text'] + '</a>';
              }
              if(Number(id)<Object.keys(links).length){
                  htmlString += linkSeperator;
              }
          }
 
          $('#siteLink').html(htmlString);
 
 
  });

const zoomBtn = document.querySelectorAll('.zoom-text');
const allImages = document.querySelectorAll('.img-container');
const imageView = document.querySelector('.image-view') ||  document.querySelector('.image-view2') || document.querySelector('.image-view3');

const nextBtn = document.getElementById('next-btn');
const prevBtn =  document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box') || document.querySelector('.image-box2') || document.querySelector('.image-box3');

let currentImageIdx = 0;
imageView.addEventListener('click', function(){
  this.style.display = "none";
  imageBox.style.display = "none";
});

zoomBtn.forEach(function(btn, index){
  btn.addEventListener('click',function(){
    imageView.style.display ="block";
    imageBox.style.display = "block";
    currentImageIdx = index +1;
    currentImageDisplay( currentImageIdx );
  });
});

function currentImageDisplay(position){
if(imageView === document.querySelector('.image-view') && (imageBox === document.querySelector('.image-box'))){
  return imageBox.style.background = `url(images/weddingImg${currentImageIdx}.jpg) center/cover no-repeat`;
}else {
  if(imageView === document.querySelector('.image-view2')){
 
  return imageBox.style.background = `url(images/engageImg${currentImageIdx}.jpg) center/cover no-repeat`;
}


} 
if(imageView === document.querySelector('.image-view3')){
  return imageBox.style.background = `url(images/anniversaryImg${currentImageIdx}.jpg) center/cover no-repeat`;
}
 
}


prevBtn.addEventListener('click', function(){
  currentImageIdx--;
  if(currentImageIdx === 0){
    currentImageIdx = allImages.length;
  }
  currentImageDisplay(currentImageIdx);
 
});

nextBtn.addEventListener('click', function(){
  currentImageIdx++;
  if(currentImageIdx === 13){
    currentImageIdx = 1;
  }
  currentImageDisplay(currentImageIdx);
  
});


let formModal = document.getElementById('id01');

window.onclick = function(event){
  if(event.target == modal){
    formModal.style.display = "none";
  }
}



