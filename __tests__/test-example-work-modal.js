import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter : new Adapter()});


const myExample =
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "lorum hisumkn soekwkwkw  wwwk",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  };

describe("ExampleWorkModal component", () => {
  let component = shallow(<ExampleWorkModal example={ myExample } open={false}/>);
  let OpenComponent = shallow(<ExampleWorkModal example={ myExample } open={true}/>);
  let anchors = component.find("a");

  it("should contain a single anchor element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("Should link to our project", () => {
    expect(anchors.prop('href')).toEqual(myExample.href);
  });

  it("Should have modal class set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed"));
    expect(OpenComponent.find(".background--skyBlue").hasClass("modal--open"));

  });

});
