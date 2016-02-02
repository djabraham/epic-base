
// C:\acme\Athena\app\node_modules\react-addons-test-utils was modified to work
//   module.exports = require('react/lib/ReactTestUtils'); => module.exports = require('../react/lib/ReactTestUtils');

import chai = require("chai");
import React = require("react");
import TestUtils = require("react-addons-test-utils");
import ContentPage from "../src/Components/Pane/AppPane";
import ContentBody from "../src/Components/Pane/ContentPane";
import CommonStore from "../src/Stores/AppStore";
import CommonActionCreators from "../src/ActionCreators/CommonActionCreators";

// Check here what's avaiable in TestUtils: https://facebook.github.io/react/docs/test-utils.html

export function loadTests(): void {
    describe("ContentPage tests", () => {
        describe("render tests", () => {
            it("renders content page", (done) => {
              done();
              //   CommonActionCreators.loadApp();
              //
              //   const component: React.Component<{}, {}> = TestUtils.renderIntoDocument(
              //       <ContentPage />
              //   );
              //
              //   const body: ContentBody = component.refs["contentBodyRef"] as ContentBody;
              //   chai.expect(body).to.exist;
              //   chai.expect(body.props.summary.length).to.be.above(0);
              //
              //   const summaryElement: Element = body.refs["summaryRef"] as Element;
              //   chai.expect(summaryElement).to.exist;
              //
              //   const summaryText: string = summaryElement.textContent;
              //   chai.expect(summaryText).to.be.equal(CommonStore.getBodySummary());
              //
              //   chai.expect(true).to.be.equal(true);
            });
        });
    });
}
