module.exports = {
  createProduct: (req, res, next) => {
    const dbInstance = req.app.post("db");
    const { name, price } = req.body;

    dbInstance.create_product([name, price]).then(product => {
      res
        .status(200)
        .send()
        .catch(() => {
          res.status(500).send();
        });
    });
  },

  readProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;
    console.log([params.id]);
    dbInstance
      .read_product([params.id])
      .then(product => {
        res.status(200).send(product);
      })
      .catch(() => res.status(500).send());
  },

  editProduct: (req, res, next) => {
    const dbInstance = req.app.update("db");
    const { params, name, price } = req;

    dbInstance
      .update_product([params.id, name, price])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },

  removeProduct: (req, res, next) => {
    const dbInstance = req.app.delete("db");
    const { params } = req;

    dbInstance
      .remove_products([params.id])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  }
};
