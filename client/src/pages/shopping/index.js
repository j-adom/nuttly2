import "./style.css";
import React, { Component } from "react";
import API from "../../utils/API";

class Shopping extends Component {
  state = {
    products: [],
  };

  componentDidMount(){
      this.getProducts()
  }
      
  

  getProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({
          products: res.data
        })
      )
      .catch(() =>
        this.setState({
          products: [],
          message: "No items found!"
        })
      );
  };


  render() {
    return (
        <div>
            {
                this.state.products.map(product=>(
                    <div>
                        {product.name}
                    </div>
                ))
            }
        </div>
    );
    //   <Container>
    //     <Row>
    //       <Col size="md-12">
    //         <Jumbotron>
    //           <h1 className="text-center">
    //             <strong>(React) Google Books Search</strong>
    //           </h1>
    //           <h2 className="text-center">Search for and Save Books of Interest.</h2>
    //         </Jumbotron>
    //       </Col>
    //       <Col size="md-12">
    //         <Card title="Book Search" icon="far fa-book">
    //           <Form
    //             handleInputChange={this.handleInputChange}
    //             handleFormSubmit={this.handleFormSubmit}
    //             q={this.state.q}
    //           />
    //         </Card>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col size="md-12">
    //         <Card title="Results">
    //           {this.state.books.length ? (
    //             <List>
    //               {this.state.books.map(book => (
    //                 <Book
    //                   key={book.id}
    //                   title={book.volumeInfo.title}
    //                   subtitle={book.volumeInfo.subtitle}
    //                   link={book.volumeInfo.infoLink}
    //                   authors={book.volumeInfo.authors.join(", ")}
    //                   description={book.volumeInfo.description}
    //                   image={book.volumeInfo.imageLinks.thumbnail}
    //                   Button={() => (
    //                     <button
    //                       onClick={() => this.handleBookSave(book.id)}
    //                       className="btn btn-primary ml-2"
    //                     >
    //                       Save
    //                     </button>
    //                   )}
    //                 />
    //               ))}
    //             </List>
    //           ) : (
    //             <h2 className="text-center">{this.state.message}</h2>
    //           )}
    //         </Card>
    //       </Col>
    //     </Row>
    //     <Footer />
    //   </Container>
    // );
//   }
}
}

export default Shopping;
