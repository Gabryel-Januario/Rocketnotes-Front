import { FiPlus, FiX } from "react-icons/fi"

import { Container } from "./styles.js"

export function NoteItem({ isNew = false, value, onChange, onClick, ...rest }) {
  return (
    <Container $isnew={isNew.toString()}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        onChange={onChange}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
