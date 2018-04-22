export const UPDATE_PREVIEW = 'UPDATE_PREVIEW';

export function updatePreview() {
  const markdownInput = document.getElementById('editor').value;

  return {
    type: UPDATE_PREVIEW,
    payload: markdownInput,
  };
}
