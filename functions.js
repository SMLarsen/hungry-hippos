/*jshint esversion: 6 */
function fish(shoal) {
  let myAmount = 0;
  let mySize = 1;
  let currentThreshold = 1;
  let targetAmount = 12;

  // Check for empty shoal
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
  const shoalArray = shoal.split("").sort();
  console.log('shoalArray:', shoalArray);
  console.log('growthRules[mySize - 1].threshold:', growthRules[mySize - 1].threshold);

  // Feeding frenzy
  for (let size = 1; size <= 10; size++) {
    for (let shoalIndex = shoalArray.length - 1; shoalIndex >= 0; shoalIndex--) {

      console.log(1, 'shoalIndex:', shoalIndex, 'mySize:', mySize, "myAmount:", myAmount, 'threshold:', growthRules[mySize - 1].threshold, 'shoalArray[shoalIndex]', shoalArray[shoalIndex]);
      if (shoalArray[shoalIndex] <= mySize) {
        myAmount += parseInt(shoalArray[shoalIndex], 10);
        shoalArray.splice(shoalIndex, 1);
      }
      console.log(2, 'shoalIndex:', shoalIndex, 'mySize:', mySize, "myAmount:", myAmount, 'threshold:', growthRules[mySize - 1].threshold, 'shoalArray[shoalIndex]', shoalArray[shoalIndex]);
      if (myAmount >= growthRules[mySize - 1].threshold) {
        mySize += 1;
        break;
      }
      console.log(3, 'shoalIndex:', shoalIndex, 'mySize:', mySize, "myAmount:", myAmount, 'threshold:', growthRules[mySize - 1].threshold, 'shoalArray[shoalIndex]', shoalArray[shoalIndex]);
      console.log('===============================================================');
    }
    if (shoalArray[0] > mySize || shoalArray.length === 0 || mySize === 9) {break;}
  }
  return mySize;
}

console.log(fish("899182411002858061009414575580634881903735823104884230391158"));

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
