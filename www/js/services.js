angular.module('starter.services', [])

.factory('Movie', function() {
  // Might use a resource here that returns a JSON array
var data = ["2001","Metropolis","Blade Runner","Alien","The Wizard of Oz","ET","Solaris","Spirited Away","Star Wars (1977)","Close Encounters","King Kong","Terminator/Terminator 2","The Matrix","Alphaville","Back to the Future","Planet of the Apes","Brazil","The Lord of the Rings trilogy","Dark Star","Day the Earth Stood Still","Edward Scissorhands","Akira","Princess Bride","Pan's Labyrinth","Starship Troopers","Psycho","Rosemary's Baby","Don't Look Now","The Wicker Man","The Shining","The Exorcist","Nosferatu (1922)","Let the Right One In","Vampyr","Peeping Tom","The Innocents","Ringu","The Haunting","Texas Chainsaw Massacre","Dead of Night","The Cabinet of Dr Caligari","Halloween","Bride of Frankenstein","Les Diaboliques","Audition","Dracula (1958)","The Blair Witch Project","Evil Dead/Evil Dead II","Carrie","Les Vampires (1915)","Annie Hall","Borat","Some Like it Hot","Team America","Dr Strangelove","The Ladykillers","Duck Soup","Rushmore","Kind Hearts & Coronets","Monty Python's Life of Brian","Airplane!","Election","His Girl Friday","The Big Lebowski","This Is Spinal Tap","Bringing Up Baby","There's Something About Mary","Dazed and Confused","MASH","Groundhog Day","Clueless","The Great Dictator","Clerks","The Jerk","Shaun of the Dead","Apocalypse Now","North by Northwest","Once Upon a Time in the West","The Wild Bunch","Deliverance","City of God","Paths of Glory","The Wages of Fear","Crouching Tiger Hidden Dragon","The Thin Red Line","Raiders of the Lost Ark","Bullitt","Ran","Die Hard","The Adventures of Robin Hood","The Searchers","Goldfinger","Full Metal Jacket","Last of the Mohicans","Deer Hunter","Gladiator","Rome Open City","Butch Cassidy","Where Eagles Dare","The Incredibles","Wall-E","Lion King","Jungle Book","Stepbrothers"]
  // Some fake testing data
  // Connect to the db

  return {
    all: function() {
      return data;
    }
  };
});
