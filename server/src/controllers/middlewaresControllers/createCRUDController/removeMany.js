const deleteMany = async (Model, req, res) => {
  // Find the document by id and delete it
  let updates = {
    removed: true,
  };

  const removingIds = req.body;

  const query = { _id: { $in: [...removingIds] } };

  const result = await Model.deleteMany(query);

  // If no results found, return document not found
  if (!result) {
    return res.status(404).json({
      success: false,
      result: null,
      message: 'No document found ',
    });
  } else {
    return res.status(200).json({
      success: true,
      result,
      message: 'Successfully Deleted the document ',
    });
  }
};

module.exports = deleteMany;
