/* eslint-disable */
import { Nav, Button, OverlayTrigger, Overlay, Tooltip, ref, Popover } from 'react-bootstrap';
import React, { useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch} from 'react-router-dom';

import personData from './Data.js';
import mainpostData from './mainpostData.js';

function App() {
  
  let [person, personChange] = useState(personData);
  let [show, setShow] = useState(false);
  let [target, setTarget] = useState(null);
  const ref = useRef(null);
  let [mainpost, mainpostChange] = useState(mainpostData);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div className="App">
      <div className="nav">
        <Nav.Link as={Link} to="/"><img
          alt=""
          src="/IDEUS Logo.svg"
          width="50"
          height="50"
        /></Nav.Link>
        <OverlayTrigger
        placement="right"
        delay={{ show: 100, hide: 200 }}
        overlay={renderTooltip}
        >
          <Nav.Link as={Link} to="/rcmd"><button className="nav-btn"><b>!D<br></br>추천하기</b></button></Nav.Link>
        </OverlayTrigger>
        <OverlayTrigger
        placement="right"
        delay={{ show: 100, hide: 300 }}
        overlay={renderTooltip}
        >
          <Nav.Link as={Link} to="/rcmded"><button className="nav-btn"><b>?D<br></br>추천받기</b></button></Nav.Link>
        </OverlayTrigger>
        <OverlayTrigger
        placement="right"
        delay={{ show: 100, hide: 300 }}
        overlay={renderTooltip}
        >
          <Nav.Link as={Link} to="/setting/profile"><button className="nav-btn"><b>Admin</b></button></Nav.Link>
        </OverlayTrigger>
        <div ref={ref}>
      <button onClick={handleClick} className="alertButton">알림</button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">알림</Popover.Title>
          <Popover.Content>
            알림내용<br/>알림내용알림내용알림내용
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
      </div>
      <Switch>
        <Route exact path="/게시물">
          <div className="main">
            <section className="게시물">
              <MainpostCard mainpost={mainpost[4]}/>
            </section>
            <section className="질문">
              <QuestionCard question={mainpost[4]}/>
            </section>
          </div>
        </Route>
        <Route path="/setting/profile">
          <div className="container">
            <SettingBtn />
            <Profile person={person[0]}/>
          </div>
        </Route>
        <Route path="/setting/data">
          <div className="container">
            <div className="data-box-1">
              <h1>반가워요 '<b>{ person[0].name }</b>'님!</h1>
              <p id="data-p">{ person[0].introduce }</p>
              <hr id="data-hr"/>
            </div>
            <SettingBtn />
            <Data />
          </div>
        </Route>
        <Route path="/post">
          <div class="card-deck">
            <div class="card">
              <img class="card-img-top" src="..." alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/setting/security">
          <div className="container">
            <SettingBtn />
            <h1>hii</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

function renderTooltip(props) {
  return <Tooltip {...props}>상세정보입니다</Tooltip>;
}

function MainpostCard(props) {
  return (
      <div className="card">
        <Nav.Link as={Link} to={'/detail/'+(props.mainpost.id)}>
        <img className="card-img" src={ props.mainpost.image }></img>
        <h5 className="card-subj">{ props.mainpost.title }</h5>
        <p>아이디어 { props.mainpost.idea }·좋아요 { props.mainpost.like }</p>
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
          <img src={ props.question.final[0].src }/>
          <p>{ props.question.final[0].title }</p>
        </div>
      </div>
    </div>
  )
}

function SettingBtn() {
  return(
    <div className="setting-btns">
      <button className="setting-btn"><Nav.Link as={Link} to="/setting/profile">프로필</Nav.Link></button>
      <button className="setting-btn"><Nav.Link as={Link} to="/setting/data">데이터</Nav.Link></button>
      <button className="setting-btn"><Nav.Link as={Link} to="/setting/security">보안</Nav.Link></button>
    </div>
  )
}

function Profile(props) {
  return(
    <div>
      <div className="my-box">
        <h1 id="profile-name">{ props.person.name }</h1>
        <p>{ props.person.introduce }</p>
        <hr/>
        <p><b>이메일</b> admin@ideus.us</p>
      </div>
      <div className="my-box">
        <h1 id="profile-name">외부 링크</h1>
        <p>https://www.example.com</p>
        <hr/>
        <p>http://ideus.us/</p>
        <hr/>
        <p>+</p>
      </div>
    </div>
  )
}

function Data() {
  return(
    <div className="data-box-2">
      <h1 className="data-name">신뢰도</h1>
      <div className="bar-container-1">
        <div className="bar-1">95%</div>
      </div>
      <h1 className="data-name">분석</h1>
      <div className="bar-container-2">
        <div className="bar-2">100%</div>
        <p>디자인</p>
      </div>
      <div className="bar-container-2">
        <div className="bar-2">60%</div>
        <p>코딩</p>
      </div>
      <div className="bar-container-2">
        <div className="bar-2">40%</div>
        <p>교육</p>
      </div>
      <img svg="./division line.svg"/>
      <h1 className="data-name">비교</h1>
    </div>
  )
}

export default App;
