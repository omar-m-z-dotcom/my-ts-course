/*
  Data Types
  - Tuple
  --- Is Another Sort Of Array Type
  --- We know Exactly How Many Elements It Contains
  --- We Know Which Types It Contains At Specific Positions
*/

let article: readonly [number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false]; // error because of readonly
// article.push(100); // Error
console.log(article);

const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);