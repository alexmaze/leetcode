/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }

    for (i = 0; i < nums.length; i++) {
        var need = target - nums[i];
        if (map[need]) {
            return [i, map[need]];
        }
    }

    throw 'No Match!';
};

module.exports = twoSum;
