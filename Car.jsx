import React from 'react';
// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         brand: "Ford",
//         model: "Mustang",
//         color: "red",
//         year: 1964
//       };
//     }
//     changeColor = () => {
//       this.setState({color: "blue"});
//     }
//     render() {
//       return (
//         <div>
//           <h1>My {this.state.brand}</h1>
//           <p>
//             It is a {this.state.color}
//             {this.state.model}
//             from {this.state.year}.
//           </p>
//           <button
//             type="button"
//             onClick={this.changeColor}
//           >Change color</button>
//         </div>
//       );
//     }
//   }


// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoritecolor: "red" };
//     }
//     static getDerivedStateFromProps(props, state) {
//         return { favoritecolor: props.favcol };
//     }
//     render() {
//         return (
//             <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         );
//     }
// }

// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     componentDidMount() {
//       setTimeout(() => {
//         this.setState({favoritecolor: "yellow"})
//       }, 1000)
//     }
//     render() {
//       return (
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       );
//     }
//   }

// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     static getDerivedStateFromProps(props, state) {
//       return {favoritecolor: props.favcol };
//     }
//     changeColor = () => {
//       this.setState({favoritecolor: "blue"});
//     }
//     render() {
//       return (
//         <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//         </div>
//       );
//     }
//   }


class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
      return true;
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

export default Header;