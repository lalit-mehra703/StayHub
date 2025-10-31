🏡 StayHub — Your Perfect Stay Awaits

StayHub is a full-stack web application inspired by Airbnb.
It allows users to explore various stays, view detailed property information, and share their own listings.
The project focuses on simplicity, clean UI, and robust backend features for an authentic rental experience.

🚀 Features

•🏠 Create, Edit & Delete Listings — Users can post new properties with images, descriptions, and prices.

•🌍 Interactive Map Integration — Each listing includes a location map using Mapbox API.

•💬 Reviews & Ratings — Visitors can leave reviews and rate listings to help others.

•🔐 User Authentication — Secure login and registration using Passport.js.

•☁️ Image Uploads — Supports image storage via Cloudinary.

•⚙️ Session & Flash Messages — Enhanced user experience using Express-session and Connect-flash.

•📱 Responsive Design — Works smoothly across all devices.

•🧰 Tech Stack

Frontend:

•HTML, CSS, JavaScript, EJS

Backend:

•Node.js, Express.js

Database:

•MongoDB (with Mongoose ORM)

APIs & Services:

•Mapbox (for map visualization)

•Cloudinary (for image upload and management)

Deployment:

•Render (for hosting the web app)

•MongoDB Atlas (for cloud database)

🧑‍💻 How It Works

1.Home Page: Displays all available listings.

2.Add Listing: Logged-in users can post new properties with location, images, and pricing.

3.Listing Details: Each property has a dedicated page with photos, reviews, and map location.

4.Review System: Users can rate and review listings.

5.Authentication: Only registered users can manage listings and reviews.

⚙️ Installation (Local Setup)

1.Clone the repository:

git clone https://github.com/your-username/stayhub.git
cd stayhub


2.Install dependencies:

npm install


3.Create a .env file in the root directory:

MAPBOX_TOKEN=your_mapbox_token
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MONGO_URL=your_mongodb_url
SECRET=your_secret_key


4.Run the application:

node app.js


or

npm start


5.Visit:

http://localhost:3000

🌟 Live Demo

🔗 Check it out here: https://stayhub-renr.onrender.com

🤝 Contributing

Feel free to fork this repository, make improvements, and open a pull request!
Suggestions and feedback are always welcome 🙌

📜 License

This project is licensed under the MIT License.
