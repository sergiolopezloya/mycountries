module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      code: String,
      capital: String,
      region: String,
      currency: Array,
      language: Array,
      flag: String,
      demonym: String
    },
    { timestamps: true }
  );
  const Countries = mongoose.model('countries', schema);
  return Countries;
};