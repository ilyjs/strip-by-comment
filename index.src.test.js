const stripByComment = require('./index.src.js');

describe('strip', () => {

  it('simple test', () => {
    let a = `/* strip-start */ 1234 /* strip-end */`;
    expect(stripByComment(a)).toBe("");
  });

  it('simple test width {}', () => {
    let a = `{/* strip-start */} 1234 {/* strip-end */}`;
    expect(stripByComment(a)).toBe("");
  });

  it('test for spaces ', () => {
    let a =
      `1/* strip-start */
    1234 
    /* strip-end */
    1`;
    let b =
      `1
    1`;
    expect(stripByComment(a)).toBe(b);
  });

  it('test for spaces width {}', () => {
    let a =
      `1{/* strip-start */}
    1234 
    {/* strip-end */}
    1`;
    let b =
      `1
    1`;
    expect(stripByComment(a)).toBe(b);
  });

});

