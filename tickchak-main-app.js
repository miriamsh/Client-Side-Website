const contactTop = document.querySelector(".contact-us");
const contactTopClose = document.querySelector(".inner-close");
const toppageMenu = document.querySelector(".homepage-menu");
const createCycle = document.querySelector(".create-page-btn");
const createTitle = document.querySelector(".create-page-btn::after")
const createPageNowBtn = document.querySelector(".create-page-now");
const getStarBtn = document.querySelector(".get-start-btn");

//הורדת התפריט למטה
const transformMenueBack = () => {
  toppageMenu.style.animation = "transformTopMenuBack  0.5s ease-in-out 1 forwards";
}
//העלאת התפריט למעלה
const transformMenue = () => {
  toppageMenu.style.animation = "transformTopMenu 0.1s linear 1 forwards";
}
//הורדת הטופס למטה
const transformTopPageBack = () => {
  contactTop.style.zIndex = "30";
  contactTop.style.animationName = "transformTopPageBack";
  contactTop.style.animationDuration = "1s";
  contactTop.style.animationTimingFunction = "cubic-bezier(1, 1, 1.24, 0)";
  contactTop.style.animationFillMode = "forwards"
}
//העלאת טופס המכירה למעלה
const transformTopPage = () => {
  contactTop.style.zIndex = "5";
  contactTop.style.animationName = "transformTopPage";
  contactTop.style.animationDuration = "1s";
  contactTop.style.animationTimingFunction = "cubic-bezier(1, 1, 1.24, 0)";
  contactTop.style.animationFillMode = "forwards";

}
const showName=document.querySelector(".name-change");
const userName=JSON.parse(sessionStorage.getItem(`currentUSer`)) || {};
if(userName.user_name)
{
  showName.innerText=`שלום ${userName.user_name}`;
}
else
{
  showName.innerText=  "כניסה למפיקים";
}

contactTopClose.onclick = () => {
  transformMenueBack();
  transformTopPage();
  UpPage();
}
createCycle.onmouseover = () => {
  createCycle.style.animation = "scale-btn  0.1s  linear  1 forwards";
}
createCycle.onmouseleave = () => {
  createCycle.style.animation = "scale-btn-back  0.1s  linear  1 forwards";
}
createCycle.onclick = () => {
  createSalingPage();
}
createPageNowBtn.onclick = () => {
  createSalingPage();
}
getStarBtn.onclick = () => {
  createSalingPage();
}
//function for opening the saling page
const createSalingPage = () => {
  topFunction();
  setTimeout(() => {
    transformMenue();
    DownPage();
    setTimeout(() => {
      transformTopPageBack();
    }, 50)
  }, 1000)

}
//function for scrolling to top page
const topFunction = () => {
  document.documentElement.scrollTop = 0;
}
const btn = document.querySelector(".btn-part");
btn.onclick = () => {
  createSalingPage();
}
let flag = false;
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled > 100) {
    flag = true;
    if (contactTop.style.zIndex === "30") {
      transformMenueBack();
      transformTopPage();
      UpPage();
    }
    else {
      if (scrolled > 130) {
        scrollEventChanges();
      }
    }
  }
  else {
    if (flag === true) {
      uniScrollEventChanges();
    }

  }
})
const topSymbol = document.querySelector(".homepage-menue-logo");
const topMenu = document.querySelector(".homepage-menu");
const topUl = document.querySelector(".hompage-menue-ul>ul");
const topEnter = document.querySelector(".enter-for-producer");
const topFinHiddenMenu = document.querySelector(".find-hideMenu-btn");
const picturesTop = document.querySelector(".welcome-pictures")
const scrollEventChanges = () => {
  topSymbol.style.animation = "scale-logo 0.3s linear 1 forward";
  topSymbol.classList.add("scroll-menu");
  topMenu.style.animation = "change-back-color   0.6s  0.2s 1 linear  forwards";
  topUl.style.animation = "opacity-element  0.8s linear 1 forwards";
  topEnter.style.animation = "opacity-element  0.8s linear 1 forwards";
  topFinHiddenMenu.style.animation = "re-opacity-element  0.1s 0.6s linear 1 forwards";
  picturesTop.style.animation = "pictures-changes-scrooling 0.6s 0.2s 1 linear forwards";
}
const uniScrollEventChanges = () => {
  topSymbol.style.animation = "re-scale-logo 0.5s linear 1 forwards";
  topSymbol.classList.remove("scroll-menu");
  topSymbol.style.animation = "re-scale-logo 0.3s linear 1 forwards";
  topMenu.style.animation = " re-change-back-color  0.3s  1 linear  forwards";
  topUl.style.animation = "re-opacity-element  0.8s linear 1 forwards";
  topEnter.style.animation = "re-opacity-element  0.8s linear 1 forwards";
  topFinHiddenMenu.style.animation = "opacity-element  0.1s linear 1 forwards";
  picturesTop.style.animation = " re-pictures-changes-scrooling 0.3s 1 linear forwards";

}
topFinHiddenMenu.onclick = () => {
  uniScrollEventChanges();
}
const DownPage = () => {
  picturesTop.style.animation = "website-changes-for-opening 1s  forwards";

}
const UpPage = () => {
  picturesTop.style.animation = "re-website-changes-for-opening 1s  forwards";
}
let slideIndex = 0;
const carousel = () => {
  let i;
  const x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("opacit");
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  x[slideIndex - 1].classList.add("reopacit");
  x[slideIndex - 1].style.display = "block";

  setTimeout(carousel, 4000);
}
let slideIndexi = 0;
const carouseli = () => {
  let i;
  const x = document.getElementsByClassName("slide-e");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndexi++;
  if (slideIndexi > x.length) { slideIndexi = 1 }
  x[slideIndexi - 1].style.display = "block";
  setTimeout(carouseli, 4000);
}
carousel();
carouseli();

