(()=>{
  let userId: string|number;
  userId=12;
  userId='aaa12';

  function greeting(myText:string|number) {
    if (typeof myText==='string') {
      console.log(`string ${myText.toLowerCase()}`);
    }else{
      console.log(`number ${myText.toFixed(2)}`);
    }
  }
  greeting('qaq');
  greeting(14);

})()
