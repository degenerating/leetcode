// You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

// Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

 

// Example 1:

// Input: nums = [1,1,4,2,3], x = 5
// Output: 2
// Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
// Example 2:

// Input: nums = [5,6,7,8,9], x = 4
// Output: -1
// Example 3:

// Input: nums = [3,2,20,1,1,3], x = 10
// Output: 5
// Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.



var minOperations = function(nums, x) {
    let arrSum = nums.reduce((a, b) => {
        return a + b
    })
    
    let goal = arrSum - x

    if (goal < 0) {
        return -1
    }

    if (goal == 0) {
        return nums.length
    }

    console.log(`goal: ${goal}`)
    let curSum = 0
    let maxLength = 0

    let lIndex = 0
    let possible = false


    for (i = 0; i < nums.length; i++) {

        // console.log(`cursum: ${curSum}`)
        // console.log(`maxlength: ${maxLength}`)
        
        curSum += nums[i]

        while (curSum > goal) {
            curSum -= nums[lIndex]
            lIndex ++
        }

        if (curSum === goal && maxLength < (i - lIndex + 1)) {
            maxLength = i - lIndex + 1
            possible = true
        }

    }



    if (possible === false) {
        return -1
    }

    else {
        console.log(`result: ${nums.length - maxLength}`)
        return(nums.length - maxLength)
    }


};

// minOperations([3, 2, 20, 1, 1, 3], 10)


minOperations([8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309], 134365)


// minOperations([1,1,4,2,3], 5)

