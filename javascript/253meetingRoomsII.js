// Given an array of meeting time intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (!intervals.length) return 0;

    const starts = intervals.map(a => a[0]).sort((a, b) => a - b);
    const ends = intervals.map(a => a[1]).sort((a, b) => a - b);

    let rooms = 0;
    let endPtr = 0;

    for (let startPtr = 0; startPtr < intervals.length; startPtr++) {
        // if a meeting starts before the earliest ending meeting finishes
        if (starts[startPtr] < ends[endPtr]) {
            rooms++;
        } else {
            // a room has been freed; move end pointer to the next ending time
            endPtr++;
        }
    }

    return rooms;
}