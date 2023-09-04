/** @format */

export const handleImageChange = (setFormData, formData, e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64Image = e.target.result;
      setFormData({
        ...formData,
        imgSrc: base64Image,
      });
    };

    reader.readAsDataURL(file);
  }
  return file;
};
