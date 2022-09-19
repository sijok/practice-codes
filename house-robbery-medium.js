/**
  Given an array num indicating money in each house, calculate the maximum amount that can be robbed.
  Condition - Adjacent houses cannot be robbed as it will draw attention.
  LEVEL - MEDIUM
  Approach for solution - Dynamic programming.
**/

var rob = function(nums) {
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1], (nums[i] + dp[i-2]));
    }
    return dp[nums.length - 1];
};