const tellMeBtn = document.querySelectorAll(".tell-me-event");
const typeKnowledge = document.querySelector(".specific-type-event");
const typeImage = document.querySelector(".specific-event-image");
const typeTagText = document.querySelector(".spcfc-evnt-text");
const typeTagIcon = document.querySelector(".spcfc-evnt-icon");
const typeText = document.querySelector(".spcfc-evnt-container");
const afterTriangle = document.querySelector(".spcfc-after");
const SeatsMargin = document.querySelector(".events-seats");
const typeSection = document.querySelector(".event-types");
tellMeBtn[0].onclick = () => {
  typeKnowledge.classList.add("open");
  SeatsMargin.classList.add("opened-seats");
  typeSection.classList.add("event-types-opened");
  typeImage.style.backgroundImage = "url(images/as.jpg)";
  typeTagText.innerText = "כנסים והרצאות";
  typeTagIcon.style.backgroundImage = "url(images/עניבה.svg)";
  typeText.innerText = "הקמת אירוע משולב הרצאות שונות לבחירה, כולל תוספות ועוד , מה שדרש עד היום מהמפיק להקים מערכת עצמאית יקרה ומסובכת וכל שנה להשקיע כסף נוסף, עכשיו תוך זמן קצר אתם עם אתר המשלב את כל מה שרציתם.";
  afterTriangle.style.right = "21.5%";
  afterTriangle.style.top = "-10px";
}
tellMeBtn[1].onclick = () => {
  typeKnowledge.classList.add("open");
  SeatsMargin.classList.add("opened-seats");
  typeSection.classList.add("event-types-opened");
  typeImage.style.backgroundImage = "url(images/as.jpg)";
  typeTagText.innerText = "אירוע כרטיסים";
  typeTagIcon.style.backgroundImage = "url(images/כרטיס.svg)";
  typeText.innerText = "תוך 3 דקות אתם יכולים להקים אירוע במערכת המשלב אופציות של הוספת תוספות מעקב אחרי עסקאות, ועוד.";
  afterTriangle.style.right = "35.5%";
  afterTriangle.style.top = "-10px";
}
tellMeBtn[2].onclick = () => {
  typeKnowledge.classList.add("open");
  SeatsMargin.classList.add("opened-seats");
  typeSection.classList.add("event-types-opened");
  typeImage.style.backgroundImage = "url(images/סיום-שס-סבב-הופעות.jpeg)";
  typeTagText.innerText = "מסע הופעות";
  typeTagIcon.style.backgroundImage = "url(images/הופעה.svg)";
  typeText.innerText = "מסע הופעות מתחיל באתר עם נראות  מעולה, אצלנו תוכלו לשלב כמה הופעות שתרצו בשילוב אתר פרטי משלכם.";
  afterTriangle.style.right = "49.3%";
  afterTriangle.style.top = "-10px";
}
tellMeBtn[3].onclick = () => {
  typeKnowledge.classList.add("open");
  SeatsMargin.classList.add("opened-seats");
  typeSection.classList.add("event-types-opened");
  typeImage.style.backgroundImage = "url(images/מרכז-מבקר.jpg)";
  typeTagText.innerText = "מרכזי מבקרים";
  typeTagIcon.style.backgroundImage = "url(images/מבקר.svg)";
  typeText.innerText = "השקעתם עד היום מאות אלפי שקלים בהקמת מערכת והחזקה, שמים סוף! חוויה גם לכם ובעיקר ללקוח עם מערכת גמישה המשלב את כל מה שאתם צריכים.";
  afterTriangle.style.right = "63.5%";
  afterTriangle.style.top = "-10px";
}
tellMeBtn[4].onclick = () => {
  typeKnowledge.classList.add("open");
  SeatsMargin.classList.add("opened-seats");
  typeSection.classList.add("event-types-opened");
  typeImage.style.backgroundImage = "url(images/הסעות.jpg)";
  typeTagText.innerText = "מערך הסעות";
  typeTagIcon.style.backgroundImage = "url(images/הסעה.svg)";
  typeText.innerText = "זה כבר באמת לאירוע מיוחד המשלב מערך הסעות ממספר נקודות בארץ, לא תאימנו כמה זה נהייה קל";
  afterTriangle.style.right = "77.5%";
  afterTriangle.style.top = "-10px";
}
tellMeBtn[5].onclick = () => {
  typeKnowledge.classList.add("open");
  SeatsMargin.classList.add("opened-seats");
  typeSection.classList.add("event-types-opened");
  typeImage.style.backgroundImage = "url(images/מקומות.jpeg)";
  typeTagText.innerText = "מקומות ישיבה";
  typeTagIcon.style.backgroundImage = "url(images/מקום.svg)";
  typeText.innerText = "מודול מקומות ישיבה לכל דורש עם שליטה שלכם לתפיסת מקומות שחרור ועוד הפתעות בלתי נשכחות....אל תשכחו טיל באוויר.";
  afterTriangle.style.right = "21.5%";
  afterTriangle.style
  afterTriangle.style.top = "440px";
}
tellMeBtn[6].onclick = () => {
  typeKnowledge.classList.add("open");
  SeatsMargin.classList.add("opened-seats");
  typeSection.classList.add("event-types-opened");
  typeImage.style.backgroundImage = "url(images/הרשמות.jpg)";
  typeTagText.innerText = "דף הרשמה";
  typeTagIcon.style.backgroundImage = "url(images/הרשמה.svg)";
  typeText.innerText = "יש לכם מקום שאתם רק רוצים שישאירו פרטים? יש לכם נדל''ן למכור? הגעתם למקום הנכון. אתר הרשמה עם גלריה מרהיבה, כך שסוף סוף תוכלו לראות רווחים.";
  afterTriangle.style.right = "35.5%";
  afterTriangle.style.top = "440px";
}
tellMeBtn[7].onclick = () => {
  typeKnowledge.classList.add("open");
  SeatsMargin.classList.add("opened-seats");
  typeSection.classList.add("event-types-opened");
  typeImage.style.backgroundImage = "url(images/היכל-תרבות.jpeg)";
  typeTagText.innerText = "היכלי תרבות";
  typeTagIcon.style.backgroundImage = "url(images/תרבות.svg)";
  typeText.innerText = "היכל תרבות זה אופרציה של שילוב של מספר אירועים בכל יום ולפעמים בשעה מקבילה, וכמובן שירות ושליטה על הלקוחות הנפלאים, אז הגעתם למקום הנכון תראו כמה פלאים.";
  afterTriangle.style.right = "49.3%";
  afterTriangle.style.top = "440px";
}
tellMeBtn[8].onclick = () => {
  typeKnowledge.classList.add("open");
  SeatsMargin.classList.add("opened-seats");
  typeSection.classList.add("event-types-opened");
  typeImage.style.backgroundImage = "url(images/רווחים-בקופת-פיצויי-פיטורים.jpg)";
  typeTagText.innerText = "אמא אווזה";
  typeTagIcon.style.backgroundImage = "url(images/אווזה.svg)";
  typeText.innerText = "אתם בטח שואלים מה זה?? פשוט וקל. כעת קיבלתם אתר פרטי משלכם בו תוכלו להציג את כלל האירועים שלכם. אז למה 'אמא אווזה'? שיטיל לכם ביצים תבינו...";
  afterTriangle.style.right = "63.5%";
  afterTriangle.style.top = "440px";
}
const aboutBx = document.querySelectorAll(".details-box");
const buttomLine = document.querySelector(".hr-box");
const aboutImg = document.querySelectorAll(".about-part");

