import NoteItem from "./NoteItem";

function NotesList({notes, onEdit, onDelete}){
  return(
    <ul className="list">
      {notes.map((note, index) =>(
        <NoteItem
          key={index}
          note={note}
          index={index}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default NotesList;
