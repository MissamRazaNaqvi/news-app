import React, { Component } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.props.category}-News`;
  }
  handelPrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.Updatenow();
  }
  handelNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.Updatenow();
  }
  async componentDidMount() {
    this.Updatenow();
  }
  async Updatenow() {
   // `https://newsapi.org/v2/everything?q=bitcoin&apiKey=8c18cf6b70a14be0bc988e64064450de&page=${this.state.page}`
   
    
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=12e8b8154c7148c4a0f03f0f847a36a7&page=${this.state.page}`;
    //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9646de9b2cc94de48a475c2e427581c1&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page,
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults
    })
  }
  fetchMoreData = async () => {
   let url=`https://newsapi.org/v2/everything?q=bitcoin&apiKey=8c18cf6b70a14be0bc988e64064450de&page=1`;
   //this.setState({ page: this.state.page++ });
   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9646de9b2cc94de48a475c2e427581c1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
  };
  render() {
    return (
      <>
        <h2 className="text-center my-3 " style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top Headlines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
        >
          <div className="container ">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className=" col-md-4 col-sm-6 col-12" key={element.url}>
                 
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : "https://images.hindustantimes.com/tech/img/2022/06/22/1600x900/US-SPACE-NASA-ROCKET-MOON-20_1655921553002_1655921603046.jpg"}
                    newsUrl={element.url}
                    publishDate={element.publishedAt}
                    authore={element.author}
                  //sources={element.source}
                  />
                </div>
              })}
              <Spinner />
            </div>
          </div>
        </InfiniteScroll>
        { /* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" onClick={this.handelPrevClick} className="btn btn-dark">	&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handelNextClick} className="btn btn-dark"> Next &rarr; </button>
          </div>*/}
      </>
    )
  }
}
