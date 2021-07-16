import React, { Component } from 'react';
import {Button, Card, Row} from "react-bootstrap";
import BookmarkRepository from "../models/BookmarkRepository";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = [];
        this.url = "http://localhost:8080/https://today.line.me/id/portaljson/";
    }

    componentDidMount() {
        fetch(this.url,{method: "GET"})
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response wasn't okay.")
            })
            .then(result => this.setState({data: result}))
            .catch(error => console.log(error))
    }

    isEmpty(arg) {
        return arg === null || arg === undefined || arg === '' || arg === 'undefined'
    }

    getValidArticle(state) {
        let articles = state?.data?.result?.categories
            .flatMap(category => category.templates)
            .flatMap(template => template.sections)
            .flatMap(sections => sections.articles)
        let validArticles = articles.filter(article => !this.isEmpty(article?.title) &&
            !this.isEmpty(article?.thumbnail) &&
            !this.isEmpty(article?.url))

        return validArticles;
    }

    getArticleImage(image) {
        return `https://obs.line-scdn.net/${image.hash}`
    }

    getArticleUrl (url) {
        return url.url
    }


    getArticleView(article) {

        return (
                <Card style={{ width: '18rem' }} className="m-3 bg-light">
                    <Card.Img style={{ width: '18rem', height: '18rem', objectFit :'cover' }} className="p-3 rounded" variant="top" src={this.getArticleImage(article.thumbnail)} />
                    <Card.Body>
                        <Card.Title className="pb-4 font h6">{article.title}</Card.Title>
                        <Button href={this.getArticleUrl(article.url)} variant="outline-success">Read more</Button>
                        <Button variant="success" className="ml-3" onClick={() => BookmarkRepository.addBookmark(article.id, article.title, this.getArticleUrl(article.url))}>
                            <img src="assets/Bookmark-white.png"
                                 alt="bookmark"
                                 className="flex-row-reverse"
                                 height="20"
                                 className="pb-1"
                            />
                        </Button>
                    </Card.Body>
                </Card>
        )
    }

    paginate(array, page_size, page_number) {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    render() {
        if (this.isEmpty(this.state?.data)) {
           return (
               <div className="pt-5">
               <img style={{width: '100px'}} src="https://image.flaticon.com/icons/png/512/3305/3305803.png" alt="Loading"/>
               <h1 className="pt-5">Loading ...</h1>
           </div>)

        } else {
            let validArticles = this.getValidArticle(this.state);
            let firstPage = this.paginate(validArticles, 20, 1);
            let articleViews = firstPage.flatMap(article => this.getArticleView((article)))
            console.log(articleViews);
            return (
                <div>
                <hr className="m-0"/>
                <container className="container">
                    <Row className="justify-content-md-center m-3">
                        {articleViews}
                    </Row>
                </container>

                </div>
            )
        }
    }
}

export default Home;