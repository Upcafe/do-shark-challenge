/**
 * Helper to check if fish is actually swimming
 * on https://functionschallenge.digitalocean.com.
 * 
 * Navigate to the url above and pase the code into the browser console. 
 * 
 * New fish should be at the top so the first logged 
 * name should be your Shark.
 *
 */

let fishes = document.getElementsByClassName('fish');
let fishEls = [];
for (let i = 0; i < fishes.length; i++) {
  const currentFish = fishes[i];
  const name = currentFish.children[0].children[1].children[0].innerHTML;
  console.log(name)
  fishEls.push(currentFish);
}

console.log('Total fishes', fishEls.length);
