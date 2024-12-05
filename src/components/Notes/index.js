// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  AppContainer,
  Heading,
  FormContainer,
  TitleInput,
  NotesTextArea,
  AddButton,
  NoNotesContainer,
  NotesEmptyImage,
  NoNotesHeading,
  NoNotesDesc,
  NotesListContainer,
} from './styledComponents.js'

import NoteItem from '../NoteItem/index'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNotesDesc] = useState('')
  const [notesList, setNotesList] = useState([])

  const changeTitle = event => {
    setTitle(event.target.value)
  }

  const changeNotesDesc = event => {
    setNotesDesc(event.target.value)
  }

  const onAddNotes = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNote])
    setTitle('')
    setNotesDesc('')
  }

  const renderNotesListContainer = () => {
    return (
      <NotesListContainer>
        {notesList.map(eachNote => (
          <NoteItem key={eachNote.id} noteDetails={eachNote} />
        ))}
      </NotesListContainer>
    )
  }

  const renderNoNotesContainer = () => {
    return (
      <NoNotesContainer>
        <NotesEmptyImage
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          alt="notes empty"
        ></NotesEmptyImage>
        <NoNotesHeading>No Notes Yet</NoNotesHeading>
        <NoNotesDesc>Notes you add will appear here</NoNotesDesc>
      </NoNotesContainer>
    )
  }

  return (
    <AppContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onAddNotes}>
        <TitleInput
          placeholder="Title"
          type="text"
          value={title}
          onChange={changeTitle}
        ></TitleInput>
        <NotesTextArea
          placeholder="Take a Note..."
          value={note}
          rows="6"
          onChange={changeNotesDesc}
        ></NotesTextArea>
        <AddButton type="submit">Add</AddButton>
      </FormContainer>
      {notesList.length > 0
        ? renderNotesListContainer()
        : renderNoNotesContainer()}
    </AppContainer>
  )
}

export default Notes
