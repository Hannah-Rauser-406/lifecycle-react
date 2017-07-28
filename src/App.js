import React from 'react';
import Child from './Child';

class test extends React.Component {
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
        <Child />
      </div>
    )
  }
}



export default test;
