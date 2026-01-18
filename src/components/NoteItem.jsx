function NoteItem({note, index, onEdit, onDelete }){
  return(
    <li className="list-item">
      {note}
      <div className="actions">
        <button className="btn edit-btn" onClick={() => onEdit(index)}>
          Edit
        </button>

        <button className="btn delete-btn" onClick={() => onDelete(index)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default NoteItem;
