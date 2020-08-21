import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationItems from "./NavigationItems";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });
  it("should render 2 <navigationItem /> if not authenticated", () => {
    // shallowly rendering navitems ,, not completely rendering the tree here
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("should render 3 <navigationItem /> if  authenticated", () => {
    // wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({ isAuthenticated: true });
    // shallowly rendering navitems ,, not completely rendering the tree here
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("logout is present?", () => {
    // wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({ isAuthenticated: true });
    // shallowly rendering navitems ,, not completely rendering the tree here
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
