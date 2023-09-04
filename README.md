# BookishBytes App ![image](https://github.com/Abdulnaser123/Book-Store/assets/108693961/4deb053b-74f6-426c-9e31-2a573d1493c5)


![image](https://github.com/Abdulnaser123/Book-Store/assets/108693961/8884e575-e3ec-4bcb-b97f-510865d21a45)

> Short Project Description


---

## Table of Contents

- [Features](#features)
- [Clone](#Clone)
- [Setup](#setup)

---

## Features

- Update Book Info
- Add Book To Favorite List
- Add New Book to bookstore
- Realtime Books Search
- Show Book Details
- Delete Book

---


### Clone

- Clone this repo to your local machine using `https://github.com/Abdulnaser123/Book-Store`


### Setup

- then start server-side app `npm run dev` after downloading node packages `npm install`
- Install ` ReactJs` json packages `npm i`
- start App `npm start`


### Adding a Book

```javascript
// Add a new book to the library
const newBook = {
  title: "Sample Book",
  authorId: 1,
  // ... other book details
};

// Call the addBook function from your redux actions
addBook(newBook);
```
### Updating a Book
```javascript
// Update an existing book
const updatedBook = {
  id: 1,
  title: "Updated Book Title",
  // ... other updated book details
};

// Call the updateBook function from your Redux actions
updateBook(updatedBook);
```

### Storing imgFile using Base64 Image Encoder


```javascript

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
```
![image](https://github.com/Abdulnaser123/Book-Store/assets/108693961/4deb053b-74f6-426c-9e31-2a573d1493c5)



### API
- Using this ready-made node server you can deal with all HTTP requests `GET, POST, DELETE, UPDATE`


