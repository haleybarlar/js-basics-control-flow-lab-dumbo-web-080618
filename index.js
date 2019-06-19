// scuberGreetingForFeet() — Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.

// ternaryCheckCity() — Use a ternary operator to return the correct response based on the desired destination of the passenger.

// switchOnCharmFromTip() — Use a switch statement to return a different response based on the generosity of the passenger's tip.


scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride > 2000) {
    return 'I will gladly take your thirty bucks.';
  } else if (ride > 2500) {
    return 'No can do.';
  }


  if (ride > 2500) {
    return 'No can do.';
  } else if (ride > 2000) {
    return 'I will gladly take your thirty bucks.';
  } else if (ride <= 400) {
    return 'This one is on me!';
  }
}
