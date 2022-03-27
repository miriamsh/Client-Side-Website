//קוד לעמוד הראשון של בחירת הפריטים
//חיבור הסל לאירוע הנוכחי השמור באחסון
const currentEvent=JSON.parse(sessionStorage.getItem(`event`));
const userName=JSON.parse(sessionStorage.getItem(`currentUSer`)) || {};
const currentBag = JSON.parse(sessionStorage.getItem(`bag_${userName.user_name}_${userName.pass}_${currentEvent.code}`)) || [];
const closeBtn=document.querySelector(".close-form");
const ticketContainer=document.querySelector(".form-tickets");
const comOnEvent=document.querySelector(".comeon-text>h2>span");
comOnEvent.innerText=`${currentEvent.name}`;
const frmEventTitle=document.querySelector(".frm-event-title");
frmEventTitle.innerText=`${currentEvent.name}`;
const comeBuy=document.querySelector(".comeon");
const showCome=()=>{
   if(currentBag.length===0)
{
    comeBuy.style.display="initial";
} 
}
const changesAround=(value)=>{
    const currentPage=document.querySelector(".current");
    const contBtn=document.querySelector(".fmb-b-next-btn");
    if(currentBag.length!==0)
    {
              currentPage.classList.add('currentBtn');
       contBtn.classList.add('colorBtn');

    }
    else{
        currentPage.classList.remove('currentBtn');
        contBtn.classList.remove('colorBtn');
    }
}

