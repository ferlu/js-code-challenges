// The next method returns an object with a value property that contains the yielded value and a done property,
// which tells us whether the generator has yielded its last value.
// In this challenge, you're going to build a generator function that returns the next stop in a list of stops along the Metro North Railroad in New York.
// Each time a button is clicked, the next stop in the journey should be returned until we reach Grand Central Station in New York City.
// The train stops are Poughkeepsie, Newburgh, Peekskill, Yonkers, Bronx, and Grand Central. You should use a generator function to yield these values.
// Console log each stop and once we reach the final stop, Grand Central, console log "We made it!" Once we reach our final stop, the next stop button should be disabled.

function* metroNorthRailroad() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central";
}
const metro = metroNorthRailroad();

function nextStop() {
  let { value, done } = metro.next();
  if (done) {
    document.getElementById("stop-button").disabled = true;
    return console.log("We made it!");
  }
  return console.log(value);
}
