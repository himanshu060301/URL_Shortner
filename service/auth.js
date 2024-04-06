const jwt =require("jsonwebtoken");

const SECRET=process.env.SECRET;

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    SECRET
  );
}

function getUser(token) {
  if(!token) return null;

  try{
    return jwt.verify(token,SECRET);
  }catch(error){
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};