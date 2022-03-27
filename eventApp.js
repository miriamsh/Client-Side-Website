
const searchParams = new URLSearchParams(location.search);
// צורת שליפה של משתנה כלשהוא ממשתני ה url
// משתנה שמגיע מה url 
// מגיע תמיד כמחרוזת ויש להמירו למספר
const eventCode = parseInt(searchParams.get('eventCode'));
if (!eventCode) {
    // ניתוב חזרה לעמוד הבית
    location.href = 'http://127.0.0.1:5500/%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%20%D7%92%D7%9E%D7%A8/tickchak-main.html';
}
   

const dataEvent={
    event:{}
}
const unSubscribe=()=>{
    const sunBtn=document.querySelector(".form-now-btn");
    sunBtn.style.opacity="0.5";
    sunBtn.style.cursor="unset";
    
}
const designPage=(event)=>{
    changeTitle(event);
     changeBackgroundImg(event);
     colorSection(event);
     DateTimeDetails(event);
     Description(event);
     LocationE(event);
     ContactDetails(event);
}

//כתיבת פונקציה המכניסה לנתוני האתר את כל הפרטים לפי הגייסון
const changeTitle=(event)=>{
    const title=document.querySelector(".title-page");
    title.innerText=`${event.name}`;
}
const changeBackgroundImg=(event)=>{
   const EventAdvertisment=document.querySelector(".top-section-container>img"); 
   const bodyEventAdvertisment=document.querySelector(".top-section-background");
    EventAdvertisment.src=`${event.img}`;
     bodyEventAdvertisment.style.backgroundImage=`url(${event.img})`;
}
const colorSection=(event)=>{
    const section=document.querySelector(".timer-event");
    const sectionDesctiption=document.querySelector(".section-description");
    const mainSection=document.querySelector(".top-section-event-page");
    mainSection.style.backgroundColor=`${event.backColor}`;
    section.style.backgroundColor=`${event.backColor}`;
    section.style.color=`${event.color}`;
    sectionDesctiption.style.backgroundColor=`${event.descColor}`
    
}
const DateTimeDetails=(event)=>{
    const location=document.querySelector(".event-location-page");
     location.innerText=`${event.location.hall}`;
     HebrewDate(event.hebrewDate);
     OriginalDate(event.date, event.time);
     const phone=document.querySelector(".phoneNumber");
     phone.innerText=event.phone;
     setTimer(event);       
}
const ContactDetails=(event)=>{
    const phoneLink=document.querySelector(".phone-number");
    phoneLink.innerText=`${event.phone}`;
    phoneLink.href=`tel:${event.phone}`;
    const mailLink=document.querySelector(".email-address");
    mailLink.innerText=`${event.mail}`;
    mailLink.href=`mailto:${event.mail}`;

}
const Description=(event)=>{
    const des=document.querySelector(".description-b");
    const desCont=document.querySelector(".section-description");
    des.innerHTML=event.descriptionInPage;
     
}
const LocationE=(event)=>{
    const location=document.querySelector(".event-loc-hall");
    location.innerText=`${event.location.hall}`;
    const ShowMap=document.querySelector(".show-map-btn");
    ShowMap.href=`${event.mapA}`;
    ShowMap.onclick=()=>{
        setTimeout(()=>{
       ShowMap.style.display="none";
        },1500)
    }
}    
const HebrewDate=(date)=>{
    const hebrewDate=document.querySelector(".event-hebrew-date-page");
    hebrewDate.innerText=`${date.day}  ${date.month} ${date.year}`;
}
const OriginalDate=(date, time)=>{
    const originalDate=document.querySelector(".event-date");
    originalDate.innerText=`${date.day}.${date.month}.${date.year} | ${time.hour}:${time.minutes}`;
}
//design needs
const divToOpen=document.querySelector(".call-production");
const phoneToOpen=document.querySelector(".phone-ctr");
const phoneToTopIn1=document.querySelector(".phoneNumber");
const phoneToTopIn2=document.querySelector(".copy");
const subscribeBtn=document.querySelector(".form-button");
const shoppingCart=document.querySelector(".shoppingCart");
const openShoppingCart=[...document.querySelectorAll(".open")].forEach((o)=>{
    o.onclick=()=>{
   o.href=`eventPage.html?eventCode=${eventCode}`;
  // const searchParams2 = new URLSearchParams(location.search);
   //const basketStatus=searchParams2.get('shoppingCart');
      shoppingCart.style.marginRight="0%";
         shoppingCart.style.left="0"; 
      shoppingCart.style.opacity="1";
      shoppingCart.style.transition="all 500ms ease-in-out";
      shoppingCart.style.overflow="hidden";
      const bodyPart=document.querySelector(".page-event");
      const bodyBtn=document.querySelector(".form-button");
      document.body.style.overflow="hidden";
      bodyPart.style.filter="brightness(0.2) contrast(1) grayscale(1) saturate(1.5)";
      bodyBtn.style.filter="brightness(0.2) contrast(1) grayscale(1) saturate(1.5)";
} 

});
// const closeBtn=iframe.contentWindow.document.querySelector(".close-form")[0];
// closeBtn.onclick=()=>{
//   iframe.style.marginRight="100%";
// }

