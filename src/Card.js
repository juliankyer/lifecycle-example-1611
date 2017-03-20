import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = { title: this.props.title}
  }

  render() {
    const { title } = this.props

    return (
      <div>
        <p>Title: { title }</p>
        <p>Message: { this.props.message }</p>
      </div>
    )
  }
}

Card.defaultProps = {
  title: 'Default Title'
}

Card.propTypes = {
  title: React.PropTypes.string.isRequired,
  message: React.PropTypes.array,
  stuff: React.PropTypes.objectOf(React.PropTypes.number)
}
