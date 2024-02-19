// Description
// Three - cushion billiards, also called three - cushion carom, is a form of carom billiards.
//  The object of the game is to carom the cue ball off both object balls while contacting the
//  rail cushions at least three times before contacting the second object ball.

// The table consists of 4 cushions (north, east, south and west)
// There are 3 balls (white, yellow, red)
// The cue ball is the ball that the player starts with (white and yellow are allowed to be
// picked)
// The object balls are the 2 remaining balls that the player did not pick to
// start with (red is always one of these balls)
// Task
// Given an encoded string representing the collisions of the cue ball
// with object balls and cushions, return a boolean indicating whether a point was scored.
// You may assert the player hits a valid cue ball(white or yellow).

// Input
// The input consists of a combination of zero, one or more occurences of the following
// chars:

// 'w', 'e', 'n', 's' - west, east, north and south cushion
// 'W', 'Y', 'R' - white, yellow and red ball
// Output
// return a boolean indicating whether a point is scored
// Conditions to score a point
// The cue ball must have made contact with the cushions at least three times before
// contacting the second object ball for the first time.
// Both object balls must be hit at least once.

function hasScored(s) {
  let balls = new Set(), cushions = 0;
  for (let c of s) {
    if ('nesw'.includes(c)) ++cushions;
    if ('WYR'.includes(c)) balls.add(c);
    if (balls.size == 2) return cushions >= 3 && !(balls.has('W') && balls.has('Y'));
  }
  return false;
}