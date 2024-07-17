import './App.css'
import { CarouselEffect } from './components/Carousel/CarouselEffect'
import { Category } from './components/Category/Category'
import { Header } from './components/Header/Header'
import { Products } from './components/Products/Products'


function App() {

  return (
    <>
     <Header />
     <CarouselEffect />
     <Category />
     <Products />
    </>
  )
}

export default App
