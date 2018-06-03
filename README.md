<h1 align="center">֎ COMMENTUS ֍</h1>  

Did you know that `HTML` comments are actual elements? You can create them just like you would a regular ol' `div` and even update the text inside the element. 

Inspired by humorous comments like the ones below:

<center> 
  <img src="docs/500px.png" width="600" height="auto">
  <p>500px.com</p>
  <img src="docs/maddox.png" width="600" height="auto">
  <p>maddox.xmission.com</p>
  <img src="docs/digg.png" width="600" height="auto">
  <p>digg.com</p>
</center>

### Usage
```javascript
let options =
{ position: [ 'first' | 'last' | 'target' ] // default 'first'
, target: [ '#query' | Node ] // only valid when position is 'target'
};

let comment = new Commentus('dynamic comments FTW!', options);

comment.update('made you look!');
```