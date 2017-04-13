import React, { Component } from 'react';

import './home.css';
import './carousel.css';

export default class Home extends Component {
  render() {
    return (
    <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-caption d-none d-md-block text-left">
                <h1>Lorem Ipsum</h1>
                <p>
              In hac habitasse platea dictumst. Nunc facilisis justo a pellentesque elementum. Duis laoreet, justo a sollicitudin congue, leo metus efficitur enim, at facilisis quam augue eu est. Suspendisse placerat, neque eget pulvinar varius, sem nibh pretium sem, eu placerat sem ex eget velit.
              </p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Some link here</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption d-none d-md-block">
                <h1>Tincidunt Nulla</h1>
                <p>
              Donec non risus gravida, bibendum augue vel, tincidunt nulla. Nam eu ornare libero. Fusce bibendum odio fringilla risus egestas scelerisque. Nam id erat eu nisi viverra blandit et quis dui. Nullam non lorem in massa lobortis efficitur. Cras ultricies diam a ullamcorper semper.
              </p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Some link here</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption d-none d-md-block text-right">
               <h1>Curabitur Varius</h1>
                <p>
              Donec nec arcu velit. Curabitur varius eget enim id pellentesque. Fusce vitae placerat lacus, congue finibus urna. Integer dignissim aliquam purus, sed scelerisque felis cursus a. Nulla id ligula enim. Nam suscipit vehicula finibus. Curabitur vehicula sem a posuere sodales. Quisque commodo ultricies lacus, vitae malesuada est ornare congue. Integer pellentesque venenatis porttitor.
              </p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Some link here</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3>What's New</h3>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eu porttitor libero. Mauris molestie arcu et mi porttitor facilisis. Vestibulum ac lectus ac dolor porttitor pellentesque. Etiam fringilla purus nec urna aliquet sagittis. Nam vel lacus sed elit venenatis mattis. Morbi sodales, mauris non aliquam pretium, elit mi consequat urna, ut efficitur quam urna ut nisi. Integer vel sapien at velit accumsan luctus non ac turpis. Phasellus et nulla non turpis dapibus placerat.
            </p>
          <p>
            <a className="btn btn-default" href="#"
              role="button">View details &raquo;
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Technologies</h2>
          <p>
          Aenean feugiat, quam vitae condimentum mollis, felis massa tempor ligula, vitae condimentum magna ligula ac dui. Aliquam cursus laoreet eros in mattis. Proin interdum lobortis nibh, quis lacinia odio pharetra in. Curabitur pulvinar sit amet enim sed consectetur. Mauris pharetra condimentum ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus diam lacus, quis semper justo consequat id. Vestibulum fringilla gravida est sed viverra. Fusce egestas tincidunt porta. Sed nec dolor at urna venenatis gravida. Vestibulum urna odio, dictum in condimentum quis, pharetra vitae justo.
          </p>
          <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
       </div>
        <div className="col-md-4">
          <h2>Feature highlights</h2>
          <p>In hac habitasse platea dictumst. Nunc facilisis justo a pellentesque elementum. Duis laoreet, justo a sollicitudin congue, leo metus efficitur enim, at facilisis quam augue eu est. Suspendisse placerat, neque eget pulvinar varius, sem nibh pretium sem, eu placerat sem ex eget velit. Phasellus tincidunt semper consectetur. Donec faucibus, leo quis dapibus aliquam, urna massa convallis enim, at maximus ex mi eu urna. Mauris nec vestibulum quam. In hac habitasse platea dictumst. Quisque porttitor quam non odio vehicula vulputate. Curabitur sit amet ligula eu nisl malesuada rutrum nec rutrum eros.</p>
          <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
      </div>

        
      </div>
    );
  }
}
