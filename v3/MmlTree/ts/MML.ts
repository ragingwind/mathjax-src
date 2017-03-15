import {MmlNodeClass, TextNode, XMLNode} from './MmlNode.js';

import {MmlMath}      from './MmlNodes/math.js';

import {MmlMi}        from './MmlNodes/mi.js';
import {MmlMn}        from './MmlNodes/mn.js';
import {MmlMo}        from './MmlNodes/mo.js';
import {MmlMtext}     from './MmlNodes/mtext.js';
import {MmlMspace}    from './MmlNodes/mspace.js';
import {MmlMs}        from './MmlNodes/ms.js';

import {MmlMrow, MmlInferredMrow} from './MmlNodes/mrow.js';
import {MmlMfrac}     from './MmlNodes/mfrac.js';
import {MmlMsqrt}     from './MmlNodes/msqrt.js';
import {MmlMroot}     from './MmlNodes/mroot.js';
import {MmlMstyle}    from './MmlNodes/mstyle.js';
import {MmlMerror}    from './MmlNodes/merror.js';
import {MmlMpadded}   from './MmlNodes/mpadded.js';
import {MmlMphantom}  from './MmlNodes/mphantom.js';
import {MmlMfenced}   from './MmlNodes/mfenced.js';
import {MmlMenclose}  from './MmlNodes/menclose.js';

import {MmlMaction}   from './MmlNodes/maction.js';

import {MmlMsubsup, MmlMsub, MmlMsup}       from './MmlNodes/msubsup.js';
import {MmlMunderover, MmlMunder, MmlMover} from './MmlNodes/munderover.js';
import {MmlMmultiscripts, MmlMprescripts, MmlNone} from './MmlNodes/mmultiscripts.js';

import {MmlMtable}      from './MmlNodes/mtable.js';
import {MmlMtr, MmlMlabeledtr} from './MmlNodes/mtr.js';
import {MmlMtd}         from './MmlNodes/mtd.js';
import {MmlMaligngroup} from './MmlNodes/maligngroup.js';
import {MmlMalignmark}  from './MmlNodes/malignmark.js';

import {MmlSemantics, MmlAnnotation, MmlAnnotationXML} from './MmlNodes/semantics.js';

import {TeXAtom} from './MmlNodes/TeXAtom.js';


export let MML: {[kind: string]: MmlNodeClass} = {
    [MmlMath.prototype.kind]: MmlMath,

    [MmlMi.prototype.kind]: MmlMi,
    [MmlMn.prototype.kind]: MmlMn,
    [MmlMo.prototype.kind]: MmlMo,
    [MmlMtext.prototype.kind]: MmlMtext,
    [MmlMspace.prototype.kind]: MmlMspace,
    [MmlMs.prototype.kind]: MmlMs,

    [MmlMrow.prototype.kind]: MmlMrow,
    [MmlInferredMrow.prototype.kind]: MmlInferredMrow,
    [MmlMfrac.prototype.kind]: MmlMfrac,
    [MmlMsqrt.prototype.kind]: MmlMsqrt,
    [MmlMroot.prototype.kind]: MmlMroot,
    [MmlMstyle.prototype.kind]: MmlMstyle,
    [MmlMerror.prototype.kind]: MmlMerror,
    [MmlMpadded.prototype.kind]: MmlMpadded,
    [MmlMphantom.prototype.kind]: MmlMphantom,
    [MmlMfenced.prototype.kind]: MmlMfenced,
    [MmlMenclose.prototype.kind]: MmlMenclose,

    [MmlMaction.prototype.kind]: MmlMaction,

    [MmlMsub.prototype.kind]: MmlMsub,
    [MmlMsup.prototype.kind]: MmlMsup,
    [MmlMsubsup.prototype.kind]: MmlMsubsup,
    [MmlMunder.prototype.kind]: MmlMunder,
    [MmlMover.prototype.kind]: MmlMover,
    [MmlMunderover.prototype.kind]: MmlMunderover,
    [MmlMmultiscripts.prototype.kind]: MmlMmultiscripts,
    [MmlMprescripts.prototype.kind]: MmlMprescripts,
    [MmlNone.prototype.kind]: MmlNone,

    [MmlMtable.prototype.kind]: MmlMtable,
    [MmlMlabeledtr.prototype.kind]: MmlMlabeledtr,
    [MmlMtr.prototype.kind]: MmlMtr,
    [MmlMtd.prototype.kind]: MmlMtd,
    [MmlMaligngroup.prototype.kind]: MmlMaligngroup,
    [MmlMalignmark.prototype.kind]: MmlMalignmark,

    [MmlSemantics.prototype.kind]: MmlSemantics,
    [MmlAnnotation.prototype.kind]: MmlAnnotation,
    [MmlAnnotationXML.prototype.kind]: MmlAnnotationXML,

    [TeXAtom.prototype.kind]: TeXAtom,

    [TextNode.prototype.kind]: TextNode,
    [XMLNode.prototype.kind]: XMLNode
};
