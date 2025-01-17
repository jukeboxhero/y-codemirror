export const cmOrigin: "y-codemirror";
/**
 * A binding that binds a YText to a CodeMirror editor.
 *
 * @example
 *   const ytext = ydocument.define('codemirror', Y.Text)
 *   const editor = new CodeMirror(document.querySelector('#container'), {
 *     mode: 'javascript',
 *     lineNumbers: true
 *   })
 *   const binding = new CodemirrorBinding(ytext, editor)
 */
export class CodemirrorBinding extends Observable<any> {
    /**
     * @param {Y.Text} textType
     * @param {import('codemirror').Editor} codeMirror
     * @param {any | null} [awareness]
     * @param {{ yUndoManager?: Y.UndoManager }} [options]
     */
    constructor(textType: Y.Text, codeMirror: import('codemirror').Editor, awareness?: any | null, { yUndoManager }?: {
        yUndoManager?: Y.UndoManager;
    });
    doc: Y.Doc;
    type: Y.Text;
    cm: CodeMirror.Editor;
    cmDoc: CodeMirror.Doc;
    awareness: any;
    yUndoManager: Y.UndoManager;
    _onStackItemAdded: ({ stackItem, changedParentTypes }: {
        stackItem: any;
        changedParentTypes: any;
    }) => void;
    _onStackItemPopped: ({ stackItem }: {
        stackItem: any;
    }) => void;
    _mux: import("lib0/mutex").mutex;
    _typeObserver: (event: any) => void;
    _targetObserver: (instance: any, changes: any) => void;
    _cursors: Map<any, any>;
    _changedCursors: Set<any>;
    _debounceCursorEvent: (arg0: () => void) => void;
    _awarenessListener: (event: any) => void;
    _pendingCursorEvent: boolean;
    _cursorListener: () => void;
    _blurListeer: () => any;
    /**
     * @type {{ anchor: Y.RelativePosition, head: Y.RelativePosition } | null}
     */
    _beforeChangeSelection: {
        anchor: Y.RelativePosition;
        head: Y.RelativePosition;
    };
    _beforeChange: () => void;
}
export const CodeMirrorBinding: typeof CodemirrorBinding;
import { Observable } from "lib0/observable";
import * as Y from "yjs";
import CodeMirror from "codemirror";
