function formatTime(seconds){
    let daySec = 24 *  60 * 60;
  let hourSec=  60 * 60;
  let minuteSec=60;
    let dd = Math.floor(seconds / daySec);
    let hh = Math.floor((seconds % daySec) / hourSec);
    let mm = Math.floor((seconds % hourSec) / minuteSec);
  let ss=seconds%minuteSec;
    if(dd > 0){
      return dd + "天" + hh + "小时" + mm + "分钟"+ss+"秒";
    }else if(hh > 0){
      return hh + "小时" + mm + "分钟"+ss+"秒";
    } else if (mm > 0){
      return mm + "分钟"+ss+"秒";
    }else{
      return ss+"秒";
    }
  }
  
  const result = formatTime('1802835.25')
  console.log('result',result);//20天20小时47分钟15.25秒