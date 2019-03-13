import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { TabPanelNode, Tabs } from "../src";
import "../src/assets/index.scss";
import { TabKey } from "../src/interface";

export default function() {
    const [active, setActive] = useState<TabKey>("b");

    function changeHandle(key: TabKey) {
        setActive(key);
        action("onChange")(key);
    }

    return (
        <div>
            <h1>受控组件</h1>
            <Tabs style={{ width: "300px" }} activeKey={active} onChange={changeHandle}>
                <TabPanelNode tabKey="a" tab={<span className="tab_point">tab1</span>}>
                    a
                </TabPanelNode>
                <TabPanelNode tabKey="b" tab={<span className="tab_point">tab2</span>}>
                    b
                </TabPanelNode>
                <TabPanelNode tabKey="c" tab={<span className="tab_point">tab3</span>}>
                    c
                </TabPanelNode>
            </Tabs>

            <button onClick={() => changeHandle("b")}>主动切换到b</button>
        </div>
    );
}
