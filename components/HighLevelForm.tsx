// HighLevelForm was a heavy iframe embed (550KB+ third-party script).
// Replaced with the lightweight ContactForm that POSTs JSON to a Netlify
// function which forwards to the GHL webhook. Same prop shape — every
// existing page-level import continues to render the new form.
export { ContactForm as HighLevelForm } from "./ContactForm";
