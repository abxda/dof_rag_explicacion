
export interface ScriptConcept {
  id: string;
  name: string;
  explanation: string;
}

export interface InteractiveCodeSegment {
  id: string;
  label: string; // Short description for the segment
  matcher: RegExp; // RegExp to find the line/block in the code
  explanation: string;
  relatedConceptIds?: string[];
}

export interface ScriptData {
  id: string;
  title: string;
  generalPurpose: string;
  detailedExplanation: string;
  keyConcepts: ScriptConcept[];
  sourceCode: string;
  interactiveSegments?: InteractiveCodeSegment[];
}

// ProcessedScriptData might be identical to ScriptData if no further processing is needed
// For now, let's assume constants.ts provides data in the final desired structure for ScriptData.
export type ProcessedScriptData = ScriptData;
