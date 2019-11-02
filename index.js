var katzDeliLine = [];
let lineCount = katzDeliLine.length;
function takeANumber(lineCount, name) {
  katzDeliLine[lineCount] = name;
  return `Welcome, ${name}. You are number ${lineCount+1} in line.`
}
