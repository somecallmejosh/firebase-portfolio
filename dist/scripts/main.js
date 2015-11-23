"use strict";var fbRoot=new Firebase("https://jkb-portfolio.firebaseio.com/");fbRoot.set({siteConstants:{name:"Joshua Briley",city:"Manchester",state:"CT",zip:"06042",jobTitle:"Front End Developer",email:"josh@thebrileys.com",phone:"8605318250",phoneFormatted:"(860)-531-8250",twitter:"http://www.twitter.com/joshuabriley",linkedIn:"https://www.linkedin.com/in/somecallmejosh",gitHub:"https://github.com/somecallmejosh"},portfolioItems:{item1:{name:"Groove Generator",url:"http://somecallmejosh.github.io/fatback-generator/",codeUrl:"https://github.com/somecallmejosh/fatback-generator",description:"This is a web app that was born out of a need to practice a seemingly infinite number of variations of what Gary Chaffee calls Fatback Grooves. These are duple meter grooves, in 4/4 time with the snare on 2 and 4. There are 29 cymbal patterns (hi-hat and ride) and 22 interchangeable one-beat bass drum and snare drum patterns."},item2:{name:"Drum Intro Quiz",url:"http://somecallmejosh.github.io/quiz-app/",codeUrl:"https://github.com/somecallmejosh/quiz-app",description:"Javascript based audio quiz that scores a users correct and incorrect answers."},item3:{name:"Hot or Cold",url:"http://somecallmejosh.github.io/hot-or-cold-starter/",codeUrl:"https://github.com/somecallmejosh/hot-or-cold-starter",description:"In this game, the computer will randomly select a number between 1 and 100. The player then tries to guess the number. The player gets feedback for each guess — hot if their guess was close, and cold if their guess was far off. Once the correct number is guessed, the player will be notified and given the option to start a new game."}},testimonials:{testimonial1:{name:"Ethan J. Brown",pic:"http://placehold.it/150x150",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},testimonial2:{name:"Fred Doe",pic:"http://placehold.it/150x150",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},testimonial3:{name:"Corky Doe",pic:"http://placehold.it/150x150",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}},resume:{company1:{name:"Sports Technologies, LLC",url:"http://www.sportstechinc.com",jobTitle:"Front End Developer & UI Designer",yearStart:"2013",yearEnd:"Present"},company2:{name:"ImageWorks, LLC",url:"http://www.imageworksllc.com",jobTitle:"Lead Designer and Front End Developer",yearStart:"2008",yearEnd:"2013"},company3:{name:"Para-Diddle Design, LLC",url:"",jobTitle:"Front End Developer & UI Designer",yearStart:"2004",yearEnd:"2008"}}});var pItems=new Firebase("https://jkb-portfolio.firebaseio.com/portfolioItems");pItems.on("child_added",function(e){var t=e.val();$('<h1><a href="'+t.url+'" target="_blank">'+t.name+"</a></h1>").appendTo(".portfolio-items"),$("<p>"+t.description+"</p>").appendTo(".portfolio-items"),$('<p><a href="'+t.codeUrl+'" target="_blank">View Code</a></p>').appendTo(".portfolio-items")});var rItems=new Firebase("https://jkb-portfolio.firebaseio.com/resume");rItems.on("child_added",function(e){var t=e.val();console.log("Name: "+t.name),console.log("Website: "+t.url),console.log("Job Title: "+t.jobTitle),console.log("From: "+t.yearStart),console.log("To: "+t.yearEnd),$('<h1><a href="'+t.url+'" target="_blank">'+t.name+"</a></h1>").appendTo(".resume-items"),$("<p>"+t.jobTitle+"</p>").appendTo(".resume-items"),$("<p>"+t.yearStart+" – "+t.yearEnd+"</p>").appendTo(".resume-items")});var siteConstants=new Firebase("https://jkb-portfolio.firebaseio.com/siteConstants");siteConstants.on("value",function(e){$(".name").text(e.val().name),$(".tagline").text(e.val().jobTitle),$(".phone").attr("href","tel:"+e.val().phone),$(".phone").text(e.val().phoneFormatted),$(".twitter").attr("href",e.val().twitter),$(".github").attr("href",e.val().gitHub),$(".linkedin").attr("href",e.val().linkedIn),$(".email").attr("href","mailto:"+e.val().email)},function(e){console.log("No dice on site constants: "+e.code)});var tItems=new Firebase("https://jkb-portfolio.firebaseio.com/testimonials");tItems.on("child_added",function(e){var t=e.val();$('<img src="'+t.pic+'">').appendTo(".testimonial-items"),$("<p>"+t.name+"</p>").appendTo(".testimonial-items"),$("<p>"+t.content+"</p>").appendTo(".testimonial-items")});