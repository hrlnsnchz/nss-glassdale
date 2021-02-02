import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { OfficerList } from './officers/OfficerList.js'
import { NoteForm } from "./notes/NoteForm.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import "./notes/NoteList.js";
import "./alibis/AlibiButton.js";
// import { getWitnesses } from "./witnesses/WitnessProvider.js";
import "./witnesses/WitnessButton.js";
import "./witnesses/WitnessList.js";
import { WitnessStatementsButton } from "./witnesses/WitnessButton.js";


WitnessStatementsButton()
OfficerList()
ShowNoteButton()
NoteForm()
CriminalList()
ConvictionSelect()
OfficerSelect()
// getWitnesses()
