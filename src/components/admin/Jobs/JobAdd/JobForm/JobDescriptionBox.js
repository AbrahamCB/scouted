import { EditorState } from "draft-js";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function App() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    console.log(editorState)
    // useEffect(() => {
    //     console.log(editorState);
    // }, [editorState]);
    return (
        <div>

            <h2>Job Description</h2>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />
            </div>
        </div>
    );
}