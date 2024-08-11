import{Component} from 'react';
class About extends Component{
  render(){
      return (
          <>
          <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src="https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to ABC Automobiles !</h1>
      <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add Vehicles</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">sell vehicles</button>
      </div>
    </div>
  </div>
</div>




<div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
  <div className="card h-100">
    <img src="https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
<div className="col">
  <div className="card h-100">
    <img src="https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
<div className="col">
  <div className="card h-100">
    <img src="https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</div>
          </>
      )
  }
}


export default About;
