/* eslint-disable */
import { Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

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
        <Nav.Link as={Link} to="/rcmd" className="nav-btn"><b>!D<br></br>추천하기</b></Nav.Link>
        <Nav.Link as={Link} to="/rcmded" className="nav-btn"><b>?D<br></br>추천받기</b></Nav.Link>
        <Nav.Link as={Link} to="/setting/profile" className="nav-btn"><b>Admin</b></Nav.Link>
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
