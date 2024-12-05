// Style your elements here
import styled from 'styled-components'

export const NoteItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  padding: 12px;
  margin-right: 6px;
`
export const NoteItemTitle = styled.h1`
  color: #1e293b;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 4px;
`
export const NoteItemDesc = styled.p`
  color: #475569;
  font-family: "Roboto";
  font-size: 15px;
  max-width: 238px;
`
