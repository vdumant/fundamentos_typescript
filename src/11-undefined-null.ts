(() => {
  // let myNumbers:number=undefined;
  // let myString:string=null;
  let myNull: null = null;
  let myUNdefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 1;
  let myString: string | undefined = undefined;
  myString = '1';
  // function hi(name: string | null) {
  //   let hello = 'hola ';
  //   if (name) {
  //     hello += name;
  //   } else {
  //     hello += 'nobody';
  //   }
  //   console.log(hello);
  // }
  function hi(name: string | null) {
    let hello = 'hola ';
    hello += name?.toLowerCase() || 'nobody';
  }
  hi(null);
})()
