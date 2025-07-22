import React from 'react'

class GreetingClassBased extends React.Component {
  render() {
    console.log(this.props)
    const name = this.props.sName
    return <h1>Hello {name}</h1>
  }
}

export default GreetingClassBased