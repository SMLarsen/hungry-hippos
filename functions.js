/*jshint esversion: 6 */
function fish(shoal) {
  let myAmount = 0;
  let mySize = 1;
  let currentThreshold = 1;
  let targetAmount = 12;
  let amountNeededToGrow = 0;
  let sizeTotal = 0;
  let amountAvailable = 0;

  // Check for empty shoal
  console.log(shoal === "");
  if (shoal === "") {
    return mySize;
  }

  const growthRules = [{
      size: 1,
      threshold: 4
    }, {
      size: 2,
      threshold: 12
    }, {
      size: 3,
      threshold: 24
    }, {
      size: 4,
      threshold: 40
    }, {
      size: 5,
      threshold: 60
    }, {
      size: 6,
      threshold: 84
    }, {
      size: 7,
      threshold: 112
    }, {
      size: 8,
      threshold: 144
    }, {
      size: 9,
      threshold: 180
    }

  ];

  // convert shoal to array of each fish
  console.log(shoal);
  const shoalArray = shoal.split("");

  // create array of counts of each size fish
  let fishCounts = {};

  shoalArray.forEach(function(x) {
    fishCounts[x] = (fishCounts[x] || 0) + 1;
    sizeTotal += parseInt(x, 10);
  });
  console.log('fishCounts:', fishCounts);

  console.log('sizeTotal:', sizeTotal);

  // Feeding frenzy
  // 1) Determine current threshold for growth
  currentThreshold = growthRules[mySize - 1].threshold;
  console.log('currentThreshold:', currentThreshold);

  // 2) Determine how much more fish amount needed to grow
  amountNeededToGrow = currentThreshold - myAmount;
  console.log('amountNeededToGrow:', amountNeededToGrow);

  // 3) Check if any fish available for consumption <= my size
  var propNames = Object.keys(fishCounts);
  propNames.forEach(function(name) {
    if (name <= mySize) {amountAvailable += fishCounts[name];}
  });
  console.log('amountAvailable:', amountAvailable);

  if (amountAvailable >= amountNeededToGrow) {
    eatFish();
  } else {
    return mySize;
  }


  // 4) Starting with largest available, eat fish
  //     a) Add fish amount to my amount
  //     b) Decrement counter for that size from fishCounts[size]
  //     c) Repeat until either of following conditions:
  //       1) I can growth => grow
  //       2) There are no more available fish => done


  return mySize;
}


console.log(fish("11112222"));
console.log(fish(""));

/*
Test.expect(fish("")==1, "Should return '1'")
Test.expect(fish("0")==1, "Should return '1'")
Test.expect(fish("6")==1, "Should return '1'")
Test.expect(fish("1111")==2, "Should return '2'")
Test.expect(fish("11112222")==3, "Should return '3'")
Test.expect(fish("111122223333")==4, "Should return '4'")
Test.expect(fish("111111111111")==3, "Should return '3'")
Test.expect(fish("111111111111111111112222222222")==5, "Should return '5'")
Test.expect(fish("151128241212192113722321331")==5, "Should return '5'")
*/
