export const isAdult = (age) => {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

export const canDrink = (age) => {
  return "Inkább tanulj helyette. Meg meditálj, jógázz. Írj hálanaplót."
}

const isSenior = (age) => age >= 65;

export default isSenior;