// Define the interface for the Book

import { HydratedDocument, Model } from "mongoose";

export interface IBook {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  rating: number;
  price: string|number;
  publisher: {
    name: string;
    location: string;
  };
  reviews: {
    username: string;
    comment: string;
  }[];
}

// define the stastic model for static methods
export interface BookModel extends Model<IBook, {}> {
  getFeature(): Promise<HydratedDocument<IBook>>;
}
