const URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
alert("You can check the currency conversion rate");
const list=document.querySelectorAll(".list select");
const btn=document.querySelector("form button");
const from=document.querySelector(".from select");
const to=document.querySelector(".to select");
const msg=document.querySelector(".msg");
 for(let select of list){
    for(currCode in countryList){
        let newopt=document.createElement("option");
        newopt.innerText=currCode;
        newopt.value=currCode;
        select.append(newopt);   
    }
    select.addEventListener("change",(evt)=>{
        updatef(evt.target);
    });
 }
 const updatef=(ele)=>{
    let currCode=ele.value;
    let countrycode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=ele.parentElement.querySelector("img");
    img.src=newSrc;
 };
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amt=document.querySelector(".amt input");
    let amtVal=amt.value;
    if(amtVal=="" || amtVal<1){
        amtVal=1;
        amt.value="1";
    }
    const URLL=`${URL}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
    let response=await fetch(URLL);
    let data=await response.json();
    let rate=data[to.value.toLowerCase()];
    let final=rate*amtVal;
    msg.innerText=`${amtVal}${from.value}=${final}${to.value}`;
});