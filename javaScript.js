function rafsan() {
  const Time = new Date();
  const hour = Time.getHours();
  const min = Time.getMinutes();
  const sec = Time.getSeconds();

  // console.log();

  const RealTimeHours = 30 * hour + min / 2;
  const RealTimemin = 6 * min;
  const RealTimeSec = 6 * sec;

  const hoursTime = document.getElementById("hours").style.transform = `rotate(${RealTimeHours}deg)`;
  const minTime = document.getElementById("minit").style.transform = `rotate(${RealTimemin}deg)`;
  const hourssec = document.getElementById("secnd").style.transform = `rotate(${RealTimeSec}deg)`;

  
  const ChoursTime = document.getElementById("Chours").innerHTML = hour ;
  const CminTime = document.getElementById("Cminit").innerHTML = min ;
  const Chourssec = document.getElementById("Csecnd").innerHTML = sec ;
  if(sec <= 9){
    const Chourssec = document.getElementById("Csecnd").innerHTML = "0" + sec ;
  }


  const Ddate = document.getElementById("Ddate").innerHTML = Time.getDate() ;
  const Dmanth = document.getElementById("Dmanth").innerHTML = Time.getMonth();
  const Dyears = document.getElementById("Dyears").innerHTML = Time.getFullYear();
  if(Ddate <= 9){
    const Ddate = document.getElementById("Ddate").innerHTML = "0" + Time.getDate() ;
  }
  
  if(Dmanth <= 9){
    const Dmanth = document.getElementById("Dmanth").innerHTML = "0" + Time.getMonth();
  }


}

setInterval(rafsan, 1000);
