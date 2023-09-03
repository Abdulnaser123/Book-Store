// db.js
import { faker } from "@faker-js/faker";

function generateBooks() {
  let books = [];

  for (let id = 1; id <= 100; id++) {
    let title = faker?.word.noun(10);
    let author = faker.person.findName();
    let thumbnail = faker.image.url();
    let description = faker.lorem.paragraphs();
    let publisher = faker.company.companyName();
    let isbn = faker.string.uuid();

    books.push({
      id: id,
      title: title,
      author: author,
      thumbnail: thumbnail,
      description: description,
      publisher: publisher,
      isbn: isbn,
    });
  }

  return { books: books };
}

console.log(generateBooks());
