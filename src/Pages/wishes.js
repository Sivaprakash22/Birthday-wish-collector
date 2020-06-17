import React from "react";
import db from "../services/firebase";
import { Alert, Spinner, Navbar, NavbarBrand } from "reactstrap";

class Wishes extends React.Component {
  constructor() {
    super();
    this.state = {
      docs: null,
    };
  }

  wrap(doc) {
    let obj = ` ${
      doc.data().Name + "|" + doc.data().Wish + ' and  "' + doc.data().Message
    }"`;
    return obj;
  }

  async componentDidMount() {
    let data = [];
    const respones = await db.collection("wishes-ilk").get();
    respones.docs.forEach((doc) => {
      data.push(this.wrap(doc));
    });
    this.setState({ docs: data });
  }

  // listAll(wishes)
  // {
  //  return wishes.forEach((wish)=>{
  //   return <li>{wish}</li>
  //   })
  // }

  render() {
    //if (this.state.docs !== null) { console.log(this.state.docs) }
    return (
      <React.Fragment>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">See your Wishes</NavbarBrand>
          </Navbar>
        </div>

        <div>
          {this.state.docs === null ? (
            <div>
              <Spinner type="grow" color="primary" />
              <Spinner type="grow" color="secondary" />
              <Spinner type="grow" color="success" />
              <Spinner type="grow" color="danger" />
              <Spinner type="grow" color="warning" />
              <Spinner type="grow" color="info" />
              <Spinner type="grow" color="light" />
              <Spinner type="grow" color="dark" />
            </div>
          ) : (
            this.state.docs.map((wish) => (
              <Alert color="warning">
                <h4 className="alert-heading">
                  {wish.substring(0, wish.indexOf("|"))}
                </h4>
                <p>{wish.substring(wish.indexOf("|") + 1, wish.lenght)}</p>
              </Alert>
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Wishes;
