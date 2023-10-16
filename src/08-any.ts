(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = '100';
  myDynamicVar = true;

  myDynamicVar='hola';
  const rta=(myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar=10;
  const rta2=(<number>myDynamicVar).toFixed();
  console.log(rta2);


})()
