import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // var name = "Dr Mahfuz";
  // var person = {
  //   name : 'Dr Mahfuz',
  //   job : 'Singer'
  // }
  // var person2 = {
  //   name : 'Dr Eva Rahman',
  //   job : 'Singer'
  // }
  // var red={
  //   color:'red'
  // }
  // var green={
  //   color:'green'
  // }


  const nayoks = ['Salman','Sharuk','Shahid','Rahib','Shuvo'];
  const products = [
    {name:'Photoshop',price:'$200'},
    {name:'Illastator',price:'$260'},
    {name:'Reader',price:'$150'}
    ];
  //const productNames = products.map(product => product.name);
  const nayokNames = nayoks.map(nayok => nayok);

  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={red}>Person Name :  {person.name}</h1>
        <h3>Job :  { person.job}</h3>
        <h1 className="" style={green}>Person Name :  {person2.name}</h1>
        <h3>Job :  { person2.job}</h3>

        <h2>{(2+4)*3*3}</h2>
        <p style={{color : 'red',background : 'green'}}>My First Paragraph</p> 
        <Person name={nayoks[0]} nayika="Moushumi"></Person> 
        <Person name={nayoks[1]} nayika="Moushumi"></Person> 
        <Person name={nayoks[2]} nayika="Modu"></Person> 
        */}

        <p>I am a react Person</p>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          <li></li>
          {
            products.map(product => <li>{product.name}</li>)
          }
            

        </ul>
        <Counter></Counter>
        <Users></Users>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name={nayoks[0]} job="Singer"></Person> 
        <Person name={nayoks[1]} job="Player"></Person> 
        <Person name={nayoks[2]} job="Hero"></Person> 
        
      </header>
    </div>
  );
}

/*
function Person(props) {
  var PersonStyle = {
    border:'1px solid red',
    margin:'0px 0px 20px 0px',
    padding:'20px'
  }
  return( 
  <div style={PersonStyle}>
    <h1>Name : {props.name}</h1>
  <h3>Name : {props.nayika}</h3>
  </div>
  );
}
*/
function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  
  return(
    <div>
      <h1>Count : {count} </h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))

  })
  return(
    <div>
      <h3>Dynamic User : {users.length}</h3>
      <ul>
      {
            users.map(user => <li>{user.name}</li>)
          }
      </ul>
    </div>
  )
}
function Product(props) {
 
  var productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backGroundColor:'lightgray',
    height:'300px',
    width:'400px',
    float:'left'
  }
  const {name, price} = props.product;
  console.log(name,price);
  return(
    <div style={productStyle}>
        <h3>Name : {name}</h3>
        <h1>Price : {price}</h1>
        <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  var PersonStyle = {
    border:'1px solid red',
    margin:'0px 0px 20px 0px',
    padding:'20px'
  }
  return(
    <div style={PersonStyle}>
      <h1>Name : {props.name}</h1>
      <h3>Job : {props.job}</h3>
    </div>
  );
}
export default App;