const sumCount=document.querySelector(".fm-summary-details-sum");   
const sumPrice=document.querySelector(".spnPrice");
const Eventuallypayment=document.querySelector(".title-sum");
const updateSummery=()=>{
    let quantity=0;
    let sum=0;
    currentBag.forEach((c)=>{
        quantity+=parseInt(c.amount);
        sum+=parseInt(c.price);
    })
    sumCount.innerText=`${quantity}`;
    sumPrice.innerText=`${sum} ₪`;
    Eventuallypayment.innerText=`מחיר הכרטיסים הינו: ${sum} ש"ח`
}
const printArray=()=>{
    currentBag.forEach((t)=>{
  printTicketsSummery(t);  
})
}
//מעבר על מערך הכרטיסים השמור בזכרון, ועבור כל כרטיס להדפיס את הסיכום שלו
const printTicketsSummery=(ticket)=>{
    //if(currentBag.length!==0)
    {
        comeBuy.style.display="none"; 
         //יצירת הכרטיס הנוכחי בדום
        const ticketsList=document.querySelector(".forms-ticketlist");
        const newTicket=document.createElement('div');
        newTicket.classList.add("forms-r-ticket");
        ticketsList.append(newTicket);
        const ticketFTitle=document.createElement('div');
        ticketFTitle.classList.add("forms-ticket-title");
        newTicket.append(ticketFTitle);
        const ticketSymbol=document.createElement('div');
        ticketSymbol.classList.add("title-symbol");
        ticketFTitle.append(ticketSymbol);
        const ticketT=document.createElement('div');
        ticketT.classList.add("title");
        ticketT.innerText=`${ticket.name}`;
        ticketFTitle.append(ticketT);
        const ticketA=document.createElement('div');
        ticketA.classList.add(`amount-${ticket.ticketCode}`);
        ticketA.classList.add("ticketAmount")
        ticketFTitle.append(ticketA);
        const ticketP=document.createElement('div');
        ticketP.classList.add(`price-${ticket.ticketCode}`);
        ticketP.classList.add(".ticketPrice");
        ticketFTitle.append(ticketP);
        ticketP.innerText=`${ticket.price} ₪`;
        ticketA.innerText=`יח' ${ticket.amount}`;
    }
    updateSummery();
}
currentEvent.prices.forEach((p,index)=> {
    //יצירת הכרטיס באופן דינאמי
    const ticket=document.createElement('div');
    ticket.classList.add("ticket");
    ticketContainer.append(ticket);
    const innertTicket=document.createElement('div');
    innertTicket.classList.add("ticket-container");
    ticket.append(innertTicket);
    const ticketSide=document.createElement('div');
    ticketSide.classList.add("ticket-side");
    innertTicket.append(ticketSide);
    const ticketDetails=document.createElement('div');
    ticketDetails.classList.add("ticket-details");
    innertTicket.append(ticketDetails);
    const ticketTitle=document.createElement('div');
    ticketTitle.classList.add("ticket-dtl-title");
    ticketDetails.append(ticketTitle);
    ticketTitle.innerText=`${p.for}`;
    const ticketPrice=document.createElement('div');
    ticketPrice.classList.add("ticket-dtl-price");
    ticketDetails.append(ticketPrice);
    ticketPrice.innerText=`₪ ${p.price}`;
    const ticketAmount=document.createElement('div');
    ticketAmount.classList.add("ticket-amount");
    innertTicket.append(ticketAmount);
    const plusAmount=document.createElement('div');
    plusAmount.classList.add("plus");
    plusAmount.classList.add("amount");
    plusAmount.classList.add("change-amount");
    plusAmount.innerText="+";
    ticketAmount.append(plusAmount);
    const countAmount=document.createElement('div');
    countAmount.classList.add("amount");
    countAmount.classList.add("amount-amount");
    ticketAmount.append(countAmount);
    const minusAmount=document.createElement('div');
    minusAmount.classList.add("minus");
    minusAmount.classList.add("amount");
    minusAmount.classList.add("change-amount");
    minusAmount.innerText="-";
    ticketAmount.append(minusAmount);
    //מציאת הכרטיס הנוכחי במערך הכרטיסים
    const currentTicket = currentBag.find(ticket => ticket.ticketCode === p.ticketCode);
     if(currentTicket)
    {
     countAmount.innerText=`${currentTicket.amount}`;
    }
    else{
     countAmount.innerText="0";
    }
    //כשלוחצים על כפתור הוסף, 
    plusAmount.onclick=()=>{
        //אם קיים כבר הכרטיס הזה במערך הכרטיסים
        const currentTicket = currentBag.find(ticket => ticket.ticketCode === p.ticketCode);
                if (currentTicket){
                    currentTicket.amount=parseInt(currentTicket.amount)+1;
                    currentTicket.price=parseInt(p.price)+parseInt(currentTicket.price);
                    //עדכוני כמות ומחיר
                    //שליפת אלנמט המחיר של הכרטיס הנוכחי בטופס הסיכום
                    const ticketPp=document.querySelector(`.price-${currentTicket.ticketCode}`);
                    ticketPp.innerText=`${currentTicket.price} ₪`;
                    //שליפת אלנמט הכמות של הכרטיס הנוכחי בטופס הסיכום
                    const ticketAa=document.querySelector(`.amount-${currentTicket.ticketCode}`);
                    ticketAa.innerText=`יח' ${currentTicket.amount}`;
                     //עדכון כמות הכרטיסים בכרטיס עצמו
                    countAmount.innerText=`${currentTicket.amount}`;
                    updateSummery();
                    sessionStorage.setItem(`bag_${userName.user_name}_${userName.pass}_${currentEvent.code}`, JSON.stringify(currentBag));
            }
            //במקרה והכרטיס לא קיים במערך הכרטיסים
            else{
                const currentTicketA={
                    name: p.for,
                    ticketCode:p.ticketCode,
                    amount: 1,
                    price:p.price }
                   // הוספת מוצר לסל
                currentBag.push(currentTicketA);
                sessionStorage.setItem(`bag_${userName.user_name}_${userName.pass}_${currentEvent.code}`, JSON.stringify(currentBag));
                //שליחת מערך המוצרים המעודכן
                printTicketsSummery(currentTicketA);
                countAmount.innerText="1";
            }
            changesAround();
    }
    minusAmount.onclick=(event)=>{
        const currentTicket = currentBag.find(ticket => ticket.ticketCode === p.ticketCode);
        const currentIndex=currentBag.indexOf(currentTicket);
        //אם קיים כבר הכרטיס הזה במערך הכרטיסים
                if (currentTicket){
                    if( currentTicket.amount>1)
                    {
                        currentTicket.amount=parseInt(currentTicket.amount)-1;
                        currentTicket.price=parseInt(currentTicket.price)-parseInt(p.price);
                        //עדכוני כמות ומחיר
                        //שליפת אלנמט המחיר של הכרטיס הנוכחי בטופס הסיכום
                        const ticketPp=document.querySelector(`.price-${currentTicket.ticketCode}`);
                        ticketPp.innerText=`${currentTicket.price} ₪`;
                        //שליפת אלנמט הכמות של הכרטיס הנוכחי בטופס הסיכום
                        const ticketAa=document.querySelector(`.amount-${currentTicket.ticketCode}`);
                        ticketAa.innerText=`יח' ${currentTicket.amount}`;
                        countAmount.innerText=`${currentTicket.amount}`;
                    }
                    else{
                       //הסרת האלמנט מהדום
                       // currentTicket.remove();
                       console.log(currentIndex);
                        currentBag.splice(currentIndex, 1);
                        const ticketsList=document.querySelector(".forms-ticketlist");
                         ticketsList.innerHTML='';
                         printArray();
                        countAmount.innerText="0";
                    }
                    //עדכון כמות הכרטיסים בכרטיס עצמו
                    updateSummery();
                    
                    sessionStorage.setItem(`bag_${userName.user_name}_${userName.pass}_${currentEvent.code}`, JSON.stringify(currentBag));         
            }
            //במקרה והכרטיס לא קיים במערך הכרטיסים
            else{
                event.preventDefault();
            }
     showCome();
     changesAround();
    }
})
printArray();
changesAround();


