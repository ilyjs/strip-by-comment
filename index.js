export default strip = text => {
  let regular =  new RegExp( /\/\* strip-start[\s\S]*?strip-end \*\//g);
  let regularBrace = "{" + regular + "}";
  let b = /\/\* strip-start[\s\S]*?strip-end \*\//g;
  let result = text.replace(a, "");
  result = result.replace(b, "");
  return result;
}




