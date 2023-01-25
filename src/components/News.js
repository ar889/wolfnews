import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  constructor() {
    super();
            this.state = {
                          article: [],
                          loading: false,
                          page: 1,
                          totalResults: 0,
                          infinteLoading:false
    };
  }

  async componentDidMount(argument) {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
          this.props.category
        }&apiKey=${this.props.apiKey}&page=${
          argument ? argument : "1"
        }&pageSize=5`;

        this.setState({ loading: true });
        let fetchUrl = await fetch(url);
        let parsedData = await fetchUrl.json();

        this.setState({
          article: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false,
        });
  }


  fetchMoreData= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=5`;

    this.props.loadingBar(60)
    let fetchUrl = await fetch(url);
    let parsedData = await fetchUrl.json();
    this.props.loadingBar(80)

      this.setState({
        article: this.state.article.concat(parsedData.articles),
        page: this.state.page + 1,
      });
      this.props.loadingBar(100)
  }

  render() {
    return (
      <>
        <div id="news-container">
          {this.state.loading && <Loading />}
          <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length<this.state.totalResults}
          loader={<Loading/>}>
                  <div id="news-items">
            {
              this.state.article.map((element) => {
                return (
                  <div key={element.url}>
                    <NewsItem
                      title={element.title}
                      desc={element.description}
                      imageUrl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      publishedDate={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
                        </div>
                      </InfiniteScroll>
        </div>
      </>
    );
  }
}
