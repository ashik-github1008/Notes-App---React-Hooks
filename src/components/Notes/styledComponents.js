// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px;
`
export const Heading = styled.h1`
  color: #4c63b6;
  font-family: "Bree Serif";
  font-size: 48px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 58px;
`
export const FormContainer = styled.form`
  padding: 18px;
  display: flex;
  flex-direction: column;
  width: 55%;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  margin-bottom: 46px;
`
export const TitleInput = styled.input`
  cursor: pointer;
  outline: none;
  border: none;
  color: #1e293b;
  font-weight: 500;
  font-family: "Roboto";
  margin-bottom: 34px;
`
export const NotesTextArea = styled.textarea`
  cursor: pointer;
  outline: none;
  border: none;
  color: #475569;
  font-family: "Roboto";
  margin-bottom: 12px;
`
export const AddButton = styled.button`
  font-family: "Roboto";
  background-color: #4c63b6;
  color: #ffffff;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  // padding: 18px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 22px;
  padding-right: 22px;
  align-self: flex-end;
`
export const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NotesEmptyImage = styled.img`
  width: 120px;
  height: 120px;
`
export const NoNotesHeading = styled.h1`
  color: #334155;
  font-weight: 500;
  font-family: "Roboto";
  font-size: 24px;
`
export const NoNotesDesc = styled.p`
  color: #475569;
  font-family: "Roboto";
  font-size: 15px;
`
export const NotesListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
  max-width: 55%;
  min-width: 55%
`
