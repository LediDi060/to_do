import React from 'react'
import { Menu, Dropdown, Button } from 'antd';
function ButtonMenu(){
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        1
      </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        2
      </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        3
      </a>
                </Menu.Item>
            </Menu>
        )
        return(
            <>
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <Button>≡</Button>
                </Dropdown>
            </>)
}
        export default ButtonMenu