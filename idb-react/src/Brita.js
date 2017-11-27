import React from 'react';
// import { Form, FormGroup, Label, Input, Button, Collapse, Card, CardBody } from 'reactstrap';


/*       this.state = { genres : ['Alternative Health', 'Arts', 'Business', 'Business News', 'Careers', 'Comedy', 'Design',
        'Education', 'Fashion & Beauty', 'Games & Hobbies', 'Government & Organizations', 'Health', 'Higher Education', 'History',
        'Investing', 'Literature', 'Management & Marketing', 'Natural Sciences', 'News & Politics', 'Performing Arts', 'Personal Journals',
         'Podcasting', 'Podcasts', 'Professional', 'Religion & Spirituality', 'Science & Medicine', 'Self-Help', 'Social Sciences',
         'Society & Culture', 'Sports & Recreation', 'TV & Film', 'Technology', 'Training'], value: Array(9).fill(false)};
*/

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Education', sort: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSortChange(event) {
        this.setState({sort: event.target.value});
    }

    handleSubmit(event) {
        // alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
        this.props.onFilter(this.state.sort, this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Sort:
                    <select value={this.state.sort} onChange={this.handleSortChange}>
                        <option value={""}></option>
                        <option value={"asc"}>Ascending</option>
                        <option value={"dsc"}>Descending</option>
                    </select>
                </label>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Alternative Health">Alternative Health</option>
                        <option value="Arts">Arts</option>
                        <option value="Education">Education</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FlavorForm;