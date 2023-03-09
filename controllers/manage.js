const Creds = require("../models/passwordManager");

exports.addCreds = async (req, res, next) => {
  const {
    title,
    creds: { user, password, author },
  } = req.body;
  try {
    const creds = await Creds.find({ title: title });
    let newCreds;
    if (creds.length === 0) {
      const obj = {
        title,
        entries: [
          {
            user,
            password,
            author,
          },
        ],
      };
      newCreds = new Creds(obj);
      await newCreds.save();
    } else {
      creds[0].entries.push({ user, password, author });
      newCreds = await creds[0].save();
    }
    res
      .status(201)
      .json({ message: "Creds added successfully", data: newCreds });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Adding creds failed!", error });
  }
};

exports.getCreds = async (req, res, next) => {
  const { title, email, user } = req.params;
  try {
    credsData = await Creds.findOne({
      title,
    });

    let filteredEntries = [];

    if (credsData !== null) {
      if (user !== "null") {
        filteredEntries = credsData.entries.filter(
          (entry) => entry.user === user && entry.author === email
        );
      } else {
        filteredEntries = credsData.entries.filter(
          (entry) => entry.author === email
        );
      }
    }
    res
      .status(200)
      .json({ message: "Creds fetched successfully!", data: filteredEntries });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!", error });
  }
};
