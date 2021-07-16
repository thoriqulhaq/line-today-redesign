import React, { Component } from 'react';
import {Table, Button} from "react-bootstrap";
import BookmarkRepository from "../models/BookmarkRepository";

class Bookmark extends Component {


    getBookmarkView (bookmark) {
                return (
                        <tr>
                            <td > {bookmark.articleTitle} </td>
                            <td><Button className="text-white" href={bookmark.articleLink} variant="success">Open</Button></td>
                            <td><Button className="text-white" variant="danger" onClick={() => BookmarkRepository.deleteBookmark(bookmark.articleId)}>Delete</Button></td>
                        </tr>
                )
        }


    render() {
        let bookmarksView = BookmarkRepository.bookmarkList().flatMap(bookmark => this.getBookmarkView((bookmark)));
        console.log(bookmarksView);

        return (
            <div>
            <hr className="m-0"/>
            <div className="container mt-5 border border-grey rounded-lg bg-light">
                <div className="m-5 bg-white">
                    <Table bordered hover>
                        <thead>
                        <tr>
                            <th colSpan={3}>Bookmark</th>
                        </tr>
                        </thead>
                        <tbody>
                            {bookmarksView}
                        </tbody>
                    </Table>
                </div>
            </div>
            </div>
        )
    }

}

export default Bookmark;