// function to check if local storage is supported by browser
function isLocalStorageSupported() {
  try {
    const testKey = "__test__"
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

// console.log(isLocalStorageSupported());

// JSON - Javascript Object Notation
// JSON is a lightweight data-interchange format
// It is text-based, human-readable, and language-independent
// JSON is used to transmit data between a server and a web application
// JSON is used to store data in a database
// JSON is used to transfer data between a server and a client
// JSON is used to store data in a file
// JSON is used to transfer data between a server and a mobile application
// JSON is used to store data in a cookie

/*{
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@mail.com",
  "hobbies": ["reading", "hiking", "photography"]
} */

// store data
function storeData(key, value) {
  localStorage.setItem(key, value);
  console.log(`Data stored successfully: ${key} - ${value}`);
}

storeData();
storeData("name", "Mai");


/* retrieve data */
function retrieveData(key) {
  const data = localStorage.getItem(key)
  console.log(`Retrieved data for key ${key}: `, data);
  return data;
}

console.log(retrieveData());
console.log(retrieveData("name")); //always in quotation marks


// remove data
function removeData(key) {
  localStorage.removeItem(key);
  console.log(`Data removed for key: ${key}`);
}
console.log(removeData());

// example usage
storeData("username",  "john_doe");
retrieveData("username");
removeData("username");

// with stringify and parse\
// store data
function storeData2(key, value) { //check if localStorage is supported
  if (!isLocalStorageSupported()) {
    console.log("Local storage is not supported in this browser");
    return;
  }
  const serializedValue = JSON.stringify(value);
  localStorage.setItem(key, serializedValue);
  console.log(`Data stored successfully ${key} - ${serializedValue}`);
}

console.log(storeData("age", 30));

// retrieve data -- could start with !isLocalStorageSupported
function retrievedData2(key) {
  const serializedValue = localStorage.getItem(key);
  if (serializedValue === null) {
    console.log(`No data found for key: ${key}`);
    return null;
  }
  const deserializedValue = JSON.parse(serializedValue);
  console.log(`Retrieved data for key ${key}: `, deserializedValue);
  return deserializedValue;
}

retrievedData2("age");