//נבנה את מספר הדיבים הקשורים לשל הקניות, נכניס אותם למערך, ויהיה לנו משתנה אינדקס שיהיה אחרי על שמירת המיקום הנוכחי במערך הדיבים
//כלומר את מי מציגים כעת
//וכשלוחצים-נעלה את האינדקס, ונציג לפי האינדקס את הדיב הרצוי
//כמוכ נבצע את השינויים הרצויים לנו, כלומר שישתנו צבעיה כפתורים וכולי
//ואם האינדקס שוווה לסוף מערך הדיבים מינוס אחד, אז נשמור את הההזמנה באחסון, ונסגור את הסל
//נבצע ולידציה על הטופס, שלא ניתן יהיה לעבור לדיב הבא בלי שמלאו את הפרטים הנוכחיים 
let valid=0;
const  successInput=document.querySelectorAll(".success-icon-hide");
const isNumberCode = (code) => {
    if(code >= '0'.charCodeAt(0)  && code <= '9'.charCodeAt(0)) {
        return true;
    }
    return false;
};
const doneSymbol=document.querySelectorAll(".success-hide");
const inputs=document.querySelectorAll(".tab");
const summeryReservation=document.querySelector(".summery-reser");
const waitAlert=document.querySelector(".fmb-b-wait");
const waitAlertClose=document.querySelector(".close-ftm-b-wait");
waitAlertClose.onclick=()=>{
    waitAlert.style.bottom="-180px";
}
const divesToSow= Array.from(document.querySelectorAll(".form-main-form > div"));
const btns=[...document.querySelectorAll(".form-topstrip > div")];
const showDives=(index)=>{
    if(index!==0)
    {
       divesToSow[index-1].style.display="none";
   btns[index-1].classList.remove("current");
   btns[index-1].classList.add("currentBtn");
   btns[index-1].classList.add("prev");  
    }
   divesToSow[index].style.display="block";
   btns[index].classList.add("current");
}
let index=0;
const nextBtn=document.querySelector(".fmb-b-next-btn");
const detailsForm = document.querySelector('.detailsForm');
const paymentForm=document.querySelector('#paymentFormHere');
nextBtn.onclick=(event)=>{
    if(currentBag.length===0)
    {
       event.preventDefault();
       waitAlert.style.bottom="60px";
    }
    else
    {
         index++; 
        if (index===2){
           //nextBtn.form="myDetail";
           if(!detailsForm.checkValidity()){
              inputs.forEach(i=>{
                  i.style.borderBottom=" 1px solid rgb(202, 0, 0)";
              })  
            const invalidTitle=document.querySelector(".invalid-form");
            invalidTitle.style.opacity="1";
            event.preventDefault();
            index--; 
           }
           else{
               showDives(index); 
           } 
        }
        else{
            if(index===3)
            {
                   if(!paymentForm.checkValidity())
                  {
                      event.preventDefault();
                       index--;
                   }
                   else{
                    setTimeout(()=>{

                       showDives(index);
                     nextBtn.style.display="none"; 
                    },1500)
                   }  
            } 
            else{
                showDives(index);
            }
        }
      
    }       
} 
const removeDivesShow=()=>{
    divesToSow.forEach(d=>{
        d.style.display="none";
   })
}
const removeBtnsStyle=()=>{
    btns.forEach((b)=>{
        b.classList.remove("current");
   })
}
const reservation=document.querySelector(".div0");
const details=document.querySelector(".div2");
const paymentDetails=document.querySelector(".div3");
reservation.onclick=()=>{
    removeBtnsStyle();
    removeDivesShow();
    index=0;
    showDives(0);
}
details.onclick=()=>{
    removeBtnsStyle();
    removeDivesShow();
    index=1;
    showDives(1);
}
paymentForm.onclick=()=>{
    removeBtnsStyle();
    removeDivesShow();
    index=2;
    showDives(2);
}
const yearInput=document.querySelector("#expmonthInput");
const monthInput=document.querySelector("#expyearInput");
const sumbitPay=document.querySelector("#tic-submit.disabled");
let filled=0;
const  inputsPayment=document.querySelectorAll(".formRow");
const  inputsPaymentInput=document.querySelectorAll(".formRow input");

 
 inputsPaymentInput.forEach((c, index)=>{
     c.onfocus=()=>{
          inputsPayment[index].classList.add("focuss");
     }
    c.onblur=()=>{
         if(!c.checkValidity()) 
       {
           filled--;
           if(filled<0)
           {
               filled=0;
           }
           if(c.value==="")
           {
               inputsPayment[index].classList.remove("focuss"); 
               successInput[index].style.opacity="0";
           }
           else{
            successInput[index].style.backgroundColor="red";
            successInput[index].style.opacity="1";
            successInput[index].style.backgroundImage="url(images/סגור-טופס.svg)";
           }
       }
       else{
           filled++;
           valid++;
           successInput[index].style.opacity="1";
           successInput[index].style.backgroundImage="url(images/חץ-דף.svg)";
           successInput[index].style.backgroundColor="#86c81c";
       }
    }
})
const cvvShow=document.querySelector(".formm-input-cvv-icon");
cvvShow.onmouseover=()=>{
    cvvShow.style.transform="scale(180%)";
}
cvvShow.onmouseleave=()=>{
    cvvShow.style.transform="scale(100%)";
}
const inputsPaymentValid=document.querySelectorAll(".fieldInput > input").forEach((input)=>{
    input.onkeypress = (event) => {
    // בדיקה האם הקוד של הכפתור שנלחץ הוא מספר או לא
    if (!isNumberCode(event.keyCode)) {
        // ביטול של הארוע
        event.preventDefault();
    }
}
});

yearInput.onkeypress = (event) => {
    // בדיקה האם הקוד של הכפתור שנלחץ הוא מספר או לא
    if (!isNumberCode(event.keyCode)) {
        // ביטול של הארוע
        event.preventDefault();
    }
   
}
monthInput.onkeypress = (event) => {
    // בדיקה האם הקוד של הכפתור שנלחץ הוא מספר או לא
    if (!isNumberCode(event.keyCode)) {
        // ביטול של הארוע
        event.preventDefault();
    }
    
}
const nameIN=document.querySelector("#frm-name");
if(userName.user_name)
{
     nameIN.value=`${userName.user_name}`;
}






     