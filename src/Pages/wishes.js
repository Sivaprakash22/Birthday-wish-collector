import React from 'react';
import db from '../services/firebase'


class Wishes extends React.Component {

  constructor() {
    super();
    this.state = {
      docs: null
    }
  }

  wrap(doc) {
    let obj = ` ${doc.data().Name + " Wishes you " + doc.data().Wish + ' and says "' + doc.data().Message}"`
    return obj
  }

  async componentDidMount() {
    let data = [];
    const respones = await db.collection("wishes").get();
    respones.docs.forEach(doc => {
      data.push(this.wrap(doc))
    })
    this.setState({ docs: data })
  }


  // listAll(wishes)
  // {
  //  return wishes.forEach((wish)=>{
  //   return <li>{wish}</li>
  //   })
  // }



  render() {
    if (this.state.docs !== null) { console.log(this.state.docs) }
    return (
      <React.Fragment>
        <h2>See your wishes</h2>
        
        <div>{
          this.state.docs === null ? <h1>Loading...</h1> :
          this.state.docs.map((wish,index) => <li key={index}>{wish}</li>)
        }
        </div>

      </React.Fragment>)
  }
}

export default Wishes;