const stripByComment = text => {
  let regular = /\/\* strip-start[\s\S]*?strip-end \*\//g;
  let regularBrace = new RegExp("\\\{"+regular.source+"\\\}", "g");
  let result = text.replace(regularBrace, "");
  result = result.replace(regular, "");
  return result;
};

module.exports = stripByComment;
