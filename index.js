function receivesAFunction(spy){
  return spy();
}
receivesAFunction(spy())

function returnsANamedFunction(cb){
  return function cb(){};
}

function returnsAnAnonymousFunction(){
  return function(){};
}