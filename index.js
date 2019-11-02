var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let lineCount = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${lineCount} in line.`
}
