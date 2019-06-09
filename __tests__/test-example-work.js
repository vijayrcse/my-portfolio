import React from 'react';
import { shallow } from 'enzyme';

import ExampleWork, { ExampleWorkBubble } from '../js/example-work'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter : new Adapter()});

const mywork =  [
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
           https://www.flickr.com/photos/ssoosay/4097410999`
    }
  }
]

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={mywork}/>);

  it("Should be a 'section' element", () => {
    console.log(component.debug());
    expect(component.type()).toEqual('section');
  });

  it("should ccontain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(mywork.length);
  });

});

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={mywork[1]}/>);
  let images = component.find("img");

  it("should contain one image", () => {
    expect(images.length).toEqual(1);
  });

  it("should have img src correctly", () => {
    expect(images.prop('src')).toEqual(mywork[1].image.src);
  });

});
