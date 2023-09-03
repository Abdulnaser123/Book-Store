// db.js
import { faker } from "@faker-js/faker";
import fs from "fs";

function generateBooks() {
  let books = [];

  for (let id = 1; id <= 1000; id++) {
    let title = faker?.word.noun(10);
    let author = faker.person.fullName();
    let thumbnail = faker.image.url();
    let description = faker.lorem.paragraphs();
    let publisher = faker.company.name();
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

fs.writeFileSync("output.json", JSON.stringify(generateBooks()));
