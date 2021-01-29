import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { OfficerList } from './officers/OfficerList.js'
import { NoteForm } from "./notes/NoteForm.js";
import { saveNote } from "./notes/NoteProvider.js";

NoteForm()
CriminalList()
ConvictionSelect()
OfficerSelect()
OfficerList()
// saveNote()

