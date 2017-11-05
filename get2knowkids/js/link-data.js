function getArticles (gender, age) {
  var data = {
    "M5": {
      "1": {
        "title": "What is Bullying?",
        "link": "https://kidshelpphone.ca/article/what-bullying-0"
      },
      "2": {
        "title": "What to do if you're experiencing bullying",
        "link": "https://kidshelpphone.ca/article/what-do-if-youre-experiencing-bullying"
      },
      "3": {
        "title": "How to build friendships",
        "link": "https://kidshelpphone.ca/article/making-friends-how-build-friendships"
      }
    },
    "M10": {
      "1": {
        "title": "How to help a friend through a rough patch",
        "link": "https://kidshelpphone.ca/article/how-help-friend-through-rough-patch"
      },
      "2": {
        "title": "What to do if you're experiencing bullying",
        "link": "https://kidshelpphone.ca/article/what-do-if-youre-experiencing-bullying"
      },
      "3": {
        "title": "10 ways to practice self acceptance",
        "link": "https://kidshelpphone.ca/article/10-ways-practice-self-acceptance"
      }
    },
    "M15": {
      "1": {
        "title": "Sexting game",
        "link": "https://kidshelpphone.ca/game/picd"
      },
      "2": {
        "title": "On identifying LGBTQ and coming out",
        "link": "https://kidshelpphone.ca/article/identifying-lgbtq-and-coming-out-0"
      },
      "3": {
        "title": "Sexting privacy and law",
        "link": "https://kidshelpphone.ca/article/sexting-privacy-and-law-0"
      }
    },
    "F5": {
      "1": {
        "title": "What is bullying?",
        "link": "https://kidshelpphone.ca/article/what-bullying-0"
      },
      "2": {
        "title": "What to do if you're experiencing bullying",
        "link": "https://kidshelpphone.ca/article/what-do-if-youre-experiencing-bullying"
      },
      "3": {
        "title": "How to build friendships",
        "link": "https://kidshelpphone.ca/article/making-friends-how-build-friendships"
      }
    },
    "F10": {
      "1": {
        "title": "Sexting basics: How to stay safe",
        "link": "https://kidshelpphone.ca/article/sexting-basics-how-stay-safe-0"
      },
      "2": {
        "title": "What you can do if money is tight at home",
        "link": "https://kidshelpphone.ca/article/what-you-can-do-if-money-tight-home"
      },
      "3": {
        "title": "On identifying LGBTQ and coming out",
        "link": "https://kidshelpphone.ca/article/identifying-lgbtq-and-coming-out-0"
      }
    },
    "F15": {
      "1": {
        "title": "Healthy relationships vs unhealthy relationships",
        "link": "https://kidshelpphone.ca/article/healthy-relationships-vs-unhealthy-relationships"
      },
      "2": {
        "title": "What is love: Welcome to the world of dating",
        "link": "https://kidshelpphone.ca/article/what-love-welcome-world-dating-0"
      },
      "3": {
        "title": "8 celebrities share their mental health stories",
        "link": "https://kidshelpphone.ca/article/8-celebrities-share-their-mental-health-stories"
      }
    }
  };

//define key
	var key = "";
	if (gender == "male") {
  	if (age > 5 && age <= 9) {
    	var key = "M5";
    }	
    else if (age < 15) {
    	var key = "M10";
    }
    else if (age < 19) {
    	var key = "M15";
    }
    else {
    }
  }
  else if (gender == "female") {
  	if (age > 5 && age <= 9) {
    	var key = "F5";
    }	
    else if (age < 15) {
    	var key = "F10";
    }
    else if (age < 19) {
    	var key = "F15";
    }
    else {
    }
  }
  else {}
    
// fetch titles and links for age category
  var value = '<a href="' + data[key]["1"]["link"] + '">' + data[key]["1"]["title"] + '</a> <br>';
  value += '<a href="' + data[key]["1"]["link"] + '">' + data[key]["2"]["title"] + '</a> <br>';
  value += '<a href="' + data[key]["1"]["link"] + '">' + data[key]["3"]["title"] + '</a>';
  return value;
};

