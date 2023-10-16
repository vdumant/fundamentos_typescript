(() => {
  type UserID = string | number;
  let userId: UserID;

  function greeting(myText: UserID) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    }
  }

  type Sizes = 'S' | 'M' | 'L';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';

})()
