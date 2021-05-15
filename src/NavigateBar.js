/* eslint-disable */
import { Nav, OverlayTrigger, Overlay, Tooltip, Popover } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
import './NavigateBar.css';
import { Link } from 'react-router-dom';

function NavigateBar() {

  let [show, setShow] = useState(false);
  const ref = useRef(null);
  let [target, setTarget] = useState(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  function renderTooltip(props) {
      return <Tooltip {...props}>상세정보입니다</Tooltip>;
  }

  return(
    <div className="navigation">
      <button className="logoButton"><Nav.Link as={Link} to="/"><img
        alt=""
        src="/IDEUS Logo.svg"
        width="50"
        height="50"
        className="logo"
      /></Nav.Link></button>
      <button onClick={handleClick} className="alertButton"><Nav.Link><p>알림</p></Nav.Link></button>
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
      <button className="recommendButton"><Nav.Link as={Link} to="/게시물"><span>!D</span><br/><p>추천하기</p></Nav.Link></button>
      <button className="recommendButton"><Nav.Link as={Link} to="/rcmded"><span>?D</span><br/><p>추천받기</p></Nav.Link></button>
      <button className="settingButton"><Nav.Link as={Link} to="/setting/profile"><p>Admin</p></Nav.Link></button>
    </div>
  )
}

export default NavigateBar;