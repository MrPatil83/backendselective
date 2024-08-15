const Contactdata = require("../Models/user");

const handelPostData = async (req, res) => {
  const { name, email, whatsappNo, message } = req.body;

  if (!name || !email || !whatsappNo || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  

  try {
    const result = await Contactdata.create({
      name,
      email,
      whatsappNo,
      message,
    });

    console.log(result);
    return res.status(201).json({ message: "Data Submitted Successfully", data: result });
  } catch (error) {
    console.error("Error submitting data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { handelPostData }; // Ensure it's exported as an object
