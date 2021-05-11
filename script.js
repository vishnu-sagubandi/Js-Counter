const countdown=()=>{
    const countDate=new Date('May 28, 2021 00:00:00').getTime();
    const now=new Date().getTime();
    const gap=countDate-now;
    // console.log(countDate);
    // console.log(now);
    // console.log(gap);

    //Setting up time
    const second=1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    const leftdays=Math.floor(gap/day);
    const lefthours=Math.floor(gap%day/hour);
    const leftmins=Math.floor(gap%day%hour/minute);
    const leftsec=Math.floor(gap%day%hour%minute/second);

    // console.log(leftdays);
    // console.log(lefthours);
    // console.log(leftmins);
    // console.log(leftsec);

    //Inserting into html
    document.querySelector('.day').innerHTML = leftdays
    document.querySelector('.hour').innerHTML = lefthours
    document.querySelector('.min').innerHTML = leftmins
    document.querySelector('.sec').innerHTML = leftsec

}

setInterval(() => {
    countdown(); 
}, 1000);