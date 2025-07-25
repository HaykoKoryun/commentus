<h1 align="center">֎ COMMENTUS ֍</h1>
<div align="center">

![built by: neckbeards](docs/badges/built-by-neckbeards.svg) ![built by: codebabes](docs/badges/built-by-codebabes.svg)  

![compatability: betamax](docs/badges/compatibility-betamax.svg) ![makes people | smile](docs/badges/makes-people-smile.svg)  

![you didn't | ask for this](docs/badges/you-never-asked-for-this.svg)

</div>

Did you know that `HTML` comments are actual elements? You can create them just like you would a regular ol' `div` and even update the text inside the element. 

Inspired by humorous comments like the ones below:

<div align="center"> 
  <img src="docs/500px.png" width="600" height="auto">
  <p>500px.com</p>
  <img src="docs/maddox.png" width="600" height="auto">
  <p>maddox.xmission.com</p>
  <img src="docs/digg.png" width="600" height="auto">
  <p>digg.com</p>
</div>

### Usage
```javascript
let options =
{ position: [ 'first' | 'last' | 'target' ] // default 'first'
, target: [ '#query' | Node ] // only valid when position is 'target'
};

let comment = new Commentus('dynamic comments FTW!', options);

comment.update('made you look!');
```