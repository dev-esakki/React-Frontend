import React from 'react'
import * as toastr from './NotifyContext'

const AuthContext = React.createContext()

class AuthProvider extends React.Component {
  
  constructor() {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.state = { 
      isAuth: !!localStorage.getItem('userID')
    }

  }
  

  login() {
    setTimeout(() => this.setState({ isAuth: !!localStorage.getItem('userID') }), 1000)
  }

  logout() {
      localStorage.removeItem('userID');
     this.setState({ isAuth: !!localStorage.getItem('userID') })
     toastr.success('LoggedOut Successfully') 
  }


  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
