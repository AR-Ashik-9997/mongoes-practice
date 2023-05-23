import { Schema, model } from "mongoose";
import { BookModel, IBook } from "./book.interface";

// Define the schema for the Book collection and static methods

const bookSchema = new Schema<IBook, BookModel>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: [String],
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Schema.Types.Mixed,
    required: true,
  },
  publisher: {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});

// using static method for book collections
bookSchema.static("getFeature", async function getAdminUsers() {
  const featuredBooks = await this.aggregate([
    {
      $addFields: {
        featured: {
          $cond: [
            { $gte: ["$rating", 4.5] },
            "BestSeller",
            {
              $cond: [{ $gte: ["$rating", 4] }, "Popular", "No Feature"],
            },
          ],
        },
      },
    },
  ]);

  return featuredBooks;
});

// Create the Book model
const Book = model<IBook, BookModel>("Book", bookSchema);

export default Book;
