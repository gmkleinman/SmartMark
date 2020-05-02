import React from 'react'
import AnnotationShowContainer from '../annotations/annotation_show_container'

class PassageShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchPassages();
    }

    render() {
        if(!this.props.passage) return null
        // debugger
        return(
            <div id='passage-show-container'>
                <AnnotationShowContainer passageId={this.props.passage.id}/> 
                <div id='passage-container'>
                    <div className='temp-header'>
                        {this.props.passage.title}<br />
                        {this.props.passage.author}
                    </div>

                    <ul className='passage'>
                    {this.props.passage.body.map((line, i) => {
                        return <li className='passage-line' key={`line-${i}`}>{line}</li>
                    })}
                    </ul>

                </div>

                <div id='annotations-container'>
                    <button onClick={this.props.openModal}>Open Modal?</button>
                </div>
                
            </div>
        )
    }
}

export default PassageShow;

