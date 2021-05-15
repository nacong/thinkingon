import mainpostData from './mainpostData.js';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './Post.css';
import { Link } from 'react-router-dom';

function Post() {

    let [mainpost, mainpostChange] = useState(mainpostData);

    return(
        <div className="게시물전체">
            <section className="게시물">
                <MainpostCard mainpost={mainpost[4]}/>
            </section>
            <section className="질문">
                <QuestionCard question={mainpost[4]}/>
            </section>
        </div>
    )

    function MainpostCard(props) {
        return (
            <div className="card">
                <Nav.Link as={Link} to={'/detail/'+(props.mainpost.id)}>
                <img className="card-img" src={ props.mainpost.image }></img>
                <h5 className="card-subj">{ props.mainpost.title }</h5>
                <p>💡 { props.mainpost.idea }   ·   👍 { props.mainpost.like }</p>
                </Nav.Link>
            </div>
        )
        }
        
        function QuestionCard(props) {
        return (
            <div className="question">
                <div className="question-title">
                    <h3>{ props.question.title }</h3>
                    <p>{ props.question.date }</p>
                </div>
                <hr/>
                <div className="question-content">
                    <div className="imageArray">
                        {
                            props.question.result.map((a,i)=>{
                            return(
                                <img src={a.src}/>
                            )
                            }) 
                        }
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            <hr/>
            <div className="question-footer">
                <div className="final">
                    <Nav.Link as={Link} to={'/detail/'+(props.question.id)}>
                    <img className="card-img" src={ props.question.final[0].src }/>
                    <p className="card-subj">{ props.question.final[0].title }</p>
                    </Nav.Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Post;