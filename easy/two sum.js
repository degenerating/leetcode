// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */


 var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (x = 0; x < nums.length; x++) {
            if (x === i) {
                continue
            }

            else if (nums[i] + nums[x] === target) {
                return [i, x]
            }
        }
    }
};


twoSum([2,7,11,15], 9)