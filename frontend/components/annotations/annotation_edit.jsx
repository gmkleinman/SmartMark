import React from 'react'
import { fetchAnnotation } from '../../actions/annotation_actions';

class AnnotationEdit extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
                body: '',
                upvote_count: 0,
                passage_id: 0,
                annotator_id: 0, 
                start_idx: 0, 
                end_idx: 0, 
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let anno = this.props.annotation;
        this.setState({
            id: anno.id,
            body: anno.body,
            upvote_count: anno.upvote_count,
            passage_id: anno.passage_id,
            annotator_id: anno.annotator_id, 
            start_idx: anno.start_idx, 
            end_idx: anno.end_idx,           
         })
    }

    update(field) {
        return (e) => {
            this.setState( { [field]: e.currentTarget.value } )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateAnnotation(this.state);
        this.props.closeModal();
    }

    render() {
        if(!this.props.closeModal) return null;

        return(
            <div>
                <div>
                    <form>

                        <label className='form-field'>
                            <textarea
                            className='anno-textarea'
                            rows='12'
                            cols='45'
                            value={this.state.body}
                            onChange={this.update('body')}
                            />
                        </label>
                        <div id='create-button'>
                            <button id='anno-button' onClick={this.handleSubmit}>Save</button>
                        </div>
                    </form> 
                </div>
            </div>
        )
    }
}

export default AnnotationEdit;