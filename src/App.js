import React, { Component } from 'react';
import Card from './component/Card';
import InputBox from './component/InputBox';
import './App.css';

class App extends Component {

	constructor ( props ) {
		super( props );

		this.state = {
			value: '',
			cardList: []
		}
		// console.log(this);

		this.handleKeyChange = this.handleKeyChange.bind(this);
	}


    handleKeyChange = ( event ) => {
		// console.log(this);
		// console.log(event);

		this.setState({
			value: event.target.value,
			cardList: event.target.value.split('')
		});
		
		// console.log( this.state.cardList );
	}

	removeCard = ( event, index ) => {
		// console.log(event);
		// console.log(index);

		const cardList = [ ...this.state.cardList ];
		cardList.splice( index, 1 );

		this.setState({
			value: cardList.join(''),
			cardList: cardList
		});
	}

  	render () {

		// 1. React.createClass -> 자동바인딩 
		// 2. rednering 시 bind(this); performance issue
		// 3. constructor 바인딩 
		// 4. arrow fucntion es 7 ->
		// 5. @autobind 

    	return (
			<div className="App">
				<InputBox 
					value={ this.state.value } 
					handleKeyChange={ this.handleKeyChange } 
				/>

				{
					this.state.cardList.map( (card, index ) => {
						console.log(this);
						return( 
							<Card 
								key={ index }
								index={ index }
								value={ card }
								remove={ this.removeCard }
							/> 
						);
					})
				}

			</div>
		);
  	}
}

export default App;
