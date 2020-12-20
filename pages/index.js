import { setCookie } from '../src/utils/cookie';
import Router from 'next/router';

export default function Home() {

  const handleClick = () => {
    setCookie('user', JSON.stringify({ name: "tanakorn karode" }))
    Router.push('/home');
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}