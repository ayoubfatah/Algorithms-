function sumIntervals(intervals) {
  if (intervals.length === 0) return 0;
   intervals.sort((a, b) => a[0] - b[0]);
  let totalLength = 0;
  let [currentStart, currentEnd] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start <= currentEnd) {
      currentEnd = Math.max(currentEnd, end);
    } else {
      totalLength += currentEnd - currentStart;
      console.log(totalLength, "total length");
      [currentStart, currentEnd] = [start, end];
    }
  }
  totalLength += currentEnd - currentStart;
  return totalLength;
}
