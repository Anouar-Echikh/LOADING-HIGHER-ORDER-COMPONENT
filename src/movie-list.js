import React, { Component } from "react";
import MovieCard from "./movieCard";
import WithLoading from "./loadingHOC";
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 0,
          img:
            "https://justfood.nawa3em.com//userfiles/image/0koskosy%20tunisian.jpg",
          title: "Couscous"
        },
        {
          id: 1,
          img:
            "https://modo3.com/thumbs/fit630x300/51334/1435144381/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D8%B9%D8%AC%D9%8A%D9%86%D8%A9_%D8%A7%D9%84%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7_%D8%A7%D9%84%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A9.jpg",
          title: " Pizza"
        },
        {
          id: 2,
          img: "https://i.fatafeat.com/storage/recipes/140313090451780.jpg",
          title: "Lasagna"
        }
      ]
    };
  }
  render() {
    const { isLoading } = this.props;
    return (
      <div className="movieList-container mx-5 d-flex flex-wrap justify-content-center">
        {this.state.list.map((el, index) => (
          <MovieCard item={el} />
        ))}
      </div>
    );
  }
}

export default WithLoading(MovieList);
