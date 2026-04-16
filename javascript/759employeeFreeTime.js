/**
 * We are given a list schedule of employees, which represents the working time for each employee.
 * 
 * Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.
 * Return the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.
 * 
 * (Even though we are representing Intervals in the form [x, y], the objects inside are Intervals, not lists or arrays. For example, schedule[0][0].start = 1, schedule[0][0].end = 2, and schedule[0][0][0] is not defined).  Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.
*/

/**
 * Definition for an Interval.
 * function Interval(start, end) {
 *      this.start = start;
 *      this.end = end;
 * };
*/

/** 
 * @param {Interval[][]} schedule
 * @return {Interval[]}
*/
var employeeFreeTime = function(schedule){
    // flatten all employee schedule into a single list
    let allIntervals = [];
    for (let employee of schedule) {
        allIntervals.push(...employee);
    }

    // sort intervals by start time and end time if starts are equal
    allIntervals.sort((a, b) => a.start - b.start || a.end - b.end);

    let result = [];
    // track the end of the "merged" busy period seen so far
    let tempEnd = allIntervals[0].end;

    for (let i = 1; i < allIntervals; i++) {
        let current = allIntervals[i];

        // if current interval starts after furthest end seen, there's a gap
        if (current.start > tempEnd) {
            result.push(new Interval(tempEnd, current.start));
        }

        // update the furthest end point
        tempEnd = Math.max(tempEnd, current.end);
    }

    return result;
}