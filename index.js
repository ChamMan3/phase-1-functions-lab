// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42){
    return (blocks - 42)}
    else if (blocks < 42)
    return (42 - blocks)
  }
function distanceFromHqInFeet(feet){
  return distanceFromHqInBlocks(feet) * 264;
}
function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination)*264
    }
    else {
        return (destination - start)*264
    }


}