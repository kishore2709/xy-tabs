import { action } from "@storybook/addon-actions";
import React from "react";
import { TabPanel, Tabs } from "../src";
import "../src/assets/index.scss";

export default function() {
    return (
        <div>
            <h1>非受控组件</h1>
            <Tabs style={{ width: "300px" }} onChange={action("onChange")}>
                <TabPanel name="a" tab={<span className="tab_point">tab1</span>}>
                    a
                </TabPanel>
                <TabPanel name="b" tab={<span className="tab_point">tab2</span>}>
                    b
                </TabPanel>
                <TabPanel name="c" tab={<span className="tab_point">tab3</span>}>
                    c
                </TabPanel>
            </Tabs>
        </div>
    );
}
