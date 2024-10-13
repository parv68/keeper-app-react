import { useState } from 'react'
import CreatArea from './CreatArea'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'

function App() {
  const [notes, setNotes] = useState(0)

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }
  function deleteItem(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <>
      <div>
        <Header />
        <CreatArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.title}
            onDelete={deleteItem}
            />
          )
        })}
        <Footer />
      </div>
    </>
  )
}

export default App
