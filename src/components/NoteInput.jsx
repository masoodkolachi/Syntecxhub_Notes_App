function NoteInput({input, setInput, handleAdd, inputRef, isEditing}){
  return(
    <div className="input-area">
      <textarea
        ref={inputRef}
        type="text"
        placeholder="Write your note..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input"
      />

      <button className="btn add-btn" onClick={handleAdd}>
        {isEditing ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default NoteInput;
