export class Movie {
  constructor(data){
    this.id = data.id
    this.title = data.title
    this.score = Math.round(data.popularity)
    this.overview = data.overview
    this.img = data.poster_path ? 'https://image.tmdb.org/t/p/w500'+data.poster_path : 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg'
    this.poster2 = data.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + data.backdrop_path : 'https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png'
  }
}