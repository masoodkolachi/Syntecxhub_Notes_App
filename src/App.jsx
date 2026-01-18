import { useState, useEffect, useRef } from "react";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import "./App.css";

function App(){
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAdd = () => {
    if(!input.trim()) return;

    if(editIndex !== null){
      const updated = [...notes];
      updated[editIndex] = input;
      setNotes(updated);
      setEditIndex(null);
    } else {
      setNotes([...notes, input]);
    }

    setInput("");
    inputRef.current?.focus();
  };

  const handleEdit = (index) => {
    setInput(notes[index]);
    setEditIndex(index);
    inputRef.current?.focus();
  };

  const handleDelete = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return(
    <div className="container">
      <h1 className="title">Notes App</h1>

      <NoteInput
        input={input}
        setInput={setInput}
        handleAdd={handleAdd}
        inputRef={inputRef}
        isEditing={editIndex !== null}
      />

      <NotesList notes={notes} onEdit={handleEdit} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
