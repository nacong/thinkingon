/* eslint-disable */
import { Row,Col,Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Bar />
      <Switch>
        <Route path="/setting/profile">
          <div className="container">
            <SettingBtn />
            <Profile />
          </div>
        </Route>
        <Route path="/setting/data">
          <div className="container">
            <div className="data-box-1">
              <h1>반가워요 '<b>Admin</b>'님!</h1>
              <p id="data-p">자기소개를 입력해보실래요?</p>
              <hr id="data-hr"/>
            </div>
            <SettingBtn />
            <div className="data-box-2">
              <h1 id="data-name">신뢰도</h1>
              <div className="bar-container-1">
                <div className="bar-1">95%</div>
              </div>
              <h1 id="data-name">분석</h1>
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
            </div>
          </div>
        </Route>
        <Route path="/setting/security">
          <SettingBtn />
          <h1>hii</h1>
        </Route>
      </Switch>
    </div>
  );
}

function Bar() {
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="./IDEUS Logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Thinking On
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <button className="nav-btn"><Nav.Link as={Link} to="/rcmd">!D<br></br>추천하기</Nav.Link></button>
      <button className="nav-btn"><Nav.Link as={Link} to="/rcmded">?D<br></br>추천받기</Nav.Link></button>
      <button className="nav-btn"><Nav.Link as={Link} to="/setting/profile">admin</Nav.Link></button>
    </Navbar>
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

function Profile() {
  return(
    <div>
      <div className="my-box">
        <h1 id="profile-name">Admin</h1>
        <p>자기소개를 입력해보실래요?</p>
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

export default App;
