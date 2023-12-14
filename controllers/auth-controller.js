const Product = require("../models/auth-models");
const home = async (req, res) => {
  try {
    let queryObject = {};

    const { company, name, featured, sort, select, page } = req.query;

    if (company) {
      queryObject.company = company;
    }

    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }

    if (featured) {
      queryObject.featured = featured;
    }

    let apiData = Product.find(queryObject);

    if (sort) {
      //   let sortFix = sort.replace(",", " ");
      let sortFix = sort.split(",").join(" ");
      apiData = apiData.sort(sortFix);
    }

    if (select) {
      //   let selectFix = select.replaceAll(",", " ");
      let selectFix = select.split(",").join(" ");
      apiData = apiData.select(selectFix);
    }

    if (page) {
      let page = Number(req.query.page) || 1;
      let limit = Number(req.query.limit) || 10;

      let skip = (page - 1) * limit;

      apiData = apiData.skip(skip).limit(limit);
    }
    const products = await apiData;
    res.status(200).json({ products, total: products.length });
  } catch (error) {
    console.log("Internal Server Error", error);
  }
};

const testing = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({ products, total: products.length });
  } catch (error) {
    console.log("Internal Server Error", error);
  }
};

module.exports = { home, testing };
