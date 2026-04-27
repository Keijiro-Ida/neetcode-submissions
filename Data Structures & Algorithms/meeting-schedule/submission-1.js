/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if(intervals.length <= 1) return true;

        const sorted = [...intervals].sort((a, b) => a.start - b.start);

        for(let i = 1; i < sorted.length; i++) {
            const prevEnd = sorted[i - 1].end;
            const currStart = sorted[i].start;
            if(prevEnd > currStart) {
                return false;
            }
        }
        return true;
    }
}
