function luvcheck(petals1, petals2) {
  if (petals1%2 == 0 && petals2%2 != 0) {
    return true;
  } else if (petals2%2 == 0 && petals1%2 != 0) {
    return true;
  } else {
    return false;
  }
}

console.log(luvcheck(2,1));