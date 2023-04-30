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
              "url": "template.html",
              "text": "Template Page",
              "alt": "Template Link" 
          },
          "3": {
              "url": "tables.html",
              "text": "HTML Tables",
              "alt": "Simple adn Complex Table Demonstration"
          },
          "4": {
            "url": "introduction.html",
            "text": "Introduction Page",
            "alt": "Simple adn Complex Table Demonstration"
          },
          "5":{
            "url": "forms.html",
            "text": "Forms",
            "alt": "Simple adn Complex Table Demonstration"
          },
          "6":{
            "url": "calculator.html",
            "text": "calculator",
            "alt":"calculator"
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

          $('#siteLinks').html(htmlString);


  });
 