for (let i = 0; i < aboutBx.length; i++) {
  aboutBx[i].onclick = () => {

    showDivs(i);
  }
}
const getClassName = (string, num) => {
  return string + num;
}
const showDivs = (n) => {
  for (i = 0; i < aboutImg.length; i++) {
    aboutImg[i].style.display = "none";

  }
  for (i = 0; i < aboutBx.length; i++) {
    aboutBx[i].classList.remove("selected");
    aboutBx[i].lastElementChild.classList.remove("hr-box-selected");
    aboutBx[i].classList.remove(getClassName("icon-", i + 1));
  }
  aboutImg[n].style.display = "initial";
  aboutImg[n].classList.add("comes");
  aboutBx[n].classList.add("selected");
  aboutBx[n].lastElementChild.classList.add("hr-box-selected");
  aboutBx[n].classList.add(getClassName("icon-", n + 1));
} 

const eventBoxImg = document.querySelectorAll(".event-it-img");
const eventBoxDescription = document.querySelectorAll(".event-it-dscrptn");
const eventBoxBtn = document.querySelectorAll(".purchase-ticket-btn");
const eventBoxText = document.querySelectorAll(".event-sum-desc");
const eventBoxloc = document.querySelectorAll(".location");
const eventBox = document.querySelectorAll(".event-itself");
//הלכניס כל אלמנט שנוסף דרך הגייסון לאחד מהמערכים
const f = () => {
  /* {
    eventBox.forEach((box,index)=>{
    box.onmouseover=()=>{
      eventBoxImg[index].style.animation="event-box-img-transform 0.3s ease-out 1 forwards";
      eventBoxDescription[index].style.animation="event-box-dscrptn-transform 0.3s ease-out 1 forwards";
      eventBoxBtn[index].style.animation="re-opacity-element 0.3s ease-out forwards";
      eventBoxText[index].style.animation="re-opacity-element 0.8s ease-out forwards";
      eventBoxText[index].style.visibility="visible";
      eventBoxloc[index].style.top="120px";    
    }
    box.onmouseleave=()=>{
      eventBoxImg[index].style.animation="re-event-box-img-transform 0.3s ease-out 1 forwards";
      eventBoxDescription[index].style.animation="re-event-box-dscrptn-transform  0.3s ease-out 1 forwards";
      eventBoxBtn[index].style.animation="opacity-element 0.3s ease-out forwards";
      eventBoxText[index].style.visibility="hidden";
      eventBoxloc[index].style.top="85px";
    }
  });*/
}
let cont = -1;
const eventsContainer = document.querySelector(".event-ul-all");

