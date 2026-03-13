import Header from "./components/Header"
import BookList from "./components/BookList"
import ContactCard from "./components/ContactCard"
import Accordion from "./components/Accordion"
import './App.css'
function App() {
  return (
    <>
      <Header />
      <BookList />
      <ContactCard
    name="Azikiwe favour"
      job="Frontend Developer"
      email="favouromovighoazikiwe@gmail.com" />
      <Accordion />
    
    </>
  )
}

export default App