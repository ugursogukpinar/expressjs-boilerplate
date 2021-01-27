const responseHelpers = async (req, res) => {
  res.ok = (data = null) => {
    res.status(200);
    return res.json({
      status: 'success',
      data
    });
  };

  res.error = (err, statusCode = 500) => {
    res.status(statusCode);
    return res.json({
      status: 'error',
      error: err
    });
  };

  return true;
};

module.exports = responseHelpers;
