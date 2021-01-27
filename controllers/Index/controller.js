const IndexController = {
  helloWorld: async (req, res) => {
    const { name } = req.inputs;
    return res.ok({
      message: `Hello, ${name}!`
    });
  }
};

module.exports = IndexController;
