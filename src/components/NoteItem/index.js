// Write your code here
import {
  NoteItemContainer,
  NoteItemTitle,
  NoteItemDesc,
} from './styledComponents.js'

const NoteItem = props => {
  const {noteDetails} = props
  const {id, title, note} = noteDetails
  return (
    <NoteItemContainer>
      <NoteItemTitle>{title}</NoteItemTitle>
      <NoteItemDesc>{note}</NoteItemDesc>
    </NoteItemContainer>
  )
}

export default NoteItem
