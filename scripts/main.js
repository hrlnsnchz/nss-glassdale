import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { OfficerList } from './officers/OfficerList.js'
import { NoteForm } from "./notes/NoteForm.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import "./notes/NoteList.js"
import { getAlibis } from "./alibis/AlibiProvider.js";
// import { ShowAlibisButton } from "./alibis/AlibiButton.js";

// getAlibis()
OfficerList()
ShowNoteButton()
NoteForm()
CriminalList()
ConvictionSelect()
OfficerSelect()
// ShowAlibisButton()
// saveNote()

