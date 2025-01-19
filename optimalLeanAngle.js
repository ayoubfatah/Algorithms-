function optimalLeanAngle(speedKmh, turnRadius) {
    const g = 9.81;
    const speedMs = (speedKmh * 1000) / 3600;
    const leanAngleRadians = Math.atan((speedMs ** 2) / (turnRadius * g));
    const leanAngleDegrees = (leanAngleRadians * 180) / Math.PI;
    return leanAngleDegrees;
}

const speedKmh = 72;
const turnRadius = 30;
const leanAngle = optimalLeanAngle(speedKmh, turnRadius);
console.log(`Optimal lean angle: ${leanAngle.toFixed(2)} degrees`);