import React from 'react';

class Child extends React.Component {
constructor () {
  super()
  console.log('constructor()')
}
componentWillMount(){
  console.log('componentWillMount()')
}
componentDidMount(){
  console.log('componentDidMount()')
}
  render(){
    console.log('render()')
    return(
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}



export default Child;
