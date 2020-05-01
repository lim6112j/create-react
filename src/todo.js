import MyReact from './MyReact';
import h from 'hyperscript';
import hh from 'hyperscript-helpers';
import '../style/app.css';
import '../style/fontawesome/all.css'
console.log('start');
const {div, h1, h2, h3, span, button, br} = hh(h);
const root = document.getElementById("root");
const Step1 = (function() {
    // create a new div element 
    const newDiv = document.createElement("div"); 
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    return newDiv;
})();
const Step2 = (div([
  h1({'data-id': 'header'}, 'Hello Kosac React'),
  h2('(Welcome Kosac)'),
  div('nested 1', div({}, 'nested 1.1')),
  h3('(OBSERVE: This will change)'),
  div(2 === 1 ? 'Render this if 2 == 1' : 2),
  span('This is a text'),
  br(),
  button({onclick: () => alert("hi")}, 'clickMe')
]));
// jsx
// var Step1 = (
  // <div>
  //   <h1 className="header">Hello Tiny React!</h1>
  //   <h2>(coding nirvana)</h2>
  //   <div>nested 1<div>nested 1.1</div></div>
  //   <h3>(OBSERVE: This will change)</h3>
  //   {2 == 1 && <div>Render this if 2==1</div>}
  //   {2 == 2 && <div>{2}</div>}
  //   <span>This is a text</span>
  //   <button onClick={() => alert("Hi!")}>Click me!</button>
  //   <h3>This will be deleted</h3>
  //   2,3
  // </div>
// );

console.log(Step1)
MyReact.render(Step1, root)