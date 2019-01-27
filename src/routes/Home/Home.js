import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Input } from 'antd'
import './home.css'
import { USER_SET_STATE } from "../../store/types"

export default
@connect(({ user }) => ({
  user
}))
class Home extends React.PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string
    }),
    dispatch: PropTypes.func.isRequired
  }

  handleUserNameChange = ({ target: { value } }) => {
    const { dispatch } = this.props
    dispatch({
      type: USER_SET_STATE,
      data: {
        name: value
      }
    })
  }

  render() {
    const {
      user: {
        name
      }
    } = this.props
    return (
      <div className="container">
        <div className="children">Hello world! My name is { name }.</div>
        <Input
          value={name}
          onChange={this.handleUserNameChange}
        />
      </div>
    )
  }
}