const printEvents = (events) => {
 
  {
    events.forEach((event, index) => {
      if (index % 4 === 0) {
        cont++;
        const container = document.createElement('div');
        container.classList.add("event-container");
        eventsContainer.append(container);
        const innerContainer = document.createElement('div');
        innerContainer.classList.add('event-cont-in');
        container.append(innerContainer);
      }
      const eventDinamycBox = document.createElement('div');
      eventDinamycBox.classList.add("event-itself");
      eventsContainer.children[cont].firstChild.append(eventDinamycBox);
      const eventDynamyImg = document.createElement('img');
      eventDynamyImg.style.backgroundImage = `url(${event.img})`;
      eventDynamyImg.classList.add("event-it-img");
      //  eventBoxImg.append(eventDynamyImg);
      eventDinamycBox.append(eventDynamyImg);
      const eventDinamyDescription = document.createElement('div');
      eventDinamyDescription.classList.add("event-it-dscrptn");
      // eventBoxDescription.append(eventDinamyDescription)
      eventDinamycBox.append(eventDinamyDescription);
      const eventDinamyBtn = document.createElement('a');
      eventDinamyBtn.classList.add("purchase-ticket-btn");
      eventDinamyBtn.href = `eventPage.html?eventCode=${event.code}`;
      eventDinamyBtn.onclick=()=>{
        
      }
      eventDinamyBtn.innerText = "לרכישת כרטיסים";
      // eventBoxBtn.append(eventDinamyBtn);
      eventDinamyDescription.append(eventDinamyBtn);
      const eventDinamyDate = document.createElement('div');
      eventDinamyDate.classList.add("event-date");
      eventDinamyDescription.append(eventDinamyDate);
      const DateDay = document.createElement('div');
      DateDay.classList.add("date-day");
      DateDay.innerHTML = event.date.day;
      eventDinamyDate.append(DateDay);
      const lineFix = document.createElement('br');
      eventDinamyDate.append(lineFix);
      const DateMonthYear = document.createElement('div');
      DateMonthYear.classList.add("date-rest");
      DateMonthYear.innerText = `${event.date.month}.${event.date.year}`;
      eventDinamyDate.append(DateMonthYear);
      const DateDayWeek = document.createElement('div');
      DateDayWeek.classList.add("day-of-week");
      DateDayWeek.innerText = `${event.time.dayWeek}`;
      eventDinamyDate.append(DateDayWeek);
      const DateTimeE = document.createElement('div');
      DateTimeE.classList.add("time");
      DateTimeE.innerHTML = event.time.hour;
      eventDinamyDate.append(DateTimeE);
      const eventDinamyTitle = document.createElement('div');
      eventDinamyTitle.classList.add("event-title-here");
      eventDinamyTitle.innerHTML = event.title;
      eventDinamyDescription.append(eventDinamyTitle);
      const eventDinamyLocation = document.createElement('div');
      eventDinamyLocation.classList.add("location");
      eventDinamyLocation.innerHTML = event.location;
      //  eventBoxloc.append(eventDinamyLocation);
      eventDinamyDescription.append(eventDinamyLocation);
      const eventDinamySummery = document.createElement('div');
      eventDinamySummery.classList.add("event-sum-desc");
      eventDinamySummery.innerHTML = event.description;
      // eventBoxText.append(eventDinamySummery);
      eventDinamyDescription.append(eventDinamySummery);
      eventDinamycBox.onmouseover = () => {
        eventDynamyImg.style.animation = "event-box-img-transform 0.3s ease-out 1 forwards";
        eventDinamyDescription.style.animation = "event-box-dscrptn-transform 0.3s ease-out 1 forwards";
        eventDinamyBtn.style.animation = "re-opacity-element 0.3s ease-out forwards";
        eventDinamySummery.style.animation = "re-opacity-element 0.8s ease-out forwards";
        //   eventDinamySummery.style.visibility = "visible";
        eventDinamyLocation.style.top = "130px";
      }

      eventDinamycBox.onmouseleave = () => {
        eventDynamyImg.style.animation = "re-event-box-img-transform 0.3s ease-out 1 forwards";
        eventDinamyDescription.style.animation = "re-event-box-dscrptn-transform  0.3s ease-out 1 forwards";
        eventDinamyBtn.style.animation = "opacity-element 0.3s ease-out forwards";
        eventDinamySummery.style.animation = "opacity-element 0.3s ease-out forwards"
         eventDinamyLocation.style.top = "85px";
      }

    })
  }
}
const grey = document.querySelector(".events-list");
const greyin = document.querySelector(".event-ul-all");
const loadBtn = document.querySelector(".load-more-events-btn");
const printContainers = (events) => {
  loadBtn.style.display = "block";
  grey.style.height = "900px";
  greyin.style.height = "807px";
   if (events.length === 0) {
    events.length = 12;
    loadBtn.style.display = "none";
  }
  else {
    printEvents(events.slice(0, 12));
     const lengthEvents = events.length;
    loadBtn.onclick = () => {
       const countContainer = document.querySelectorAll(".event-itself");
      const countE = countContainer.length;
      let lengthNow = 0;
      if (lengthEvents - countE > 12) {
        lengthNow = 12;
      }
      else if (lengthEvents !== countE) {
        lengthNow = lengthEvents - countE;
      }
      if (lengthNow !== 0) {
        const recentEvent = events.slice(countE, countE + lengthNow);
        let temp = 0;
        if (recentEvent.length % 4 !== 0) {
          temp = 1;
        }
        const contCon = (recentEvent.length / 4) + temp;
        greyin.style.height = (grey.offsetHeight + contCon * 300) + "px";
        grey.style.height = (grey.offsetHeight + contCon * 300+80) + "px";
        if (countE + recentEvent.length === lengthEvents) {
          setTimeout(() => {
            loadBtn.style.display = "none";
            grey.style.height = "auto";
            greyin.style.height = "auto";
          }, 500)
        }
          printEvents(recentEvent);
      }
    }
  }
}

