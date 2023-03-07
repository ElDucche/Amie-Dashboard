import React from 'react'

const Auth = () => {
  return (
    <form action="">
        <input type="text" name="User" id="user" placeholder='Utilisateur' />
        <input type="password" name='password' placeholder='Mot de passe'/>
        <button type="submit">Se connecter</button>
    </form>
  )
}

export default Auth