const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

// MiddeleWear
app.use(cors());
app.use(express.json());

// mongodb
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://BillManegement:bZiZORRqTlW565OD@mahdi.ow7tc2p.mongodb.net/?appName=Mahdi";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
app.get("/", (req, res) => {
  res.send("Hello Assignment!");
});

async function run() {
  try {

    // create collection mongodb
    const bills = client.db("Bill-Manegment");
    const billcollection = bills.collection("Bills");

    await client.db("admin").command({ ping: 1 });
    console.log("database con..");
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Unsplash, freepik, pexels
// [
//   {
//     "title": "অক্টোবর মাসের বিদ্যুতের বিল",
//     "category": "Electricity",
//     "email": "creator1@example.com",
//     "location": "Mirpur-10, Dhaka",
//     "description": "অক্টোবর মাসের মোট ২৩০ ইউনিট ব্যবহারের বিল।",
//     "image": "https://i.ibb.co.com/tpwpFkbJ/lightning-storm-with-lightning-bolt-background.jpg",
//     "date": "2025-10-26",
//     "amount": 260
//   },
//   {
//     "title": "পাইপলাইন গ্যাসের নিয়মিত বিল",
//     "category": "Gas",
//     "email": "creator2@example.com",
//     "location": "Dhanmondi, Dhaka",
//     "description": "নভেম্বর মাসের জন্য নির্ধারিত গ্যাসের মাসিক বিল।",
//     "image": "https://i.ibb.co.com/JRR1rhZ4/blue-flame-desktop-wallpaper-realistic-fire-image.jpg",
//     "date": "2025-11-15",
//     "amount": 850
//   },
//   {
//     "title": "সেপ্টেম্বরের ইন্টারনেট সার্ভিস চার্জ",
//     "category": "Internet",
//     "email": "creator3@example.com",
//     "location": "Gulshan-1, Dhaka",
//     "description": "১০০ Mbps গতির মাসিক ইন্টারনেট প্যাকেজের বিল।",
//     "image": "https://i.ibb.co.com/B5CWZ3X3/rm373batch2-04.jpg",
//     "date": "2025-09-05",
//     "amount": 1200
//   },
//   {
//     "title": "অক্টোবর মাসের আবাসিক পানির বিল",
//     "category": "Water",
//     "email": "creator4@example.com",
//     "location": "Khilgaon, Dhaka",
//     "description": "স্বাভাবিক ব্যবহারের জন্য ওয়াসার নির্ধারিত বিল।",
//     "image": "https://i.ibb.co.com/MkD5xkMY/ai-generated-water-picture.jpg",
//     "date": "2025-10-18",
//     "amount": 450
//   },
//   {
//     "title": "নভেম্বর মাসের দ্রুতগতির ইন্টারনেট প্যাকেজ",
//     "category": "Internet",
//     "email": "creator5@example.com",
//     "location": "Uttara Sector 7",
//     "description": "নতুন সংযোগের সাথে উচ্চ গতির ইন্টারনেট প্যাকেজ।",
//     "image": "https://i.ibb.co.com/B5CWZ3X3/rm373batch2-04.jpg",
//     "date": "2025-11-01",
//     "amount": 1500
//   },
//   {
//     "title": "আগস্ট মাসের বর্ধিত গ্যাস ব্যবহার বিল",
//     "category": "Gas",
//     "email": "creator6@example.com",
//     "location": "Mohammadpur, Dhaka",
//     "description": "শীতকালে গ্যাসের অতিরিক্ত ব্যবহারের জন্য বিল বৃদ্ধি।",
//     "image": "https://i.ibb.co.com/JRR1rhZ4/blue-flame-desktop-wallpaper-realistic-fire-image.jpg",
//     "date": "2025-08-20",
//     "amount": 920
//   },
//   {
//     "title": "নভেম্বর মাসের বিদ্যুৎ সাশ্রয় বিল",
//     "category": "Electricity",
//     "email": "creator7@example.com",
//     "location": "Bashundhara R/A, Dhaka",
//     "description": "গৃহস্থালির কাজে কম বিদ্যুৎ ব্যবহারের জন্য বিল কম এসেছে।",
//     "image": "https://i.ibb.co.com/tpwpFkbJ/lightning-storm-with-lightning-bolt-background.jpg",
//     "date": "2025-11-28",
//     "amount": 380
//   },
//   {
//     "title": "অক্টোবর মাসের ওয়াটার পাম্প রক্ষণাবেক্ষণ চার্জ",
//     "category": "Water",
//     "email": "creator8@example.com",
//     "location": "Narayanganj Sadar",
//     "description": "ভবনের সাধারণ ওয়াটার পাম্প মেরামতের খরচ।",
//     "image": "https://i.ibb.co.com/MkD5xkMY/ai-generated-water-picture.jpg",
//     "date": "2025-10-02",
//     "amount": 550
//   }
// ]
