/*jshint esversion: 6 */
function fish(shoal){
  const shoalArray = shoal.split("").map((value) => {return parseInt(value, 10);});
  let fishCounts = [];
  console.log(shoalArray);
let me = 1;

shoalArray.forEach(function(item, x) { fishCounts[x] = (fishCounts[x] || 0)+1; });
console.log(fishCounts);

  // Code here
}

// console.log(fish("11112222"));
fish("11112222");
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
