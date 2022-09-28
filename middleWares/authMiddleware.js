const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
      const token = req.headers["authorization"].split(" ")[1];
      if(!token){
        return res.status(401).send({message: 'Access denied. No token provided.' , success: false});
      } 
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.body.employeeId = decoded.employeeId;
      next();
    } catch (error) {
        return res.status(500).send({message: 'Access denied. Invalid token.' , success: false});
    }
  };