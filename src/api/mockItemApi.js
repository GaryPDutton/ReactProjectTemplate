import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [
  {
    id: "computer-components",
    title: "Computer components",
    userId: "gary-dutton",
    category: "JavaScript"
  },
  {
    id: "a-blue-car",
    title: "A blue car",
    userId: "gary-dutton",
    category: "Software Practices"
  },
  {
    id: "a-shaggy-dog",
    title: "A shaggy dog",
    userId: "gary-dutton",
    category: "Software Architecture"
  },
  {
    id: "book-of-proverbs",
    title: "Book of proverbs",
    userId: "gary-dutton",
    category: "Career"
  },
  {
    id: "elvis-statue",
    title: "Elvis statue",
    userId: "gary-dutton",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (item) => {
  return replaceAll(item.title, ' ', '-');
};

class ItemApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static saveItem(item) {
    item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minItemTitleLength = 1;
        if (item.title.length < minItemTitleLength) {
          reject(`Title must be at least ${minItemTitleLength} characters.`);
        }

        if (item.id) {
          const existingItemIndex = items.findIndex(a => a.id == item.id);
          items.splice(existingItemIndex, 1, item);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new items in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          item.id = generateId(item);
          item.watchHref = `http://www.pluralsight.com/items/${item.id}`;
          items.push(item);
        }

        resolve(item);
      }, delay);
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToDelete = items.findIndex(item => {
          item.id == itemId;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ItemApi;