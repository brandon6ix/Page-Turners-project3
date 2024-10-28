const mongoose = require('mongoose');
const Book = require('../models/Book');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const seedBooks = async () => {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel about the American dream...",
      price: 10.99,
      stock: 50,
      image: "/images/TheGreatGatsby.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about racial injustice...",
      price: 12.99,
      stock: 40,
      image: "/images/ToKillAMockingbird.jpg",
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel set in a totalitarian society under constant surveillance.",
      price: 15.99,
      stock: 35,
      image: "/images/1984.jpg",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A classic novel that explores themes of love, class, and societal expectations.",
      price: 9.99,
      stock: 45,
      image: "/images/PrideAndPrejudice.jpg",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description: "A novel about teenage rebellion and alienation told through the voice of Holden Caulfield.",
      price: 11.99,
      stock: 30,
      image: "/images/TheCatcherInTheRye.jpg",
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      description: "A whaling voyage narrative exploring obsession, revenge, and the human condition.",
      price: 14.99,
      stock: 25,
      image: "/images/MobyDick.jpg",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "A fantasy novel about the journey of Bilbo Baggins, who sets out on an adventure to win treasure guarded by a dragon.",
      price: 13.99,
      stock: 55,
      image: "/images/TheHobbit.jpg",
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      description: "A historical epic set during the Napoleonic wars, exploring Russian society, love, and war.",
      price: 19.99,
      stock: 20,
      image: "/images/WarAndPeace.jpg",
    }
  ];

  try {
    await Book.insertMany(books);
    console.log('Books added to the database!');
  } catch (error) {
    console.error('Error inserting books:', error);
  } finally {
    mongoose.connection.close();
  }
};

connectDB().then(seedBooks);
