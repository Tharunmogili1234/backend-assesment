const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
  res.json(cart);
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = await Cart.create({ userId: req.user.id, items: [] });

  const item = cart.items.find(i => i.productId == productId);
  if (item) item.quantity += quantity;
  else cart.items.push({ productId, quantity });

  await cart.save();
  res.json(cart);
};

exports.removeFromCart = async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user.id });
  cart.items = cart.items.filter(i => i._id != req.params.itemId);
  await cart.save();
  res.json(cart);
};
