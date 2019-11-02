var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let lineCount = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${lineCount} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine[0]}.`
  } else {
      return 'There is nobody waiting to be served!'
  }
  katzDeliLine = katzDeliLine.shift();
}
