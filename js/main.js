import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const mywork =  [
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "lorum hisumkn soekwkwkw  wwwk",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "lorum hisumkn soekwkwkw  wwwk",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
           https://www.flickr.com/photos/ssoosay/4097410999`
    }
  },
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "lorum hisumkn soekwkwkw  wwwk",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example3.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={mywork}/>,document.getElementById('example-work'));
