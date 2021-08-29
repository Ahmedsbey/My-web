document.querySelector('.uprbtn').addEventListener('click',()=>{
    window.scrollTo(0,0)
})
// for upper scroll bar
window.onscroll = ()=>{
var html = document.documentElement;
let scrollTop = html.scrollTop;
let height = html.scrollHeight - html.clientHeight;
var unit  = (scrollTop/height)*100;
document.querySelector('#scrollbar').style.width=`${unit}%`
console.log(unit);

// for upper scroll button
if(unit <= 51.17876468274297){
    uperbtn =  document.querySelector('.uprbtn').style.opacity = 0;
}else if(unit >= 51.17876468274297 && unit <=  99.99033585442847){
    document.querySelector('.uprbtn').style.opacity = 1;
}else if(unit >= 99.99033585442847) {
    document.querySelector('.uprbtn').style.opacity = 0;
}
}
