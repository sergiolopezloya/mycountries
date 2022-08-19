module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      country_id: String,
      email: String
    },
    { timestamps: true }
  );
  const Favorites = mongoose.model('favorites', schema);
  return Favorites;
};