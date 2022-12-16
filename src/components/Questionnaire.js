class QuestionNumbers extends React.component {
    constructor(props) {
        super(props)
        this.state = {number, isSelected}
    }

    render() {
        <div>
            <button
            className={`question-number ${isSelected ? 'selected-question-number' : ''}`}
            >
                {this.state.number}
            </button>
        </div>
    }
}

class Questionnaire extends React.Component {
    constructor(props) {
        super(props)
        this.state = {questions} // parse the json file at the '/public' folder
    }

    getQuestionButtons () {
    return this.state.questions.map(
        (question) => {<button
                            className="question-numbers">{question["n"]}</button>} 
    );
    }

    render() {
        questionButtons = this.getQuestionButtons()
        return (
            <div>
                {questionButtons}
            </div>
        )
    }
}

export default Questionnaire;