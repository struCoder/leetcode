int indexOf(int* num, int size, int val) {
  int i;
  for(i = 0; i < size; i++) {
    if (num[i] == val) {
      return i;
    }
  }
  return -1;
}

int* twoSum(int* nums, int numsSize, int target) {
  int another, anotherIndex;
  int* ret = malloc(2 * sizeof(int));
  for(int i = 0; i < numsSize; i++) {
    another = target - nums[i];
    anotherIndex = indexOf(nums, numsSize, another);
    if (anotherIndex != i && anotherIndex != -1) {
      ret[0] = i;
      ret[1] = anotherIndex;
      break;
    }
  }
  return ret;
}
