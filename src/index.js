import React from 'react'
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return React.createElement('div', { className: 'oldercoaster' }, [
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Agnes'),
        React.createElement('li', {}, 'Muriel')
      ])
    ])
  }
};

export class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('p', {}, "You shouldn't look too far."),
      React.createElement('p', {}, "Sometimes, the solution is right in front of you.")
    ])
  }
};

function butcherMap() {
  return BUTCHER_PRODUCTS.map(product => {
    return React.createElement('li', {}, product)
  })
}

export class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', { className: 'butcher-shop' }, [
      React.createElement('p', {}, "Hello! We have the following products for sale today:"),
      React.createElement('ul', {}, butcherMap())
    ])
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);