const sec=document.querySelector(".top-section-event-page");
sec.onclick=()=>{
    sec.href=`eventPage.html?eventCode=${eventCode}`;
    shoppingCart.style.marginRight="100%";
    setTimeout(()=>{
        shoppingCart.style.left="initial";
    } ,1000)
  
    shoppingCart.style.opacity="0";
    shoppingCart.style.transition="all 500ms ease-in-out";
    const bodyPart=document.querySelector(".page-event");
    const bodyBtn=document.querySelector(".form-button");
    document.body.style.overflow="initial";
    bodyPart.style.filter="none";
    bodyBtn.style.filter="none";
 }
 // צורת שליפה של משתנה כלשהוא ממשתני ה url
// משתנה שמגיע מה url 
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if(scrolled>100)
    {
 //      subscribeBtn.style.top="900vh"; 
    }
   
});
divToOpen.onmouseover=()=>{
    phoneToOpen.style.height="50px";
    phoneToTopIn1.style.height="50px";
    phoneToTopIn2.style.height="50px";
    phoneToTopIn1.style.opacity="1";
    phoneToTopIn2.style.opacity="1";
}
divToOpen.onmouseleave=()=>{
    phoneToOpen.style.height="0px";
    phoneToTopIn1.style.height="0";
    phoneToTopIn2.style.height="0";
    phoneToTopIn1.style.opacity="0";
    phoneToTopIn2.style.opacity="0";
}
const copyBtn=document.querySelector(".copy");
copyBtn.onclick=()=>{
    const telForCopied=document.querySelector(".phoneNumber");
    
    const input = document.createElement('textarea');
    input.innerHTML = telForCopied.innerText;
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}
 
//design timer
const setTimer=(event)=>{
const createDate=()=>{
    const dateTemp=event.date;
    const timeTemp=event.time;
    const day=parseInt(dateTemp.day);
    const month=parseInt(dateTemp.month)-1;
    const year=parseInt(dateTemp.year);
    const hour=parseInt(timeTemp.hour);
    const minutes=parseInt(timeTemp.minutes);
    return d=new Date(year,month,day,hour,minutes,00,000);
}
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(endtime) {
    const clock = document.querySelector(".timer-brief");
    const daysSpan = clock.querySelector('.timer-days>span');
    const hoursSpan = clock.querySelector('.timer-hours>span');
    const minutesSpan = clock.querySelector('.timer-minutes>span');
    const secondsSpan = clock.querySelector('.timer-seconds>span');
    const timeinterval = setInterval(updateClock, 1000);
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML =   t.hours;
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        daysSpan.innerHTML = 0;
        hoursSpan.innerHTML = 0;
        minutesSpan.innerHTML =0;
        secondsSpan.innerHTML =0;
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
   
  }
  
  const deadline =createDate() ;
  initializeClock(deadline);
  
}  

const fetchEvents = () => {
    fetch('/event.json')
    .then(response => response.json())
    .then((data) => {
        // פילטור של המוצרים ששייכים לקטגוריה
        const currentEvent = data.find((pr) => parseInt(pr.code) ===  eventCode);
        if(!currentEvent)
        {
            location.href = 'http://127.0.0.1:5500/%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%20%D7%92%D7%9E%D7%A8/tickchak-main.html';
        }
        dataEvent.event = currentEvent;
        sessionStorage.setItem(`event`, JSON.stringify(currentEvent));
          designPage(currentEvent);
       // printProducts();
       console.log("event run me");
      const script = document.createElement('script'); 
       script.src = "shoppingCart-app.js";
       document.body.appendChild(script)
    })
}
fetchEvents();
 
     
 
