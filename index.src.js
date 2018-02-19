export default stripByComment = text => {
  let regular = /\/\* strip-start[\s\S]*?strip-end \*\//g;
  let regularBrace = new RegExp("\\\{"+regular.source+"\\\}", "g");
  let result = text.replace(regular, "");
  result = result.replace(regularBrace, "");
  return result;
}




