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
              "url": "experience.html",
              "text": "Experience",
              "alt": "Exoerience Page"
          },
          "4": {
             "url": "portfolio.html",
             "text": "Portfolio",
             "alt": "Portfolio Page"
           },
          "5": {
            "url": "Contact.html",
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