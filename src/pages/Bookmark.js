import React, { Component } from 'react';
import {Table, Button} from "react-bootstrap";

class Bookmark extends Component {
    render() {
        return (
            <div>
            <hr className="m-0"/>
            <div className="container mt-5 border border-grey rounded-lg bg-light">
                <div className="m-5 bg-white">
                    <Table bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Article</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                            <td><Button variant="danger">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                            <td><Button variant="danger">Delete</Button></td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            </div>
        )
    }
}

export default Bookmark;