import React from "react";
import { connect } from "react-redux";
import { Button, FormGroup, Modal, Form, Alert } from "reactstrap";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import data from "./data-dummy.js";
import { mapStateToProps, mapDispatchToProps } from "../actions";
class FourthModal extends React.Component {
  state = {
    emailFocus: false,
    passwordFocus: false,
    data: data.department[0].topic,
    warning: { status: false, message: "" }
  };
  validator = formdata => {
    if (formdata.topic === "") {
      this.setState({
        warning: {
          status: true,
          message: "Harap Isi semua data"
        }
      });
    } else {
      this.props.next();
    }
  };
  render() {
    const formdata = this.props.biodataReducer;
    return (
      <Modal isOpen={true} modalClassName="modal-black">
        <div
          style={{ backgroundColor: "#27A7E4", paddingBottom: "20px" }}
          className="modal-header justify-content-center"
        >
          <div className="text-muted text-center ml-auto mr-auto">
            <h4 className="mb-0">Topik apa yang paling anda minati?</h4>
            <small style={{ color: "white" }}>
              Pilihlah 1 topik yang paling anda minati untuk penelitian tugas
              akhir. Topik ini akan membantu kami untuk menyajikan berita
              seputar penelitian yang sesuai dengan topik penelitian anda serta
              informasi lainnya
            </small>
          </div>
        </div>
        <div className="modal-body">
          <Form role="form">
            <FormGroup className="mb-3">
              <InputLabel style={{ color: "white" }}>
                <small>Pilih Topik Penelitian</small>
              </InputLabel>
              <Select
                style={{ width: "100%", color: "white" }}
                value={formdata.topic}
                onChange={event =>
                  this.props.onChange({
                    name: "topic",
                    value: event.target.value
                  })
                }
              >
                {this.state.data.map(item => (
                  <MenuItem key={Math.random()} value={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormGroup>
            {this.state.warning.status && (
              <Alert style={{ marginTop: "20px" }} color="danger">
                {this.state.warning.message}
              </Alert>
            )}
            <div className="text-right">
              <Button
                onClick={this.props.before}
                className="my-4"
                color="info"
                type="button"
              >
                Sebelumnya
              </Button>
              <Button
                onClick={() => this.validator(formdata)}
                className="my-4"
                color="info"
                type="button"
              >
                Selanjutnya
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FourthModal);
