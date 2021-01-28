const IndexController = {
  helloWorld: async (req) => {
    const { name } = req.inputs;

    return {
      message: `Hello, ${name}!`
    };
  }
};

module.exports = IndexController;
