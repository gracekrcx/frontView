import Look from '../components/Look';
import Header from '../components/Header';

export default function Home() {

  return (
    <div className="container">
      <Look/>
      <Header/>
      <div>about</div>
    </div>
  )
}

// Home.Layout = Look