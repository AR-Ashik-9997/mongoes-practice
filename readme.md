## 1. What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

Creating a model with an interface and schema in MongoDB serves several purposes such as

- Structure and Validation: MongoDB is a schema-less NoSQL database, meaning it does not enforce a fixed structure for documents. However, defining a schema for your data using a model helps add structure and enforce validation rules.

- Data Integrity: By defining a schema, you can enforce data integrity rules such as required fields, unique values, and data type constraints. How does it help in defining the structure of a collection?

- Improved Development Experience: Creating a model with an interface in MongoDB provides an allowing you to work with objects that have predefined properties and methods. It enhances the development experience by providing a clear and consistent way to interact with your data.

- Code Reusability: Models in MongoDB facilitate code reusability. it can be define reusable models that can be shared across different parts of your application. This helps in maintaining consistency and reduces code duplication.

- Documentation and Communication: A well-defined model with a clear schema acts as a form of documentation. It helps communicate the structure and requirements of your data to other developers working on the project.

### defining the structure of a collection

- Collections in Mongo are equivalent to tables in relational databases. They can hold multiple JSON documents.

- Documents are equivalent to records or rows of data in SQL. While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.

- Fields, also known as properties or attributes, are similar to columns in a SQL table. In the image above, FirstName, LastName, Email, and Phone are all fields.

- Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose schema is a document data structure (or shape of the document) that is enforced via the application layer.

- SchemaTypes define the expected data type for individual fields (String, Number, Boolean, and so on).

- Models are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.

## 2. Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

The projection parameter is an optional argument that you can provide to the find() method or any other query operation in MongoDB. It allows you to define a document that specifies which fields to include or exclude.

- To include specific fields in the returned documents, you use the inclusion projection. In the projection document, you specify the field names you want to include and set their values.

```
db.collection.find({}, { field1: 1, field2: 1 })

```

In this example, the query will return documents with only the field1 and field2 included. All other fields will be excluded.

To exclude specific fields from the returned documents, you use the exclusion projection. In the projection document, you specify the field names you want to exclude and set their values to 0. For example:

```
db.collection.find({}, { field3: 0, field4: 0 })

```

In this case, the query will return documents with all fields except field3 and field4.

It's important to note that the \_id field is returned by default unless explicitly excluded. If you want to exclude the \_id field, you need to set its value to 0 in the projection:

```
db.collection.find({}, { _id: 0, field1: 1, field2: 1 })

```

In this example, the query will return documents with only field1 and field2, and the \_id field will be excluded.

## 3. What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

Instance methods in MongoDB models are typically defined using the Mongoose library.Mongoose Schemas Instance methods refer to the methods used by Mongoose documents. These methods can be both, built-in and custom.

```
const mongoose = require('mongoose');

// Define a schema for the 'User' collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

//instance methods
export interface IUserMethods {
  fullName(): string;
}

```

## 4. How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

`$ne` (not equal):
The $ne operator selects documents where the value of a field is not equal to the specified value.

```
db.collection.find({ status: { $ne: "completed" } })

```

`gt` (greater than):
The $gt operator selects documents where the value of a field is greater than the specified value.

```
db.collection.find({ price: { $gt: 100 } })
```

`$lt` (less than):
The $lt operator selects documents where the value of a field is less than the specified value.

```
db.collection.find({ rating: { $lt: 4.5 } })
```

`$gte` (greater than or equal to):
The $gte operator selects documents where the value of a field is greater than or equal to the specified value.

```
db.collection.find({ quantity: { $gte: 10 } })
```

`$lte` (less than or equal to):
The $lte operator selects documents where the value of a field is less than or equal to the specified value.

```
db.collection.find({ age: { $lte: 30 } })
```

## 5. What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

`$in` operator:
The $in operator selects documents where the value of a field matches any value in a specified array.

```
db.collection.find({ status: { $in: ["completed", "in progress"] } })
```

`$nin` operator:
The $nin operator selects documents where the value of a field does not match any value in a specified array.

```
db.collection.find({ category: { $nin: ["electronics", "clothing"] } })
```

## 6. Explain the logical operators "$and," "$or," "$not," and "$nor" in MongoDB queries. Provide examples to demonstrate their usage.

- "$and" operator performs a logical AND operation on an array of expressions, matching documents that satisfy all of the specified conditions.

```
db.products.find({
  $and: [
    { price: { $gt: 10 } },
    { quantity: { $lt: 5 } }
  ]
});
```

- "$or" operator performs a logical OR operation on an array of expressions, matching documents that satisfy at least one of the specified conditions.

```
db.products.find({
  $or: [
    { price: { $lt: 5 } },
    { quantity: { $gt: 20 } }
  ]
});
```

- "$not" operator performs a logical NOT operation on a specified expression, matching documents that do not satisfy the condition.

```
db.products.find({
  category: {
    $not: {
      $eq: "Electronics"
    }
  }
});

```

- "$nor" operator performs a logical NOR operation on an array of expressions, matching documents that do not satisfy any of the specified conditions.

```
db.products.find({
  $nor: [
    { category: "Electronics" },
    { quantity: { $lt: 10 } }
  ]
});
```

## 7. What is the difference between the "explicit" and "implicit" "$and" operations in MongoDB? How does each behave when combining multiple conditions?

Explicit "$and" operator: explicitly include the "$and" operator in query and provide an array of conditions as its value. Each condition in the array represents a separate expression that must be satisfied for a document to match the query. Here's an example:

```
db.collection.find({
  $and: [
    { condition1 },
    { condition2 },
    { condition3 }
  ]
});
```

Implicit "$and" operator:provide multiple conditions directly as separate key-value pairs in your query. MongoDB implicitly treats these conditions as if they were combined using the "$and" operator. Here's an example:

```
db.collection.find({
  condition1,
  condition2,
  condition3
});
```

## 8. How do you use the "$exists" operator in MongoDB to check if a field exists or not in a document? Provide an example.

Suppose we have a collection called "users" with documents representing user profiles. Each document has fields like "name", "email", and "age". We want to find all the users who have an "email" field in their profile.

```
db.users.find({ email: { $exists: true } })
```

## 9. What is the purpose of the "$type" operator in MongoDB? How can you use it to match documents based on the data type of a field?

The "$type" operator in MongoDB is used to match documents based on the data type of a field. It allows you to perform queries that filter documents by the type of data stored in a specific field.

```
{ field: { $type: <type> } }
```

## 10 . Explain the use of the "$size" operator in MongoDB. How does it work when querying documents based on the size of an array field?

Suppose we have a collection called "books" with documents representing books. Each book document has an "authors" field, which is an array containing the names of the book's authors. We want to find all the books that have exactly two authors.

```
db.books.find({ authors: { $size: 2 } })

```

In this example, the query { authors: { $size: 2 } } matches documents in the "books" collection where the "authors" field is an array with exactly two elements.
