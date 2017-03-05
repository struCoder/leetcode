'use strict';

function twoSum(nums, target) {
  let i = nums.length;
  let another;
  let anotherIndex;
  while(--i) {
    another = target - nums[i];
    anotherIndex = nums.indexOf(another);
    if (anotherIndex !== -1 && (i !== anotherIndex)) {
      return [anotherIndex, i];
    }
  }
}
