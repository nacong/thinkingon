/* eslint-disable */
import { Nav, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch} from 'react-router-dom';

import personData from './Data.js';

function App() {
  
  let [person, personChange] = useState(personData);

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
      </div>
      <Switch>
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
