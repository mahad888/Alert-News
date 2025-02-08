import React, { Component } from 'react';
import Newitem from './Newitem';
import Spinner from './Spinner';


export class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalarticle: 0,
    };
  }

  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.Category}&apiKey=d490a3fd44e34e699f5c241e425ab41a&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      article: parsedata.articles,
      totalarticle: parsedata.totalResults,
    });
    this.props.setProgress(100);
  }

  previousClick = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.Category}&apiKey=d490a3fd44e34e699f5c241e425ab41a&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      page: this.state.page - 1,
      article: parsedata.articles,
    });
    this.props.setProgress(100);
  };

  nextClick = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.Category}&apiKey=d490a3fd44e34e699f5c241e425ab41a&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      page: this.state.page + 1,
      article: parsedata.articles,
    });
    this.props.setProgress(100);
  };

  render() {
    const containerStyle = {
      margin: '0px', // Set your desired margin value here
    };

    if (!this.state.article || this.state.article.length === 0) {
      return (
        <div className="container text-center">
          <Spinner />
        </div>
      );
    }

    return (
      <>
        <div className="container">
          <h1 className="text-center" style={{ margin: '50px' }}>
            {' '}
            {this.props.Category} News
          </h1>
          <br />

          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div className="col-md-4" style={containerStyle} key={element.title}>
                  <Newitem
                    title={element.title ? element.title.slice(0, 50) : ''}
                    description={element.description ? element.description.slice(0, 85) : ''}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={!element.author ? 'Unknown' : element.author}
                    date={element.publishedAt}
                    source={element.source ? element.source.name : 'Unknown'}
                  />
                  <br />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-success"
              onClick={this.previousClick}
            >
              &laquo; Previous
            </button>
            <button
              type="button"
              disabled={this.state.page + 1 > Math.ceil(this.state.totalarticle / 18)}
              className="btn btn-success"
              onClick={this.nextClick}
            >
              Next &raquo;
            </button>
          </div>
         
        </div>
      </>
    );
  }
}

export default News;
