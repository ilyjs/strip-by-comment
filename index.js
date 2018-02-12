export default strip = text => {
  let a = /\{\/\* strip-start[\s\S]*?strip-end \*\/\}/g;
  let b = /\/\* strip-start[\s\S]*?strip-end \*\//g;
  let result = text.replace(a, "");
  result = result.replace(b, "");
  return result;
}




