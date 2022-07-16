import react, { Component, FormEventHandler } from "react";

class SubmitComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: ''
        }
    }

    onChange(e) {

        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
    }
    render() {
        return (
            // this submit input is attached to a label in ResumeUpload with id "file-upload", and the default button is hidden with css in index.css
            <div onSubmit={this.onFormSubmit}>
                <input id="file-upload" type="file" onChange={(e) => this.onChange(e)}></input>
            </div>
        )
    }

}

export default SubmitComponent;