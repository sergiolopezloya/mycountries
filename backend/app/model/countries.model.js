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
  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Countries = mongoose.model('countries', schema);
  return Countries;
};