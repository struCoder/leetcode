package main

import (
  "fmt"
)

var indexArr = make([]int, 2)

func indexOf(nums []int, val int) int {
  for i, v:= range nums {
    if v == val {
      return i
    }
  }
  return -1
}

func twoSum(nums []int, target int) []int {
  i := len(nums) - 1;
  var another int
  var anotherIndex int
  for i >= 0 {
    another = target - nums[i]
    anotherIndex = indexOf(nums, another)
    if anotherIndex != -1 && i != anotherIndex {
      indexArr[0] = i
      indexArr[1] = anotherIndex
    }
    i--;
  }
  return indexArr
}