const dataEvent = {
  event: {},
  events: [],
  originalEvents: []
};

const criteria = {
  SearchBy:  sessionStorage.getItem(`searchBy_${userName.user_name}_${userName.pass}`) || '',
  filterBy:sessionStorage.getItem(`filterBy_${userName.user_name}_${userName.pass}`) || '',
  sortBy: '',
}
const sortEvents = (events) => {
  return [... events].sort((event1,  event2) => {
    
        {
           const date1=event1.date.year+event1.date.month+event1.date.day;
          console.log(date1);
          const date2= event2.date.year+event2.date.month+event2.date.day;
          console.log(date2);
          return date1.localeCompare(date2);
      }
  })
};
const printFilteredEvents = (arr) => {
  const eventsToShow = arr.filter(eve => eve.type.includes(criteria.filterBy));
  return eventsToShow;
}
//פונקציה הדואגת לריקון הקונטיינר המכיל כעת את האירועים
const removeEvents = () => {
  eventsContainer.innerHTML = '';
  cont = -1;
}
//חיפוש
const searchBy = document.querySelector("input[name=search-event]");
const printSearchedEvents = () => {
  const eventsToShow = dataEvent.events.filter(eve => eve.name.includes(criteria.SearchBy));
  const filteredEvents = printFilteredEvents(eventsToShow);
   const sortedEvents=sortEvents (filteredEvents);
  removeEvents();
  printContainers(sortedEvents);
  const filterEventsColor = document.querySelectorAll(".filterT").forEach(f=>{
    if(f.innerText===criteria.filterBy)
    {
      f.style.color="#61C4E2";
    }
  })
  sessionStorage.setItem(`searchBy_${userName.user_name}_${userName.pass}`, criteria.SearchBy);
  sessionStorage.setItem(`filterBy_${userName.user_name}_${userName.pass}`, criteria.filterBy);
}

searchBy.onkeyup = searchBy.onchange = (event) => {
   const value = event.target.value;
   criteria.SearchBy = value;
   printSearchedEvents();
};
searchBy.value=criteria.SearchBy
const filterEvents = document.querySelectorAll(".filterT").forEach((f) => {
  f.onclick = () => {
    criteria.filterBy = f.innerText;
    const inner=[...document.querySelectorAll(".filter")].forEach((t)=>{
     t.style.color="#8d8d8d";
   })
    f.style.color="#61C4E2";
    printSearchedEvents();
  }
});

const noFilter = document.querySelector(".no-filter");
noFilter.onclick = () => {
  criteria.filterBy = "";
  const inner=[...document.querySelectorAll(".filterT")].forEach((t)=>{
    t.style.color="#8d8d8d";
  })
   noFilter.style.color="#61C4E2";
  printSearchedEvents();
}

const filterBorder = document.querySelectorAll(".filter");

const fetchStoreData = () => {
  fetch('/events.json')
    .then(response => {
      return response.json();
    }).then(data => {
      dataEvent.originalEvents = data;
      dataEvent.events = data;
      printSearchedEvents(data);
    })
};
fetchStoreData();
 








