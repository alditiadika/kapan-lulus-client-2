import React from "react";
import { connect } from "react-redux";
import { Modal } from "reactstrap";

import { mapStateToProps, mapDispatchToProps } from "../actions";
class EndModal extends React.Component {
  state = {
    indexQuote: 0
  };
  render() {
    setTimeout(() => {
      if (this.state.indexQuote === quote.length - 1) {
        this.setState({ indexQuote: 0 });
      } else {
        this.setState({ indexQuote: this.state.indexQuote + 1 });
      }
    }, 3000);
    return (
      <Modal isOpen={true} modalClassName="modal-black">
        <div
          style={{ backgroundColor: "#27A7E4", paddingBottom: "20px" }}
          className="modal-header justify-content-center"
        >
          <div className="text-muted text-center ml-auto mr-auto">
            <img
              src={require("../../../assets/img/logo.1.png")}
              alt="..."
              className="mr-1"
              style={{ width: "20px", height: "20px" }}
            />
            <h4 className="mb-0">KAPAN• Lulus</h4>
          </div>
        </div>
        <div className="modal-body text-center">
          <blockquote className="blockquote blockquote-info">
            <p className="mb-0">{quote[this.state.indexQuote].text}</p>
            <br />
            <p className="text-right">{quote[this.state.indexQuote].name}</p>
          </blockquote>
        </div>
        {this.props.biodataReducer.isLoading && (
          <div className="modal-body text-center">
            <div className="lds-dual-ring" />
            <div className="text-center">
              Harap Tunggu, data anda sedang di proses
            </div>
            <br />
          </div>
        )}
      </Modal>
    );
  }
}
const quote = [
  {
    text: "Imagination is more important than knowledge",
    name: "Albert Einstein"
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante",
    name: "Randika alditia"
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante",
    name: "Muhammad Sandy"
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante",
    name: "Deni Dahlan"
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante",
    name: "Salahuddin Perdana"
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante",
    name: "Royyan Faizin"
  }
];

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndModal);
