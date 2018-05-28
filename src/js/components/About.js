import React, { Component } from 'react';
import Row from './Row.js';
import Column from './Column.js';
import Wrapper from './Wrapper.js';

import Container from './Container.js';
import Header from './Header.js';
import {Media} from 'react-bootstrap';

class About extends Component {  
  render() {
    return (
      <div>
        <Header img="1.jpg"/>
        <Container>
          <Row>
            <Column width='12'>
              <Wrapper>
                <Media>
                  <Media.Left align="top">
                    <img width={64} height={64} src="images/Icon1.png" alt="thumbnail" />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Top aligned media</Media.Heading>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                      fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                      leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </Media.Body>
                </Media>
              </Wrapper>
              <Wrapper>
                <Media>
                  <Media.Left align="top">
                    <img width={64} height={64} src="images/Icon2.png" alt="thumbnail" />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>
                      Middle aligned media
                    </Media.Heading>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                      fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                      leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </Media.Body>
                </Media>
              </Wrapper>
              <Wrapper>
                <Media>
                  <Media.Left align="top">
                    <img width={64} height={64} src="images/Icon3.png" alt="thumbnail" />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Bottom aligned media</Media.Heading>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                    leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                    </p>
                  </Media.Body>
                </Media>
              </Wrapper>
            </Column>
          </Row>
          <Row>
            <Column width='12'>

            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
