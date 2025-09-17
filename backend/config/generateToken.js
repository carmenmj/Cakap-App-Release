const jwt = require("jsonwebtoken");

// Function to generate a token for a user based on their ID
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};


// export the function to use in other files
module.exports = generateToken;
