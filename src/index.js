/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var j, t, i;
var count = 0;
for (i=0; i<preferences.length; i++) {
j=preferences[i];
t=preferences[j - 1];
if (preferences[t - 1]==i + 1) {
count+=1;
}}
count=count/3>>0;
return count;
};
