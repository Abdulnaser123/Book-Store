/** @format */

export const validateForm = (setErrors, formData) => {
  const newErrors = {};

  if (!formData.title || formData.title.length > 25) {
    newErrors.title = "Title is required, max 25 characters.";
  }

  if (formData.authorId === "") {
    newErrors.authorId = "Author is required.";
  }

  if (formData.description && formData.description.length > 255) {
    newErrors.description = "Description exceeds 255 characters.";
  }

  if (formData.tags.length === 0) {
    newErrors.tags = "At least one tag should be added.";
  }

  setErrors(newErrors);
  return newErrors;
};
