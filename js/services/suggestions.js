app.factory('suggestions', [function(){
  var testData = {
    posts: [
      {
        title: 'Get a dog',
        upvotes: 5,
        comments: [],
      },
      {
        title: 'Get ice cream',
        upvotes: 8,
        comments: [],
      },
      {
        title: 'Learn all of the things!',
        upvotes: 10,
        comments: [],
      },
      {
        title: 'Go to Mars.',
        upvotes: 11,
        comments: [],
      },
    ]
  };
  return testData;
}])
