import React, { Component } from 'react';
import StorageRepository from "./StorageRepository";
import Bookmark from "../pages/Bookmark";

class BookmarkRepository extends Component{

    // Adding Bookmark to the localStorage
    static addBookmark (articleId, articleTitle, articleLink) {
        if(StorageRepository.getFromLocal('Bookmark') == null) {
            localStorage.setItem('Bookmark', JSON.stringify([{articleId, articleTitle, articleLink}]));
            alert('Article has been added to the bookmark');
        } else {
            const bookmarks = JSON.parse(StorageRepository.getFromLocal('Bookmark')) || [];
            console.log(bookmarks);
            bookmarks.push({"articleId" : articleId, "articleTitle" : articleTitle, "articleLink" : articleLink});
            StorageRepository.addToLocalStorage('Bookmark', JSON.stringify(bookmarks));
            alert('Article has been added to the bookmark');
        }
    }

    static deleteBookmark(articleId, id) {

    }

    static bookmarkList() {
        const bookmarks = JSON.parse(StorageRepository.getFromLocal('Bookmark'));
        console.log(bookmarks);
        return bookmarks;
    }
}

export default BookmarkRepository;