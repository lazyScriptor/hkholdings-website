import React from "react";
import TextEditor from "./TextEditor";
import TextEditorFrontend from "./TextEditorFrontend";
import SmallNavBar from "../../../components/SmallNavBar";


function MainTextEditorPage() {

  return (
    <div className="p-4 min-h-screen bg-brandDarkMaroon">
      <SmallNavBar />

      <TextEditor />
      {/* <TextEditorFrontend/> */}
    </div>
  );
}

export default MainTextEditorPage;
